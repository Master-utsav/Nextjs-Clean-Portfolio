import { DefaultSession, NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { generateRandomPassword, returnIdentity } from "@/schema/validCheckSchema";
import { v4 } from "uuid";

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
          return { id: user.id, name: user.username, email: user.email, role: user.role };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/posts/login", // Custom sign-in page
    error: "/", // Redirect to homepage on error
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github" || account?.provider === "google") {
        try {
          const email = user.email?.toLowerCase();
          if (!email) {
            console.error("No email returned from provider.");
            return false;
          }

          let dbUser = await db.user.findUnique({ where: { email } });

          if (!dbUser) {
            const randomPassword = generateRandomPassword();
            const hashedPassword = await bcrypt.hash(randomPassword, 10);
            const username = (profile?.name || user.name || email.split("@")[0]).trim().replace(/\s+/g, "-");
            dbUser = await db.user.create({
              data: {
                username,
                email,
                password: hashedPassword,
                role: "USER",
              },
            });
          }

          const sessionToken = v4(); 
          console.log(sessionToken);
          await db.session.create({
            data: {
              userId: dbUser.id,
              token: sessionToken,
            },
          });

          user.token = sessionToken; 
          return true;
        } catch (error) {
          console.error(`Error during ${account.provider} sign-in:`, error);
          return false;
        }
      }
      return true;
    },

    async session({ session, token }) {
      if (session.user && token.uid) {
        const dbUser = await db.user.findUnique({
          where: { id: token.uid as number },
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
        token.uid = user.id;
        token.sessionToken = user.token; 
      }
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET!,
};
