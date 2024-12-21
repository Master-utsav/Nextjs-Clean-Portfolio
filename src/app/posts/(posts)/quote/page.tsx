import QuoteCards from "@/components/cards/QuoteCards";
import PostsSecondNavbar from "@/components/PostsSecondNavbar";

export default async function QuotesPage() {
  return (
    <>
      <PostsSecondNavbar />
      <div className="w-full flex flex-col gap-3 relative px-3 py-4">
        <QuoteCards type={"all"} />
      </div>
    </>
  );
}
