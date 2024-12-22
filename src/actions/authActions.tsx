"use server";

import { loginSchema, signupSchema } from "@/schema/zodSchema";
import bcrypt from "bcryptjs";
import { db } from "@/lib/prisma";
import {
  checkLoginConstraintsAsEmail,
  checkLoginConstraintsAsUserName,
  checkSignUpConstraints,
  returnIdentity,
} from "@/schema/validCheckSchema";
import { createSession, deleteSession } from "@/lib/session";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {
  // Parse and validate form data using Zod schema
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      success : false,
      errors: result.error.flatten().fieldErrors,
      message : "Login validation failed"
    };
  }

  const { identity: validIdentity, password: validPassword } = result.data;

  if (!validIdentity || !validPassword) {
    return {
      success : false,
      errors: {
        identity: !validIdentity ? ["Identity is required"] : undefined,
        password: !validPassword ? ["Password is required"] : undefined,
      },
      message : "All fields are required"
    };
  }

  const returnedIdentity = returnIdentity(validIdentity);

  let userIdentity: string | null = null;

  if (returnedIdentity === "username") {
    const isValidUsername = checkLoginConstraintsAsUserName(validIdentity, validPassword);
    if (!isValidUsername) {
      return {
        success : false,
        errors: { identity: ["Invalid username or password"] },
        message : "Invalid Credentials"
      };
    }
    userIdentity = validIdentity;
  } else if (returnedIdentity === "email") {
    const isValidEmail = checkLoginConstraintsAsEmail(validIdentity, validPassword);
    if (!isValidEmail) {
      return {
        success : false,
        errors: { identity: ["Invalid email or password"] },
        message : "Invalid Credentials"
      };
    }
    userIdentity = validIdentity.toLowerCase();
  } else {
    return {
      success : false,
      errors: { identity: ["Invalid identity format"] },
      message : "Invalid Credentials"
    };
  }

  try {
    const user = await db.user.findFirst({
      where: { OR: [{ username: userIdentity }, { email: userIdentity }] },
    });

    if (!user) {
      return {
        success : false,
        errors: { identity: ["User not found"] },
        message : "Invalid Credentials"
      };
    }

    const isMatch = await bcrypt.compare(validPassword, user.password);

    if (!isMatch) {
      return {
        success : false,
        errors: { password: ["Incorrect password"] },
        message : "Invalid Credentials"
      };
    }

    await createSession(user.id, user.role);
    
    return {
        success : true,
        errors: { password: [""] , identity: [""]},
        message : "User Signuped Successfully"
    }

  } catch (error) {
    return {
      success : false,
      errors: {
        identity: [""],
        password: [""]
      },
      message : `Internal server error : ${error}`
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signup(prevState: any, formData: FormData) {
  // Parse and validate form data using Zod schema
  const result = signupSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      success : false,
      errors: result.error.flatten().fieldErrors,
      message : "Signup validation failed"
    };
  }


  const {username, email, password } = result.data;

  
      if (!username || !email || !password) {
        return {
            success : false,
            errors: {
              username: ["Username is required"],
              email: ["Email is required"],
              password: ["Password is required"],
            },
            message : "All Fields are Required"
          };
      }
      
      if(!checkSignUpConstraints(username , email , password)){
        return {
            success : false,
            errors: {
              username: ["Not a valid username"],
              email: ["Not a  valid email"],
              password: ["Not a valid password"],
            },
            message : "Invalid Credentials"
          };
      }
  
      try{
      const isUserEmail = await db.user.findFirst({
        where: {
          email
          }
      })
      if(isUserEmail){
        return {
           success: false,
           errors : {email : ["Email already exists"]},
           message : "Email already exists"
        }
      }
  
      const isUserUsername = await db.user.findFirst({
        where: {
          username
          }
      })
      if(isUserUsername){
        return {
            success: false ,
            errors : {email : ["Username already exists"]},
            message : "Username already exists"
         }
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
        success: true ,
        errors : {
            email : [""],
            username : [""],
            password : [""],
        },
        message : "Login Successfully"
      }
    }
    catch (error) {
        return {
            success: false ,
            errors : {
                email : [""],
                username : [""],
                password : [""],
            },
            message : `Internal server error : ${error}`
          }
    }
}

export async function logout() {
    await deleteSession();
    return {
        success : true,
        message : "logout successfully"
    }
  }

