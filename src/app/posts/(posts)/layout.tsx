import PostsSecondNavbar from "@/components/PostsSecondNavbar";
import { isAdminSessionCookie } from "@/lib/session";


export default async function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <>
    <PostsSecondNavbar isAdmin={await isAdminSessionCookie()} />
    {children}
    </>
  );
}


