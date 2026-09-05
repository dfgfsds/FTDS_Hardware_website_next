// import Script from "next/script";
// import MainSlider from "@/components/MainSlider";
// import SubBanners from "@/components/CategorySlider";
// import TrandingProduct from "@/components/trandingProduct";
// import WhyChoose from "@/components/whychoose";
// import FaqSection from "@/components/FaqSection";
// import FeatureHighlights from "@/components/FeatureHighlights";
// import RecentBlogs from "@/components/lastestBolg";
// import Testimonials from "@/components/Testimonials";

// export const metadata = {
//   title: "Refurbished Laptops & Desktops in Chennai with 12-Month Warranty",
//   description:
//     "Shop certified refurbished laptops and desktops in Chennai from FTDS Hardware. Get tested computers, transparent specs and a 12-month warranty.",

//   keywords: [
//     "refurbished laptops and desktops in Chennai",
//     "refurbished laptops in Chennai",
//     "refurbished desktops in Chennai",
//     "certified refurbished laptops",
//     "refurbished computers Chennai",
//     "refurbished IT hardware",
//     "second hand computers Chennai",
//     "used laptops Chennai",
//     "refurbished Dell laptops",
//     "refurbished HP laptops",
//     "refurbished Lenovo laptops",
//     "refurbished Acer laptops",
//     "refurbished ASUS laptops",
//     "business refurbished computers",
//     "refurbished computers for students",
//     "refurbished laptops for office use",
//     "certified refurbished computers",
//     "tested laptops and desktops",
//     "affordable refurbished computers",
//     "refurbished computer shop Chennai",
//   ],

//   alternates: {
//     canonical: "https://www.ftds.in",
//   },

//   robots: {
//     index: true,
//     follow: true,
//     "max-image-preview": "large",
//     "max-snippet": -1,
//     "max-video-preview": -1,
//   },

//   openGraph: {
//     type: "website",
//     url: "https://www.ftdigitalsolutions.in/refurbished-laptops-desktops-chennai",
//     title: "Refurbished Laptops & Desktops in Chennai with 12-Month Warranty",
//     description:
//       "Shop certified refurbished laptops and desktops in Chennai with tested quality, transparent specifications and 12-month warranty support.",
//     siteName: "FTDS Hardware",
//     locale: "en_IN",
//     images: [
//       {
//         url: "https://www.ftds.in/logo.png",
//         alt: "Certified refurbished laptops and desktops in Chennai",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Refurbished Laptops & Desktops in Chennai with 12-Month Warranty",
//     description:
//       "Explore certified refurbished laptops and desktops in Chennai with tested quality, transparent specs and 12-month warranty support.",
//     images: ["https://www.ftds.in/logo.png"],
//   },

//   other: {
//     image_src: "https://www.ftds.in/logo.png",
//     "geo.region": "IN-TN",
//     "geo.placename": "T. Nagar, Chennai",
//     "content-location": "T. Nagar, Chennai, Tamil Nadu, India",
//     author: "FTDS Hardware",
//     publisher: "FTDS Hardware",
//     language: "English",
//     distribution: "global",
//     rating: "general",
//   },
// };

// export default function Home() {
//   // 1. WebSite Schema
//   const websiteSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     "@id": "https://www.ftdigitalsolutions.in/#website",
//     "url": "https://www.ftdigitalsolutions.in/",
//     "name": "FTDS Hardware",
//     "description": "Certified refurbished laptops and desktops in Chennai with tested quality, transparent specifications and warranty support.",
//     "publisher": {
//       "@id": "https://www.ftdigitalsolutions.in/#organization"
//     },
//     "inLanguage": "en-IN"
//   };

//   // 2. Organization Schema
//   const organizationSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "@id": "https://www.ftdigitalsolutions.in/#organization",
//     "name": "FTDS Hardware",
//     "url": "https://www.ftdigitalsolutions.in/",
//     "email": "ftdigitalsolution777@gmail.com",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "New no.46, Old no.45, 1st Floor (North side), Giri Road, T.Nagar",
//       "addressLocality": "Chennai",
//       "addressRegion": "Tamil Nadu",
//       "postalCode": "600017",
//       "addressCountry": "IN"
//     },
//     "areaServed": {
//       "@type": "City",
//       "name": "Chennai"
//     },
//     "sameAs": [
//       "https://www.facebook.com/ftdshardware",
//       "https://www.instagram.com/ftds_hardware",
//       "https://www.youtube.com/@ftdshardware",
//       "https://x.com/ftdshardware"
//     ]
//   };

