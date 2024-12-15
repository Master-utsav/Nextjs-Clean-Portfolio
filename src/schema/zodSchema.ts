import { z } from "zod";

const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signupSchema = z.object({
  username: z
    .string()
    .regex(usernameRegex, "only number, _, a-z, A-Z allowed")
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z
    .string()
    .regex(emailRegex, "invalid email")
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(
      passwordRegex,
      "Password must contain at least one uppercase, one lowercase, one digit, and one special character"
    ),
});

export const loginSchema = z.object({
  identity: z
    .string()
    .min(3, { message: "Identity must be at least 3 characters long" })
    .max(50, { message: "Identity can't exceed 50 characters" })
    .refine((value) => usernameRegex.test(value) || emailRegex.test(value), {
      message: "Identity must be a valid username or email",
    }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(
      passwordRegex,
      "Password must contain at least one uppercase, one lowercase, one digit, and one special character"
    ),
});
