import PostsAddSecondNavbar from "@/components/PostsAddSecondNavbar";

export default async function AddPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-w-7xl">
        <PostsAddSecondNavbar />
      </div>
      {children}
    </>
  );
}
