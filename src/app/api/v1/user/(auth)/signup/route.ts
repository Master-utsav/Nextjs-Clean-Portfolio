import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { checkSignUpConstraints } from "@/schema/validCheckSchema";

interface SignupBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { username, email, password }: SignupBody = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    
    if(!checkSignUpConstraints(username , email , password)){
      return NextResponse.json(
        { success: false , message: "Invalid input" },
        { status: 400 }
      );
    }

    
    const isUserEmail = await db.user.findFirst({
      where: {
        email
        }
    })
    if(isUserEmail){
      return NextResponse.json(
        { success: false , message: "Email already exists",},
        { status: 409 }
      );
    }

    const isUserUsername = await db.user.findFirst({
      where: {
        username
        }
    })
    if(isUserUsername){
      return NextResponse.json(
        { success: false , message: "Username already exists",},
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        username: String(username),
        email: String(email.toLowerCase()),
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { success: true , message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { success: false , message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
