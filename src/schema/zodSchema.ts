import { z } from "zod";

const usernameRegex = /^[a-zA-Z0-9-]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signupSchema = z.object({
  username: z
    .string()
    .regex(usernameRegex, "Username can only contain letters, numbers, and hyphen")
    .max(16, { message: "Username must not exceed 16 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(
      passwordRegex,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
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
