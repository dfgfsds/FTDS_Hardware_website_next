// app/shop/page.tsx

import ShopPageClient from "./ShopPageClient";

// export async function generateMetadata() {

//   const shopSchema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "CollectionPage",
//         "@id": "https://www.ftds.in/shop#collectionpage",
//         url: "https://www.ftds.in/shop",
//         name: "Shop – FTDS",
//         isPartOf: {
//           "@type": "WebSite",
//           "@id": "https://www.ftds.in/#website",
//         },
//       },
//       {
//         "@type": "BreadcrumbList",
//         "@id": "https://www.ftds.in/shop#breadcrumb",
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
//             name: "Shop",
//             item: "https://www.ftds.in/shop",
//           },
//         ],
//       },
//     ],
//   };
//   return {
//     title: "Shop Refurbished Laptops & IT Products | FTDS",

//     description:
//       "Shop refurbished laptops, desktops, and IT accessories at FTDS Hardware Chennai. Best prices, tested products, and warranty included.",

//     keywords: [
//       "refurbished laptops Chennai",
//       "buy laptops online India",
//       "IT hardware store Chennai",
//       "refurbished desktops",
//       "laptop deals FTDS",
//       "computer accessories India",
//     ],

//     robots: {
//       index: true,
//       follow: true,
//     },

//     alternates: {
//       canonical: "https://www.ftds.in/shop",
//     },

//     openGraph: {
//       title: "Shop Refurbished Laptops & IT Products | FTDS",
//       description:
//         "Shop refurbished laptops, desktops, and IT accessories at FTDS Hardware Chennai. Best prices, tested products, and warranty included.",
//       url: "https://www.ftds.in/shop",
//       siteName: "FTDS Hardware",
//       type: "website",
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: "Shop Refurbished Laptops & IT Products | FTDS",
//       description:
//         "Shop refurbished laptops, desktops, and IT accessories at FTDS Hardware Chennai. Best prices, tested products, and warranty included.",
//     },

//     other: {
//       "application/ld+json": JSON.stringify(shopSchema),
//     },
//   };
// }


export async function generateMetadata() {
  const shopSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.ftds.in/shop#collectionpage",
        url: "https://www.ftds.in/shop",
        name: "Shop Computers & IT Products",
        description:
          "Browse laptops, desktops, refurbished computers, printers, monitors, accessories and computer components.",
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
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Shop Computers & IT Products",
        url: "https://www.ftds.in/shop",
        description:
          "Browse laptops, desktops, refurbished computers, printers, monitors, accessories and computer components.",
        isPartOf: {
          "@type": "WebSite",
          name: "FTDS Hardware",
          url: "https://www.ftds.in",
        },
        publisher: {
          "@type": "Organization",
          name: "FTDS Hardware",
          url: "https://www.ftds.in",
          logo: {
            "@type": "ImageObject",
            url: "https://www.ftds.in/logo.png",
          },
        },
      },
    ],
  };

  return {
    title: "Shop Refurbished Laptops & IT Products | FTDS",

    description:
      "Shop refurbished laptops, desktops, and IT accessories at FTDS Hardware Chennai. Best prices, tested products, and warranty included.",

    keywords: [
      "refurbished laptops Chennai",
      "buy laptops online India",
      "IT hardware store Chennai",
      "refurbished desktops",
      "laptop deals FTDS",
      "computer accessories India",
    ],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/shop",
    },

    openGraph: {
      type: "website",
      title: "Shop Computers & IT Products | FTDS Hardware Chennai",
      description:
        "Browse laptops, desktops, refurbished PCs, printers, monitors, accessories and computer components at FTDS Hardware.",
      url: "https://www.ftds.in/shop",
      siteName: "FTDS Hardware",
      locale: "en_IN",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Shop Computers and IT Products at FTDS Hardware",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Shop Computers & IT Products | FTDS Hardware Chennai",
      description:
        "Explore laptops, desktops, refurbished computers, printers and accessories at competitive prices.",
      images: ["/logo.png"],
    },

    other: {
      "application/ld+json": JSON.stringify(shopSchema),

      // GEO Tags
      "geo.region": "IN-TN",
      "geo.placename": "Chennai",
      "geo.position": "13.0827;80.2707",
      ICBM: "13.0827,80.2707",

      // AEO Tags
      subject: "Computer Store in Chennai",
      classification: "Computer & IT Products Store",
      coverage: "Chennai, Tamil Nadu, India",
      distribution: "global",
      rating: "general",
    },
  };
}

export default function Page() {
  return <ShopPageClient />;
}
