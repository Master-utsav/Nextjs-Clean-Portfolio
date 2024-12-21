import { PostsSecondNavItems } from "@/constants";
import PostsCardSection from "@/sections/PostsCardSection";
import PostsPageSection from "@/sections/PostsPageSection";

export default function Post() {
  return (
    <>
      <PostsPageSection screen="post"/>
      <div id="posts">
        {PostsSecondNavItems.map((item, idx) => (
          <div key={idx} className="w-full space-y-2 py-4">
            <PostsCardSection typeName={item.name} />
          </div>
        ))}
      </div>
    </>
  );
}
