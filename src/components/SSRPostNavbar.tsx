import PostsNavbar from "@/components/PostsNavbar";
import { isAdminSessionCookie, isSessionCookie } from "@/lib/session";

export default async function SSRPostNavbar() {
  return <PostsNavbar isLoggedIn={await isSessionCookie()} isAdmin={await isAdminSessionCookie()} />;
}

