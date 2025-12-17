
export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.ftds.in/#website",
        url: "https://www.ftds.in/",
        name: "FTDS Hardware",
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.ftds.in/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": ["Organization", "ElectronicsStore"],
        "@id": "https://www.ftds.in/#organization",
        name: "FTDS Hardware",
        url: "https://www.ftds.in/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.ftds.in/logo.png",
        },
        telephone: "+91-7277929292",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "New no.46, Old no.45, 1st Floor (North side), Giri Road, T.Nagar",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600017",
          addressCountry: "IN",
        },

        areaServed: ["Chennai"],

        knowsAbout: [
          "refurbished laptops in Chennai",
          "refurbished laptop dealers in Chennai",
          "buy refurbished laptops",
          "Lenovo refurbished laptops",
          "Acer refurbished laptops",
          "refurbished ASUS laptops",
          "Dell refurbished laptops",
          "HP refurbished laptops",
        ],
      },

      {
        "@type": ["CollectionPage", "WebPage"],
        "@id":
          "https://www.ftds.in/categories/refurbished-laptops#webpage",
        url: "https://www.ftds.in/categories/refurbished-laptops",
        name:
          "Buy Refurbished Laptops | Certified Laptops for Sale – FTDS Hardware",

        isPartOf: { "@id": "https://www.ftds.in/#website" },

        description:
          "Shop certified refurbished laptops from FTDS Hardware. Tested, warranty-backed laptops available in Chennai with options from Lenovo, Acer, ASUS, Dell, and HP.",

        keywords: [
          "refurbished laptops in Chennai",
          "refurbished laptop dealers in Chennai",
          "buy refurbished laptops",
          "Lenovo refurbished laptops",
          "Acer refurbished laptops",
          "refurbished ASUS laptops",
          "Dell refurbished laptops",
          "HP refurbished laptops",
        ],

        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.ftds.in/assets/refurbished-laptops.jpg",
        },

        breadcrumb: {
          "@id":
            "https://www.ftds.in/categories/refurbished-laptops#breadcrumb",
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.ftds.in/categories/refurbished-laptops#breadcrumb",
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
          {
            "@type": "ListItem",
            position: 3,
            name: "Refurbished Laptops",
            item: "https://www.ftds.in/categories/refurbished-laptops",
          },
        ],
      },

      {
        "@type": "FAQPage",
        "@id":
          "https://www.ftds.in/categories/refurbished-laptops#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where can I buy refurbished laptops in Chennai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can buy refurbished laptops in Chennai from FTDS Hardware. All devices are tested and certified with 12-month service warranty.",
            },
          },
          {
            "@type": "Question",
            name: "Are there trusted refurbished laptop dealers in Chennai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. FTDS Hardware is a trusted refurbished laptop dealer in Chennai providing genuine components and after-sales support.",
            },
          },
          {
            "@type": "Question",
            name: "Which brands of refurbished laptops do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer Lenovo, Acer, ASUS, Dell, and HP refurbished laptops — all professionally tested.",
            },
          },
          {
            "@type": "Question",
            name: "Why should I buy refurbished laptops?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Refurbished laptops give great value at lower cost. FTDS Hardware includes warranty and full testing for reliability.",
            },
          },
        ],
      },
    ],
  };

  return {
    title: "Buy Refurbished Laptops in Chennai | FTDS Hardware",
    description:
      "Shop certified refurbished laptops from FTDS Hardware. Warranty-backed laptops available across top brands in Chennai.",
    alternates: {
      canonical: "https://www.ftds.in/categories/refurbished-laptops",
    },
    openGraph: {
      title: "Buy Refurbished Laptops in Chennai | FTDS Hardware",
      description:
        "Best refurbished laptops in Chennai with warranty and quality testing.",
      url: "https://www.ftds.in/categories/refurbished-laptops",
      siteName: "FTDS Hardware",
      type: "website",
    },
    twitter: { card: "summary_large_image" },

    // ⭐ SSR Schema inside <head>
    other: {
      "application/ld+json": JSON.stringify(schema),
    },
  };
}


export default function RepublicLaptopLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (  
    <>
   
      {children}
    </>
  );
}
