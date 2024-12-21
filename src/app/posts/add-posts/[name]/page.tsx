import PostsAddSecondNavbar from "@/components/PostsAddSecondNavbar";

export default async function AddPostsFormPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const slug = (await params).name;
  return (
    <>
      <div className="max-w-7xl">
        <PostsAddSecondNavbar />
      </div>
      <div className="pt-20">This is the {slug} page.</div>
    </>
  );
}
