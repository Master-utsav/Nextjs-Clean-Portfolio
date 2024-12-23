import PostsSecondNavbar from "@/components/PostsSecondNavbar";
import { getServerSession } from "next-auth";


export default async function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <>
      <PostsSecondNavbar session={session} />
      {children}
    </>
  );
}
