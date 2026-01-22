// app/shop/page.tsx

import ShopPageClient from "./ShopPageClient";

export async function generateMetadata() {

   const shopSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.ftds.in/shop#collectionpage",
        url: "https://www.ftds.in/shop",
        name: "Shop – FTDS",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.ftds.in/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.ftds.in/shop#breadcrumb",
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
            name: "Shop",
            item: "https://www.ftds.in/shop",
          },
        ],
      },
    ],
  };
  return {
    title: "Shop Refurbished Laptops & Desktops in Chennai | FTDS Hardware",

    description:
      " Buy certified refurbished laptops, desktops, monitors, and accessories at affordable prices from FTDS Hardware.Tested with warranty and fast delivery in Chennai.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/shop",
    },

    openGraph: {
      title: "Shop Refurbished Laptops & Desktops in Chennai | FTDS Hardware",
      description:
        " Buy certified refurbished laptops, desktops, monitors, and accessories at affordable prices from FTDS Hardware.Tested with warranty and fast delivery in Chennai.",
      url: "https://www.ftds.in/shop",
      siteName: "FTDS Hardware",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
    },

    other: {
      "application/ld+json": JSON.stringify(shopSchema),
    },
  };
}

export default function Page() {
  return <ShopPageClient />;
}
