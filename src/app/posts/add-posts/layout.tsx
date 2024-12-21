import PostsAddSecondNavbar from "@/components/PostsAddSecondNavbar";

export default function AddContentLayout({
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
