import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { checkLoginConstraintsAsEmail, checkLoginConstraintsAsUserName, returnIdentity } from "@/schema/validCheckSchema";

interface LoginBody {
  identity: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { identity, password }: LoginBody = await req.json();

    if (!identity || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    let userIdentity: null | string = null;
    const returnedIdentity = returnIdentity(identity);

    if (returnedIdentity === "username") {
      const isValidConstraintsAsUserName = checkLoginConstraintsAsUserName(
        identity,
        password
      );
      if (!isValidConstraintsAsUserName) {
        return NextResponse.json(
          { success: false, message: "Invalid username or password" },
          { status: 400 }
        );
      }

      userIdentity = identity;
    } else if (returnedIdentity === "email") {
      const isValidConstraintsAsEmail = checkLoginConstraintsAsEmail(
        identity,
        password
      );
      if (!isValidConstraintsAsEmail) {
        return NextResponse.json(
          { success: false, message: "Invalid email or password" },
          { status: 400 }
        );
      }

      userIdentity = identity.toLowerCase();
    }

    if (!userIdentity) {
      return NextResponse.json(
        { success: false, message: "Invalid identity" },
        { status: 400 }
      );
    }
    
    const user = await db.user.findFirst({
      where: {
        OR: [{ username: userIdentity }, { email: userIdentity }],
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 409 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Incorrect password" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "User found successfully", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging in user:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
