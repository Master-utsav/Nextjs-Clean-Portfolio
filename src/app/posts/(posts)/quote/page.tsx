import QuoteCards from "@/components/cards/QuoteCards";
import PostsNavbar from "@/components/PostsNavbar";
import PostsSecondNavbar from "@/components/PostsSecondNavbar";

export default function QuotesPage() {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] relative w-full">
      <main className="w-full flex flex-col gap-2 items-center">
        <PostsNavbar />
        <PostsSecondNavbar />
        <div className="w-full flex flex-col gap-3 relative px-3 py-4">
            <QuoteCards type={"all"}/>
        </div>
      </main>
    </div>
  );
}
