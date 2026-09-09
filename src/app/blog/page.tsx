

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
    title: "Second Hand Laptops in Chennai | Buying Guide & Tips",

    description:
      "Explore our guide to second hand laptops in Chennai. Learn how to choose reliable laptops, compare prices, check quality, and get the best deals.",

    keywords: [
      "FTDS Hardware Blog",
      "refurbished laptop blog",
      "refurbished computer blog",
      "refurbished laptop buying guide",
      "refurbished desktop buying guide",
      "Dell refurbished laptops",
      "HP refurbished laptops",
      "Lenovo refurbished laptops",
      "laptop reviews Chennai",
      "refurbished laptop reviews",
      "refurbished computer tips",
      "laptop maintenance tips",
      "computer hardware blog",
      "business laptop guide",
      "affordable laptops Chennai",
      "refurbished IT hardware",
      "refurbished technology blog",
      "refurbished laptops Chennai",
      "refurbished desktops Chennai",
      "second hand laptop guide",
      "used laptop buying tips",
      "laptop comparison guide",
      "computer upgrade tips",
      "FTDS Chennai",
    ],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/blog",
    },

    openGraph: {
      title: "Second Hand Laptops in Chennai | Buying Guide & Tips",
      description:
        "Explore our guide to second hand laptops in Chennai. Learn how to choose reliable laptops, compare prices, check quality, and get the best deals.",
      url: "https://www.ftds.in/blog",
      siteName: "FTDS Hardware",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Second Hand Laptops in Chennai | Buying Guide & Tips",
      description:
        "Explore our guide to second hand laptops in Chennai. Learn how to choose reliable laptops, compare prices, check quality, and get the best deals.",
    },

    other: {
      "application/ld+json": JSON.stringify(blogSchema),
    },
  };
}

export default function Page() {
  return <BlogsPage />;
}