//   // 3. WebPage Schema
//   const webPageSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "@id": "https://www.ftdigitalsolutions.in/refurbished-laptops-desktops-chennai/#webpage",
//     "url": "https://www.ftdigitalsolutions.in/refurbished-laptops-desktops-chennai",
//     "name": "Refurbished Laptops & Desktops in Chennai",
//     "headline": "Refurbished Laptops & Desktops in Chennai — Certified, Tested & Warranty-Backed",
//     "description": "Shop certified refurbished laptops and desktops in Chennai from FTDS Hardware, with professionally tested systems, transparent specifications and 12-month warranty support.",
//     "isPartOf": {
//       "@id": "https://www.ftdigitalsolutions.in/#website"
//     },
//     "about": {
//       "@type": "Product",
//       "name": "Refurbished Laptops and Desktops",
//       "description": "Certified and professionally tested refurbished laptops and desktops for students, professionals, businesses and enterprises."
//     },
//     "publisher": {
//       "@id": "https://www.ftdigitalsolutions.in/#organization"
//     },
//     "mainEntity": {
//       "@type": "ItemList",
//       "name": "Refurbished Laptops and Desktops in Chennai",
//       "description": "Range of professionally tested refurbished laptops and desktops available from FTDS Hardware.",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Refurbished Laptops"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Refurbished Desktops"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Certified Refurbished Computers"
//         }
//       ]
//     },
//     "author": {
//       "@id": "https://www.ftdigitalsolutions.in/#organization"
//     },
//     "inLanguage": "en-IN",
//     "dateModified": "2026-09-03"
//   };

//   // 4. Store & Local Business Schema
//   const storeSchema = {
//     "@context": "https://schema.org",
//     "@type": "ElectronicsStore",
//     "name": "FTDS Hardware",
//     "alternateName": "FT Digital Solutions",
//     "url": "https://www.ftds.in/",
//     "logo": "https://www.ftds.in/logo.png",
//     "image": "https://www.ftds.in/assets/banner.jpg",
//     "description": "FTDS Hardware sells certified refurbished laptops and desktops in Chennai with 12-month warranty, transparent specifications, and support for individuals and businesses.",
//     "telephone": "+91-7277929292",
//     "email": "ftdigitalsolution777@gmail.com",
//     "priceRange": "₹₹",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "New No.46, Old No.45, 1st Floor (North side), Giri Road",
//       "addressLocality": "T. Nagar, Chennai",
//       "addressRegion": "Tamil Nadu",
//       "postalCode": "600017",
//       "addressCountry": "IN"
//     },
//     "geo": {
//       "@type": "GeoCoordinates",
//       "latitude": 13.0418,
//       "longitude": 80.2341
//     },
//     "openingHoursSpecification": {
//       "@type": "OpeningHoursSpecification",
//       "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//       "opens": "10:00",
//       "closes": "20:00"
//     },
//     "sameAs": [
//       "https://www.facebook.com/ftdshardware",
//       "https://www.youtube.com/@ftdshardware",
//       "https://www.instagram.com/ftds_hardware",
//       "https://x.com/ftdshardware"
//     ],
//     "aggregateRating": {
//       "@type": "AggregateRating",
//       "ratingValue": "4.9",
//       "reviewCount": "98"
//     },
//     "areaServed": {
//       "@type": "State",
//       "name": "Tamil Nadu"
//     }
//   };

//   // 5. FAQPage Schema
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//       {
//         "@type": "Question",
//         "name": "Is it safe to buy a refurbished laptop from FTDS Hardware?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "Yes. Every system sold by FTDS Hardware is professionally tested, certified, and covered by a 12-month warranty, making it a safe and reliable alternative to buying new."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "What is the difference between a refurbished and a second-hand laptop?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "A second-hand laptop is usually sold as-is, with no guarantee of its condition. A refurbished laptop from FTDS Hardware is inspected, tested, repaired where needed, and backed by warranty, giving you verified reliability and greater peace of mind."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "How long does a refurbished laptop from FTDS Hardware last?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "With proper use and care, a certified refurbished laptop from FTDS Hardware can typically perform reliably for 3-5 years, offering a lifespan similar to a new system with the same specification."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Does FTDS Hardware deliver outside Chennai?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "Yes. FTDS Hardware ships refurbished laptops and desktops across South India, making it convenient to access quality refurbished systems beyond Chennai."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Can businesses order refurbished computers in bulk from FTDS Hardware?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "Yes. FTDS Hardware supplies bulk and corporate orders with consistent configurations, making it a reliable choice for businesses and institutions."
//         }
//       }
//     ]
//   };

