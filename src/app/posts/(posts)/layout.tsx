import SSRPostSecondNavbar from "@/components/SSRPostSecondNavbar";


export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <>
    <SSRPostSecondNavbar />
    {children}
    </>
  );
}


