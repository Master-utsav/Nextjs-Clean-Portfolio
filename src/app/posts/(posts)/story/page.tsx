import PostsSecondNavbar from "@/components/PostsSecondNavbar";
import { isAdminSessionCookie } from "@/lib/session";

export default async function StoriesPage() {
  return (
    <>
      <PostsSecondNavbar isAdmin={await isAdminSessionCookie()}/>
    </>
  );
}
