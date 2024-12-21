import { isAdminSessionCookie } from "@/lib/session";
import PostsSecondNavbar from "./PostsSecondNavbar";

export default async function SSRPostSecondNavbar() {
  return  <PostsSecondNavbar isAdmin={await isAdminSessionCookie()}/>
}