import CategoriesPage from "@/components/Categories";

// export async function generateMetadata() {

//   const categorySchema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "CollectionPage",
//         "@id": "https://www.ftds.in/categories#collectionpage",
//         url: "https://www.ftds.in/categories",
//         name: "Products – FTDS",
//         isPartOf: {
//           "@type": "WebSite",
//           "@id": "https://www.ftds.in/#website",
//         },
//         about: {
//           "@type": "Thing",
//           name: "Computer Hardware and Electronics Categories",
//         },
//       },
//       {
//         "@type": "BreadcrumbList",
//         "@id": "https://www.ftds.in/categories#breadcrumb",
//         itemListElement: [
//           {
//             "@type": "ListItem",
//             position: 1,
//             name: "Home",
//             item: "https://www.ftds.in/",
//           },
//           {
//             "@type": "ListItem",
//             position: 2,
//             name: "Categories",
//             item: "https://www.ftds.in/categories",
//           },
//         ],
//       },
//     ],
//   };

//   return {
//     title:
//       "Shop IT Categories | Refurbished Laptops & Computers FTDS ",

//     description:
//       "Explore the best refurbished laptops and desktops in Chennai from Dell, HP, Lenovo, Acer, and ASUS. Tested and certified systems with 12-month warranty",

//     robots: {
//       index: true,
//       follow: true,
//     },

//     alternates: {
//       canonical: "https://www.ftds.in/categories",
//     },

//     openGraph: {
//       title:
//         "Shop IT Categories | Refurbished Laptops & Computers FTDS ",
//       description:
//         "Explore the best refurbished laptops and desktops in Chennai from Dell, HP, Lenovo, Acer, and ASUS. Tested and certified systems with 12-month warranty",
//       url: "https://www.ftds.in/categories",
//       siteName: "FTDS Hardware",
//       type: "website",
//     },

//     twitter: {
//       card: "summary_large_image",
//     },

//       other: {
//       "application/ld+json": JSON.stringify(categorySchema),
//     },
//   };
// }

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
      "Shop IT Categories | Refurbished Laptops & Computers FTDS",

    description:
      "Explore the best refurbished laptops and desktops in Chennai from Dell, HP, Lenovo, Acer, and ASUS. Tested and certified systems with 12-month warranty",

    keywords: [
      "computer categories Chennai",
      "laptops",
      "desktops",
      "refurbished laptops",
      "refurbished desktops",
      "printers",
      "monitors",
      "keyboard and mouse",
      "computer components",
      "IT accessories",
      "FTDS Hardware",
    ],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/categories",
    },

    openGraph: {
      type: "website",
      title: "Computer Categories | Laptops, Desktops & Accessories",
      description:
        "Browse laptops, desktops, refurbished systems, printers, monitors, computer components and accessories in Chennai.",
      url: "https://www.ftds.in/categories",
      siteName: "FTDS Hardware",
      locale: "en_IN",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Computer Product Categories at FTDS Hardware",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Computer Categories | Laptops, Desktops & Accessories",
      description:
        "Explore all computer product categories including laptops, desktops, printers, monitors and accessories.",
      images: ["/logo.png"],
    },

    other: {
      "application/ld+json": JSON.stringify(categorySchema),

      // GEO Tags
      "geo.region": "IN-TN",
      "geo.placename": "Chennai",
      "geo.position": "13.0827;80.2707",
      ICBM: "13.0827,80.2707",

      // AEO Tags
      subject: "Computer Product Categories",
      classification: "Computer Store",
      coverage: "Chennai, Tamil Nadu, India",
      distribution: "global",
      rating: "general",
    },
  };
}

export default function CatePage() {
    return <CategoriesPage />;
}