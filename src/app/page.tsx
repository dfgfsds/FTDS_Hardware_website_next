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
    email: "info@ftds.in",
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
      "Buy certified refurbished laptops and desktops in Chennai from FTDS Hardware. Get tested PCs, trusted brands, clear specs and 12-month warranty support.",
    isPartOf: {
      "@id": "https://www.ftds.in/#website",
    },
    publisher: {
      "@id": "https://www.ftds.in/#organization",
    },
    mainEntity: {
      "@type": "ItemList",
      "@id": "https://www.ftds.in/#product-list",
      name: "Refurbished Laptops and Desktops in Chennai",
      description:
        "Range of professionally tested refurbished laptops and desktops available from FTDS Hardware.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Refurbished Laptops",
          url: "https://www.ftds.in/categories/refurbished-laptops",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Refurbished Desktops",
          url: "https://www.ftds.in/categories/refurbished-desktops",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Laptops and Desktops",
          url: "https://www.ftds.in/categories/laptops-and-desktops",
        },
      ],
    },
    inLanguage: "en-IN",
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
    email: "info@ftds.in",
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
          text: "Yes. FTDS Hardware professionally tests and certifies every system before sale, and includes a 12-month warranty for added confidence when choosing a refurbished laptop for everyday use.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a refurbished and a second-hand laptop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A second-hand laptop is often sold in its existing condition, without checks or warranty. FTDS Hardware inspects and tests each refurbished laptop, completes necessary repairs and provides warranty support, so you can buy with clearer information and confidence.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a refurbished laptop from FTDS Hardware last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With regular maintenance and careful handling, a certified refurbished laptop from FTDS Hardware may last around 3-5 years, depending on its condition, usage, configuration, daily workload and regular maintenance needs over time.",
        },
      },
      {
        "@type": "Question",
        name: "Does FTDS Hardware deliver outside Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FTDS Hardware delivers refurbished laptops and desktops across South India, helping customers outside Chennai arrange delivery when ordering.",
        },
      },
      {
        "@type": "Question",
        name: "Can businesses order refurbished computers in bulk from FTDS Hardware?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FTDS Hardware handles bulk and corporate orders for businesses and institutions, with configurations planned to suit their computing requirements.",
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