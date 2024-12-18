import MyName from "@/components/MyName";
import PostsNavbar from "@/components/PostsNavbar";
import { PostsSecondNavItems } from "@/constants";
import PostsCardSection from "@/sections/PostsCardSection";
import PostsPageSection from "@/sections/PostsPageSection";

export default function Post() {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] relative w-full overflow-hidden">
      <main className="max-w-7xl w-full flex flex-col gap-2 items-center">
        <PostsNavbar />
        <PostsPageSection />
        <div id="posts">
          {PostsSecondNavItems.map((item, idx) => (
            <div key={idx} className="w-full space-y-2 py-4">
              <PostsCardSection typeName={item.name} />
            </div>
          ))}
        </div>
      </main>
      <MyName className="sm:inline-block hidden fixed bottom-0 right-2 w-20 rounded-lg bg-transparent" />
    </div>
  );
}
