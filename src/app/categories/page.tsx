import CategoriesPage from "@/components/Categories";

export async function generateMetadata() {

  const categorySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.ftds.in/categories#collectionpage",
        url: "https://www.ftds.in/categories",
        name: "Products – FTDS",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.ftds.in/#website",
        },
        about: {
          "@type": "Thing",
          name: "Computer Hardware and Electronics Categories",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.ftds.in/categories#breadcrumb",
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
            name: "Categories",
            item: "https://www.ftds.in/categories",
          },
        ],
      },
    ],
  };

  return {
    title:
      "Refurbished Laptops in Chennai & Refurbished Desktops in Chennai | FTDS Hardware",

    description:
      "Explore the best refurbished laptops and desktops in Chennai from Dell, HP, Lenovo, Acer, and ASUS. Tested and certified systems with 12-month warranty.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/categories",
    },

    openGraph: {
      title:
        "Refurbished Laptops & Desktops in Chennai | FTDS Hardware",
      description:
        "Buy certified refurbished laptops and desktops from top brands like Dell, HP, Lenovo, Acer, and ASUS with 12-month warranty in Chennai.",
      url: "https://www.ftds.in/categories",
      siteName: "FTDS Hardware",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
    },

      other: {
      "application/ld+json": JSON.stringify(categorySchema),
    },
  };
}



export default function CatePage() {
    return <CategoriesPage />;
}