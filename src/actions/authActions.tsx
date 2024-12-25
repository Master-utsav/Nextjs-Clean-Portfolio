"use client"

import { loginSchema } from "@/schema/zodSchema";
import {
  checkLoginConstraintsAsEmail,
  checkLoginConstraintsAsUserName,
  returnIdentity,
} from "@/schema/validCheckSchema";
import { signIn , signOut } from "next-auth/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {

  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: "Login validation failed",
    };
  }

  const { identity: validIdentity, password: validPassword } = result.data;

  if (!validIdentity || !validPassword) {
    return {
      success: false,
      errors: {
        identity: !validIdentity ? ["Identity is required"] : [],
        password: !validPassword ? ["Password is required"] : [],
      },
      message: "All fields are required",
    };
  }

  const returnedIdentity = returnIdentity(validIdentity);
  let userIdentity: string | null = null;

  if (returnedIdentity === "username") {
    const isValidUsername = checkLoginConstraintsAsUserName(validIdentity, validPassword);
    if (!isValidUsername) {
      return {
        success: false,
        errors: { identity: ["Invalid username or password"] },
        message: "Invalid credentials",
      };
    }
    userIdentity = validIdentity;
  } else if (returnedIdentity === "email") {
    const isValidEmail = checkLoginConstraintsAsEmail(validIdentity, validPassword);
    if (!isValidEmail) {
      return {
        success: false,
        errors: { identity: ["Invalid email or password"] },
        message: "Invalid credentials",
      };
    }
    userIdentity = validIdentity.toLowerCase();
  } else {
    return {
      success: false,
      errors: { identity: ["Invalid identity format"] },
      message: "Invalid credentials",
    };
  }

  try {

    // Instead of manually creating a session, call NextAuth's signIn method
    const signInResult = await signIn("credentials", {
      redirect: false, 
      identity: userIdentity,
      password: validPassword,
    });

    if (signInResult?.error) {
      return {
        success: false,
        errors: { identity: [] , password: []},
        message: "Sign-in failed / Invalid Credentials",
      };
    }

    return {
      success: true,
      errors: {
        identity: [],
        password: [],
      },
      message: "User logged in successfully",
    };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      errors: {
        identity: [],
        password: [],
      },
      message: `Internal server error: ${error.message || "Unknown error"}`,
    };
  }
}

export async function logout() {
  try {

    await signOut({ 
      callbackUrl: "/posts/login",
      redirect: true 
    });

    return {
      success: true,
      message: "Logged out successfully",
    };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      message: `Logout failed: ${error.message || "Unknown error"}`,
    };
  }
}

