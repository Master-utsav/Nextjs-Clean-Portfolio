"use server";

import { db } from "@/lib/prisma";
import { checkSignUpConstraints, checkConstraintsAsUserName, checkConstraintsAsEmail, checkConstraintsAsPassword } from "@/schema/validCheckSchema";
import { signupSchema } from "@/schema/zodSchema";
import bcrypt from "bcryptjs"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signup(prevState: any, formData: FormData) {

    const result = signupSchema.safeParse(Object.fromEntries(formData));
  
    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
        message: "Signup validation failed",
      };
    }
  
    const { username, email, password } = result.data;
  
    if (!username || !email || !password) {
      return {
        success: false,
        errors: {
          username: !username ? ["Username is required"] : [],
          email: !email ? ["Email is required"] : [],
          password: !password ? ["Password is required"] : [],
        },
        message: "All fields are required",
      };
    }
  
    if (!checkSignUpConstraints(username, email, password)) {
      return {
        success: false,
        errors: {
          username: !checkConstraintsAsUserName(username) ? ["Invalid username"] : [],
          email: !checkConstraintsAsEmail(email) ? ["Invalid email address"] : [],
          password: !checkConstraintsAsPassword(password) ? ["Invalid password format"] : [],
        },
        message: "Invalid credentials",
      };
    }
  
    try {
      const isUserEmail = await db.user.findFirst({
        where: { email },
      });
      if (isUserEmail) {
        return {
          success: false,
          errors: { email: ["Email already exists"] },
          message: "Email already exists",
        };
      }
  
      const isUserUsername = await db.user.findFirst({
        where: { username },
      });
      if (isUserUsername) {
        return {
          success: false,
          errors: { username: ["Username already exists"] },
          message: "Username already exists",
        };
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      await db.user.create({
        data: {
          username: String(username),
          email: String(email.toLowerCase()),
          password: hashedPassword,
        },
      });
  
      return {
        success: true,
        errors: {},
        message: "Signup successful",
      };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return {
        success: false,
        errors: {},
        message: `Internal server error: ${error.message || "Unknown error"}`,
      };
    }
  }