//   // 6. BreadcrumbList Schema
//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.ftds.in/"
//       }
//     ]
//   };

//   return (
//     <>
//       <link
//         rel="image_src"
//         href="https://www.ftdigitalsolutions.in/images/refurbished-laptops-desktops-chennai.jpg"
//       />

//       {/* 1. WebSite Schema */}
//       <Script
//         id="website-schema"
//         type="application/ld+json"
//         strategy="beforeInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(websiteSchema),
//         }}
//       />

//       {/* 2. Organization Schema */}
//       <Script
//         id="organization-schema"
//         type="application/ld+json"
//         strategy="beforeInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(organizationSchema),
//         }}
//       />

//       {/* 3. WebPage Schema */}
//       <Script
//         id="webpage-schema"
//         type="application/ld+json"
//         strategy="beforeInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(webPageSchema),
//         }}
//       />

//       {/* 4. Store & Local Business Schema */}
//       <Script
//         id="electronics-store-schema"
//         type="application/ld+json"
//         strategy="beforeInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(storeSchema),
//         }}
//       />

//       {/* 5. FAQ Page Schema */}
//       <Script
//         id="faq-page-schema"
//         type="application/ld+json"
//         strategy="beforeInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(faqSchema),
//         }}
//       />

//       {/* 6. Breadcrumb Schema */}
//       <Script
//         id="breadcrumb-schema"
//         type="application/ld+json"
//         strategy="beforeInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(breadcrumbSchema),
//         }}
//       />

//       <main>
//         <MainSlider />
//         <SubBanners />
//         <TrandingProduct />
//         <WhyChoose />
//         <FaqSection />
//         <Testimonials />
//         <FeatureHighlights />
//         <RecentBlogs />
//       </main>
//     </>
//   );
// }

