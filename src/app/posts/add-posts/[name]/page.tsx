
export default async function AddPostsFormPage({params,}: {params: Promise<{ name: string }>}) {
  const slug = (await params).name
  return (
    <>
      <div className="pt-20">This is the {slug} page.</div>
    </>
  )
}