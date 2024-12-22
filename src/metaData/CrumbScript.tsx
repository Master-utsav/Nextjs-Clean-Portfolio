const CrumbScript = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          name: ["Posts", "Notes", "Articles", "Quotes"],
          url: [
            "https://masterutsav.in/posts",
            "https://masterutsav.in/posts/notes",
            "https://masterutsav.in/posts/articles",
            "https://masterutsav.in/posts/quotes",
          ],
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://masterutsav.in",
          },
          description:
            "Navigate through the main sections of Master Utsav's website, including Posts, Notes, Articles, and Quotes.",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Posts",
                item: "https://masterutsav.in/posts",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Notes",
                item: "https://masterutsav.in/posts/notes",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Articles",
                item: "https://masterutsav.in/posts/articles",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Quotes",
                item: "https://masterutsav.in/posts/quotes",
              },
            ],
          },
        }),
      }}
    />
  );
};

export default CrumbScript;
