import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";

const protectedRoutesForMaster = ["/posts/add-posts", "/ppt"];
const commonProtectedRoutes = ["/posts/logout"];
const publicRoutes = ["/posts/login", "/posts/signup"];
const openRoutes = [
  "/",
  "/posts",
  "/posts/quotes",
  "/posts/article",
  "/posts/story",
  "/posts/poetry",
  "/posts/notes",
];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const cookie = (await cookies()).get("session")?.value;
  const session = cookie ? await decrypt(cookie) : null;

  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRouteForMaster = protectedRoutesForMaster.includes(path);
  const isCommonProtectedRoute = commonProtectedRoutes.includes(path);
  const isOpenRoute = openRoutes.includes(path);

  // Redirect logged-in users away from public routes
  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  // Restrict protected routes for MASTER
  if (isProtectedRouteForMaster) {
    if (!session?.userId || session.role !== "MASTER") {
      return NextResponse.redirect(new URL("/posts/login", req.nextUrl));
    }
  }


  // Allow common protected routes for both MASTER and USER
  if (isCommonProtectedRoute) {
    if (!session?.userId) {
      return NextResponse.redirect(new URL("/posts/login", req.nextUrl));
    }
    return NextResponse.next(); // Allow /posts/logout
  }

  // Allow open routes for everyone
  if (isOpenRoute) {
    return NextResponse.next();
  }

  // Default response for unmatched routes
  return NextResponse.next();
}
