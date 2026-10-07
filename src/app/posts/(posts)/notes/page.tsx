import NotionNotesCard from "@/components/cards/NotionNotesCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PGCP-AC Notes by utsav jaiswal | Notes",
  description: "PGCP-AC Notes & DAC Module notes embedded Notion document by Utsav Jaiswal.",
};

export default function NotesPage() {
  return (
    <main className="w-full min-h-screen py-6 px-3 sm:px-6 flex flex-col items-center">
      <NotionNotesCard
        title="PGCP-AC Notes by utsav jaiswal"
        description="Comprehensive DAC Module study notes, documentation, and reference materials embedded directly from Notion."
        notionUrl="https://charmed-earthworm-0aa.notion.site/DAC-Module-3c5ad890c7cb80b3a9fae986c2dca490"
        author="utsav jaiswal"
        tags={["PGCP-AC", "DAC Module", "Notion Notes"]}
      />
    </main>
  );
}
