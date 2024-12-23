import { getQuoteData, Quote } from "@/actions/getPostsData";
import QuoteCards from "@/components/cards/QuoteCards";

export default async function QuotePage() {
  let quoteData: Quote[] = [];

  try {
    quoteData = await getQuoteData();
  } catch (error) {
    console.error("Error fetching quote data:", error);
  }

  return (
    <>
      <div className="w-full mx-auto flex flex-col gap-3 relative px-3 py-4">
        {quoteData.length > 0 ? (
          <QuoteCards type="all" quoteData={quoteData} />
        ) : (
          <p className="text-center text-gray-500">No quotes available.</p>
        )}
      </div>
    </>
  );
}
