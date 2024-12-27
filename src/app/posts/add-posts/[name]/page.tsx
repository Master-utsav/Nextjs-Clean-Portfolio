import EditAndAddPage from "@/components/Editor/EditAndAddPage";
import EditAndAddPageHeader from "@/components/ui/EditAndAddPageHeader";

export default async function AddPostsFormPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const slug = (await params).name;
  return (
    <div className=" max-w-7xl mx-auto relative flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full relative text-center">
        {slug && <EditAndAddPageHeader slug={slug} />}
      </div>
      <EditAndAddPage type={slug}/>
    </div>
  );
}
