import { getQuoteData } from "@/actions/getPostsData";
import QuoteCards from "@/components/cards/QuoteCards";

export default async function QuotesPage() {
  return (
    <div className="w-full mx-auto flex flex-col gap-3 relative px-3 py-4">
      <QuoteCards type={"all"} quoteData={await getQuoteData()} />
    </div>
  );
}
