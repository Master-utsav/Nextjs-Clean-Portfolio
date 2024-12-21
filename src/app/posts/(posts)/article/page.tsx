import PostsSecondNavbar from "@/components/PostsSecondNavbar";
import { isAdminSessionCookie } from "@/lib/session";

export default async function ArticlePage() {
  return (
    <>
      <PostsSecondNavbar isAdmin={await isAdminSessionCookie()}/>
    </>
  );
}