import Script from "next/script";
import MainSlider from "@/components/MainSlider";
import SubBanners from "@/components/CategorySlider";
import TrandingProduct from "@/components/trandingProduct";
import WhyChoose from "@/components/whychoose";
import FaqSection from "@/components/FaqSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import RecentBlogs from "@/components/lastestBolg";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Refurbished Laptops & Desktops in Chennai with 12-Month Warranty",
  description:
    "Buy certified refurbished laptops and desktops in Chennai from FTDS Hardware. Get tested PCs, trusted brands, clear specs & 12- month warranty support.",

  keywords: [
    "refurbished laptops and desktops in Chennai",
    "refurbished laptops in Chennai",
    "refurbished desktops in Chennai",
    "certified refurbished laptops",
    "refurbished computers Chennai",
    "refurbished IT hardware",
    "second hand computers Chennai",
    "used laptops Chennai",
    "refurbished Dell laptops",
    "refurbished HP laptops",
    "refurbished Lenovo laptops",
    "refurbished Acer laptops",
    "refurbished ASUS laptops",
    "business refurbished computers",
    "refurbished computers for students",
    "refurbished laptops for office use",
    "certified refurbished computers",
    "tested laptops and desktops",
    "affordable refurbished computers",
    "refurbished computer shop Chennai",
  ],

  alternates: {
    canonical: "https://www.ftds.in/",
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  openGraph: {
    type: "website",
    title: "Refurbished Laptops & Desktops in Chennai with 12-Month Warranty",
    description:
      "Buy certified refurbished laptops and desktops in Chennai from FTDS Hardware. Get tested PCs, trusted brands, clear specs & 12- month warranty support.",
    url: "https://www.ftds.in/",
    siteName: "FTDS Hardware",
    images: [
      {
        url: "https://www.ftds.in/logo.png",
        alt: "Certified refurbished laptops and desktops in Chennai",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Refurbished Laptops & Desktops in Chennai with 12-Month Warranty",
    description:
      "Explore certified refurbished laptops and desktops in Chennai with tested quality, transparent specs and 12-month warranty support.",
    images: [
      "https://www.ftds.in/logo.png",
    ],
  },

  other: {
    image_src:
      "https://www.ftds.in/logo.png",
    "geo.region": "IN-TN",
    "geo.placename": "T. Nagar, Chennai",
    "content-location": "T. Nagar, Chennai, Tamil Nadu, India",
    author: "FTDS Hardware",
    publisher: "FTDS Hardware",
    language: "English",
    distribution: "global",
    rating: "general",
  },
};

export default function Home() {
  // 1. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.ftds.in/#website",
    url: "https://www.ftds.in/",
    name: "FTDS Hardware",
    description:
      "Certified refurbished laptops and desktops in Chennai with tested quality, transparent specifications and warranty support.",
    publisher: {
      "@id": "https://www.ftdigitalsolutions.in/#organization",
    },
    inLanguage: "en - IN",
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.ftds.in/#organization",
    name: "FTDS Hardware",
    url: "https://www.ftds.in/",
    email: "ftdigitalsolution777@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "New no.46, Old no.45, 1st Floor (North side), Giri Road, T.Nagar",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600017",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Chennai",
    },
    sameAs: [
      "https://www.facebook.com/ftdshardware",
      "https://www.instagram.com/ftds_hardware",
      "https://www.youtube.com/@ftdshardware",
    ],
  };

  // 3. WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.ftds.in/#webpage",
    url: "https://www.ftds.in/",
    name: "Refurbished Laptops & Desktops in Chennai",
    headline:
      "Refurbished Laptops & Desktops in Chennai — Certified, Tested & Warranty-Backed",
    description:
      "Buy certified refurbished laptops and desktops in Chennai from FTDS Hardware. Get tested PCs, trusted brands, clear specs & 12- month warranty support.",
    isPartOf: {
      "@id": "https://www.ftds.in/#website",
    },
    about: {
      "@type": "Product",
      name: "Refurbished Laptops and Desktops",
      description:
        "Certified and professionally tested refurbished laptops and desktops for students, professionals, businesses and enterprises.",
    },
    publisher: {
      "@id": "https://www.ftds.in/#organization",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Refurbished Laptops and Desktops in Chennai",
      description:
        "Range of professionally tested refurbished laptops and desktops available from FTDS Hardware.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Refurbished Laptops",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Refurbished Desktops",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Certified Refurbished Computers",
        },
      ],
    },
    author: {
      "@id": "https://www.ftds.in/#organization",
    },
    inLanguage: "en - IN",
    dateModified: "2026-09-03",
  };

  // 4. Store & Local Business Schema
  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: "FTDS Hardware",
    alternateName: "FT Digital Solutions",
    url: "https://www.ftds.in/",
    logo: "https://www.ftds.in/logo.png",
    image: "https://www.ftds.in/logo.png",
    description:
      "FTDS Hardware sells certified refurbished laptops and desktops in Chennai with 12-month warranty, transparent specifications, and support for individuals and businesses.",
    telephone: "+91-7277929292",
    email: "ftdigitalsolution777@gmail.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "New No.46, Old No.45, 1st Floor (North side), Giri Road",
      addressLocality: "T. Nagar, Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600017",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0418,
      longitude: 80.2341,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.facebook.com/ftdshardware",
      "https://www.youtube.com/@ftdshardware",
      "https://www.instagram.com/ftds_hardware",
      "https://x.com/ftdshardware",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "98",
    },
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
  };

  // 5. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is it safe to buy a refurbished laptop from FTDS Hardware?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every system sold by FTDS Hardware is professionally tested, certified, and covered by a 12-month warranty, making it a safe and reliable alternative to buying new.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a refurbished and a second-hand laptop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A second-hand laptop is usually sold as-is, with no guarantee of its condition. A refurbished laptop from FTDS Hardware is inspected, tested, repaired where needed, and backed by warranty, giving you verified reliability and greater peace of mind.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a refurbished laptop from FTDS Hardware last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With proper use and care, a certified refurbished laptop from FTDS Hardware can typically perform reliably for 3-5 years, offering a lifespan similar to a new system with the same specification.",
        },
      },
      {
        "@type": "Question",
        name: "Does FTDS Hardware deliver outside Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FTDS Hardware ships refurbished laptops and desktops across South India, making it convenient to access quality refurbished systems beyond Chennai.",
        },
      },
      {
        "@type": "Question",
        name: "Can businesses order refurbished computers in bulk from FTDS Hardware?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FTDS Hardware supplies bulk and corporate orders with consistent configurations, making it a reliable choice for businesses and institutions.",
        },
      },
    ],
  };

  // 6. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ftds.in/",
      },
    ],
  };

  return (
    <>
      <link
        rel="image_src"
        href="https://www.ftdigitalsolutions.in/images/refurbished-laptops-desktops-chennai.jpg"
      />

      {/* 1. WebSite Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* 2. Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* 3. WebPage Schema */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* 4. Store & Local Business Schema */}
      <Script
        id="electronics-store-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(storeSchema),
        }}
      />

      {/* 5. FAQ Page Schema */}
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* 6. Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main>
        <MainSlider />
        <SubBanners />
        <TrandingProduct />
        <WhyChoose />
        <FaqSection />
        <Testimonials />
        <FeatureHighlights />
        <RecentBlogs />
      </main>
    </>
  );
}