

import BlogsPage from "./blogClinet";




export async function generateMetadata() {

   const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://www.ftds.in/blog#blog",
        url: "https://www.ftds.in/blog",
        name: "FTDS Blog",
        publisher: {
          "@type": "Organization",
          "@id": "https://www.ftds.in/#organization",
          name: "FTDS",
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.ftds.in/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.ftds.in/blog#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ftds.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.ftds.in/blog",
          },
        ],
      },
    ],
  };
  return {
    title: "Tips for Buying Your Refurbished Hardwares | FTDS Blog",

    description:
      "Read expert guides, tips, and insights on refurbished laptops, desktops, and IT hardware to help you make smarter and cost-effective choices.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/blog",
    },

    openGraph: {
      title: "Tips for Buying Your Refurbished Hardwares | FTDS Blog",
      description:
        "Expert articles on refurbished laptops, desktops & IT hardware buying tips, guides, and cost-saving insights.",
      url: "https://www.ftds.in/blog",
      siteName: "FTDS Hardware",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
    },

    other: {
      "application/ld+json": JSON.stringify(blogSchema),
    },
  };
}

export default function Page() {
  return <BlogsPage />;
}
