import { NextRequest, NextResponse } from "next/server";

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

  const session =
    req.cookies.get("next-auth.session-token") ||
    req.cookies.get("__Secure-next-auth.session-token");

  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRouteForMaster = protectedRoutesForMaster.includes(path);
  const isCommonProtectedRoute = commonProtectedRoutes.includes(path);
  const isOpenRoute = openRoutes.includes(path);

  // Redirect logged-in users away from public routes
  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (isProtectedRouteForMaster) {
    if (!session) {
      return NextResponse.redirect(new URL("/posts/login", req.nextUrl));
    }
  }

  if (isCommonProtectedRoute) {
    if (!session) {
      return NextResponse.redirect(new URL("/posts/login", req.nextUrl));
    }
    return NextResponse.next();
  }

  if (isOpenRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
