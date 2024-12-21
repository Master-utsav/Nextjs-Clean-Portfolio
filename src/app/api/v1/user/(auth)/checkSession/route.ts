import { NextResponse } from "next/server";
import { isUserAuthenticated } from "@/app/actions/authActions";

export async function GET() {
  const isAuthenticated = await isUserAuthenticated();
  return NextResponse.json({ success: isAuthenticated }, {status : 200});
}
