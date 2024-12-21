import { PostsSecondNavItems } from "@/constants";
import PostsCardSection from "@/sections/PostsCardSection";

export default function ChooseBlogType() {
  return (
      <div id="add-posts">
        {PostsSecondNavItems.map((item, idx) => (
          <div key={idx} className="w-full space-y-2 py-4">
            <PostsCardSection typeName={item.name} />
          </div>
        ))}
      </div>
  );
}
