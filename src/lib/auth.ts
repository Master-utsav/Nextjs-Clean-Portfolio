import { DefaultSession, NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { generateRandomPassword } from "@/schema/validCheckSchema";
import { createSession } from "@/lib/session";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PRIVATE_GITHUB_ID!,
      clientSecret: process.env.NEXT_PRIVATE_GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PRIVATE_GOOGLE_ID!,
      clientSecret: process.env.NEXT_PRIVATE_GOOGLE_SECRET!,
      authorization: { params: { scope: "email profile" } },
    }),
  ],
  pages: {
    signIn: "/posts/login",
    error: "/", 
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

          const existingUser = await db.user.findUnique({
            where: { email },
          });

          if (!existingUser) {
            const randomPassword = generateRandomPassword();
            const hashedPassword = await bcrypt.hash(randomPassword, 10);
             console.log(user , account , profile)
            const newUser = await db.user.create({
              data: {
                username: String(profile?.name || user.name || email.split("@")[0]),
                email,
                password: hashedPassword,
                role: "USER",
              },
            });
            await createSession(newUser.id, newUser.role);
          } else {
            await createSession(existingUser.id, existingUser.role);
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
      if (session.user && token) {
        const email = session.user.email?.toLowerCase();
        if (email) {
          const dbUser = await db.user.findUnique({
            where: { email },
          });

          if (dbUser) {
            session.user.id = dbUser.id;
            session.user.role = dbUser.role;
          }
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXT_PRIVATE_SESSION_SECRET!,
};
