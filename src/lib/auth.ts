import { DefaultSession, NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import {
  generateRandomPassword,
  returnIdentity,
} from "@/schema/validCheckSchema";
import { v4 } from "uuid";
import { sendMailForSigningInAgain, sendPasswordMail } from "./mailer";

declare module "next-auth" {
  interface User {
    token?: string;
    id: number;
    role: string;
  }

  interface Session extends DefaultSession {
    user: {
      id: number;
      role: string;
      token?: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    // GitHub OAuth Provider
    GithubProvider({
      clientId: process.env.NEXT_PRIVATE_GITHUB_ID!,
      clientSecret: process.env.NEXT_PRIVATE_GITHUB_SECRET!,
    }),
    // Google OAuth Provider
    GoogleProvider({
      clientId: process.env.NEXT_PRIVATE_GOOGLE_ID!,
      clientSecret: process.env.NEXT_PRIVATE_GOOGLE_SECRET!,
      authorization: { params: { scope: "openid email profile" } },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identity: { label: "Email or Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) return null;
        const { identity, password } = credentials;
        const returnIdentityOfUser = returnIdentity(identity);
        const username = returnIdentityOfUser === "username" ? identity : "";
        const email = returnIdentityOfUser === "email" ? identity : "";

        const user = await db.user.findFirst({
          where: {
            OR: [{ email }, { username }],
          },
        });

        if (user && (await bcrypt.compare(password, user.password))) {
          const existingSession = await db.session.findFirst({
            where: {
              userId: Number(user.id),
            },
          });

          if (existingSession) {
            return { ...user, token: existingSession.token };
          }

          const sessionToken = v4();
          await db.session.create({
            data: {
              userId: Number(user.id),
              token: sessionToken,
            },
          });
          
          return { ...user, token: sessionToken };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/posts/login", 
    error: "/posts", 
  },

  callbacks: {
    async signIn({ user, account, profile }) {

      if (account?.provider === "github" || account?.provider === "google") {
        try {
          const email = user.email?.toLowerCase();
          if (!email) {
            return false;
          }

          let dbUser = await db.user.findUnique({ where: { email } });

          const randomPassword = dbUser ? "NONE" : generateRandomPassword();
          if (!dbUser) {
            const hashedPassword = await bcrypt.hash(randomPassword, 10);
            const username = (profile?.name || user.name || email.split("@")[0])
              .trim()
              .replace(/\s+/g, "-");
            // const providerId = Number(
            //   account?.providerAccountId || profile?.sub || null
            // );
            dbUser = await db.user.create({
              data: {
                username,
                email,
                password: hashedPassword,
                role: "USER",
              },
            });
          }

          const existingSession = await db.session.findFirst({
            where: {
              userId: Number(dbUser.id),
            },
          });

          if (existingSession) {
            user.token = existingSession.token;
          } else {
            const sessionToken = v4();
            await db.session.create({
              data: {
                userId: Number(dbUser.id),
                token: sessionToken,
              },
            });
            user.token = sessionToken;
          }
          const provider = account.provider.charAt(0).toUpperCase() + account.provider.slice(1);
          if( randomPassword === "NONE"){
            await sendMailForSigningInAgain(dbUser.email , provider)
          }
          else{
            await  sendPasswordMail(dbUser.email , randomPassword , provider)
          }
          return true;
        } catch (error) {
          console.error(`Error during ${account.provider} sign-in:`, error);
          return false;
        }
      }

      return true;
    },

    async session({ session, token }) {
      if (session.user && token.uid && session.user.email) {
        const dbUser = await db.user.findUnique({
          where: { email: session.user.email },
        });

        if (dbUser) {
          session.user.id = dbUser.id;
          session.user.role = dbUser.role;
          session.user.token = token.sessionToken as string;
        }
      }

      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.uid = Number(user.id);
        token.sessionToken = user.token;
      }
      return token;
    },
  },
   
  secret: process.env.NEXTAUTH_SECRET!,
};
