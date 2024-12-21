import QuoteCards from "@/components/cards/QuoteCards";

export default function QuotesPage() {
  return (
    <div className="w-full mx-auto flex flex-col gap-3 relative px-3 py-4">
      <QuoteCards type={"all"} />
    </div>
  );
}
