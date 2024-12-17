import PostsNavbar from "@/components/PostsNavbar";
import PostsSecondNavbar from "@/components/PostsSecondNavbar";

export default function PoetryPage() {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] relative w-full">
      <main className="w-full flex flex-col gap-2 items-center">
        <PostsNavbar />
        <PostsSecondNavbar />
      </main>
    </div>
  );
}
