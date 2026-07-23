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
  title: "Refurbished Laptops & Desktops in Chennai with 12-Month Warranty | FTDS Hardware",
  description:
    "Buy certified refurbished laptops & desktops in Chennai from FTDS Hardware. Dell, HP, Lenovo, Acer, ASUS. 12-month warranty, tested specs, bulk orders.",

  keywords: [
    "refurbished laptops Chennai",
    "refurbished desktops Chennai",
    "refurbished computers Chennai",
    "second hand laptops Chennai",
    "used computers Chennai",
    "Dell refurbished laptop Chennai",
    "HP refurbished laptop Chennai",
    "Lenovo refurbished laptop Chennai",
    "refurbished laptop T Nagar",
    "refurbished laptop with warranty Chennai",
    "bulk refurbished computers Chennai",
    "corporate refurbished desktops Chennai",
  ],

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },

  alternates: {
    canonical: "https://www.ftds.in/",
  },

  openGraph: {
    type: "website",
    url: "https://www.ftds.in/",
    title: "Refurbished Laptops & Desktops in Chennai with 12-Month Warranty | FTDS Hardware",
    description:
      "Certified refurbished laptops and desktops in Chennai with warranty, transparent specs, and trusted brands. 10,000+ systems sold, 12+ years experience.",
    siteName: "FTDS Hardware",
    locale: "en_IN",
    images: [
      {
        url: "https://www.ftds.in/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "FTDS Hardware Refurbished Laptops Chennai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Refurbished Laptops & Desktops in Chennai | FTDS Hardware",
    description:
      "Certified refurbished laptops and desktops in Chennai with 12-month warranty. Dell, HP, Lenovo, Acer, ASUS.",
    images: ["https://www.ftds.in/assets/banner.jpg"],
  },

  // HTML meta tags-க்கு நேரடியாக map ஆகாத Extra geo tags-ஐ custom fields-ஆக சேர்க்கிறோம்
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0418;80.2341",
    ICBM: "13.0418, 80.2341",
  },
};

export default function Home() {
  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "ComputerStore",
  //   "@id": "https://www.ftds.in/#computerstore",
  //   "name": "FTDS Hardware",
  //   "url": "https://www.ftds.in/",
  //   "logo": "https://www.ftds.in/logo.png",
  //   "image": "https://www.ftds.in/assets/banner.jpg",
  //   "description":
  //     "FTDS Hardware is a trusted provider of certified refurbished laptops and desktops in Chennai, offering high-quality systems backed by warranty.",
  //   "telephone": "+91-7277929292",
  //   "address": {
  //     "@type": "PostalAddress",
  //     "streetAddress": "Chennai",
  //     "addressLocality": "Chennai",
  //     "addressRegion": "Tamil Nadu",
  //     "postalCode": "600017",
  //     "addressCountry": "IN"

  //   },
  //   "areaServed": [
  //     {
  //       "@type": "City",
  //       "name": "Chennai"
  //     },
  //     {
  //       "@type": "State",
  //       "name": "Tamil Nadu"
  //     },
  //     {
  //       "@type": "Country",
  //       "name": "India"
  //     }
  //   ],
  //   "sameAs": [
  //     "https://www.facebook.com/ftdshardware",
  //     "https://www.instagram.com/ftds_hardware"
  //   ]
  // };

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "name": "FTDS Hardware",
    "alternateName": "FT Digital Solutions",
    "url": "https://www.ftds.in/",
    "logo": "https://www.ftds.in/logo.png",
    "image": "https://www.ftds.in/assets/banner.jpg",
    "description": "FTDS Hardware sells certified refurbished laptops and desktops in Chennai with 12-month warranty, transparent specifications, and support for individuals and businesses.",
    "telephone": "+91-7277929292",
    "email": "ftdigitalsolution777@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New No.46, Old No.45, 1st Floor (North side), Giri Road",
      "addressLocality": "T. Nagar, Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0418,
      "longitude": 80.2341
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/ftdshardware",
      "https://www.youtube.com/@ftdshardware",
      "https://www.instagram.com/ftds_hardware",
      "https://x.com/ftdshardware"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "98"
    },
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    }
  };

  // 2. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are refurbished computers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refurbished computers are pre-owned systems that have been professionally tested, restored, and verified for reliable use."
        }
      },
      {
        "@type": "Question",
        "name": "Does FTDS Hardware offer warranty on refurbished systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our refurbished computers come with one year warranty support for peace of mind."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply refurbished systems in bulk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We cater to bulk buyers, businesses, and institutions with consistent system configurations."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the right refurbished computer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team at FTDS Hardware helps you select a system based on your usage requirements, budget, and performance needs."
        }
      },
      {
        "@type": "Question",
        "name": "Are refurbished computers from FTDS Hardware reliable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every refurbished computer sold by FTDS Hardware undergoes a rigorous multi-point inspection and testing process to ensure consistent performance."
        }
      },
      {
        "@type": "Question",
        "name": "Which brands of refurbished computers do you sell?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We stock a rotating selection of Dell, HP, Lenovo, Acer, and ASUS refurbished computers."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to buy a refurbished laptop from FTDS Hardware?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every system sold by FTDS Hardware is professionally tested, certified, and covered by a 12-month warranty, making it a safe alternative to buying new."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a refurbished and a second-hand laptop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A second-hand laptop is sold as-is with no guarantee of condition. A refurbished laptop from FTDS Hardware is inspected, tested, repaired where needed, and backed by warranty."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a refurbished laptop from FTDS Hardware last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With proper use, a certified refurbished laptop from FTDS Hardware typically performs reliably for 3 to 5 years, similar to a new system of the same specification."
        }
      },
      {
        "@type": "Question",
        "name": "Does FTDS Hardware deliver outside Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. FTDS Hardware ships refurbished laptops and desktops across South India."
        }
      },
      {
        "@type": "Question",
        "name": "Can businesses order refurbished computers in bulk from FTDS Hardware?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. FTDS Hardware supplies bulk and corporate orders with consistent configurations for businesses and institutions."
        }
      }
    ]
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ftds.in/"
      }
    ]
  };

  return (
    <>

      {/* <Script
        id="computer-store-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      /> */}
      {/* Store & Local Business Schema */}
      <Script
        id="electronics-store-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(storeSchema),
        }}
      />

      {/* FAQ Page Schema */}
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Breadcrumb Schema */}
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
