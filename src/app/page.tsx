// app/page.tsx
import MainSlider from "@/components/MainSlider";
import SubBanners from "@/components/CategorySlider";
import TrandingProduct from "@/components/trandingProduct";
import WhyChoose from "@/components/whychoose";
import ReasonsSection from "@/components/ReasonsBuy";
import FaqSection from "@/components/FaqSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import RecentBlogs from "@/components/lastestBolg";



export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.ftds.in/#localbusiness",
    "name": "FTDS Hardware",
    "url": "https://www.ftds.in/",
    "logo": "https://www.ftds.in/logo.png",
    "image": "https://www.ftds.in/assets/banner.jpg",
    "description":
      "FTDS Hardware is a trusted provider of certified refurbished laptops and desktops in Chennai, offering high-quality systems backed by warranty.",
    "telephone": "+91-7277929292",

    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "New no.46, Old no.45, 1st Floor (North side), Giri Road, T.Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600017",
      "addressCountry": "IN"
    },

    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "ratingCount": "120"
    },

    "areaServed": [
      { "@type": "City", "name": "Chennai" },
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],

    "sameAs": [
      "https://www.facebook.com/ftdshardware",
      "https://www.instagram.com/ftds_hardware/?hl=en",
      "https://www.youtube.com/@ftdshardware"
    ]
  };

  return {
    title: "Refurbished Laptops & Desktops in Chennai - FTDS Hardware",
    description:
      "Buy certified refurbished laptops & desktops in Chennai from FTDS Hardware. Dell, HP, Lenovo systems with warranty-backed quality & support.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/",
    },

    openGraph: {
      type: "website",
      title: "Refurbished Laptops & Desktops in Chennai | FTDS Hardware",
      description:
        "Buy certified refurbished laptops and desktops in Chennai with warranty. Trusted brands, affordable pricing, and fast delivery across South India.",
      url: "https://www.ftds.in/",
      siteName: "FTDS Hardware",
      images: [
        {
          url: "https://www.ftds.in/assets/banner.jpg",
          width: 1200,
          height: 630,
          alt: "FTDS Hardware Refurbished Laptops",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Refurbished Laptops & Desktops in Chennai | FTDS Hardware",
      description:
        "Certified refurbished laptops & desktops in Chennai with warranty.",
      images: [
        "https://www.ftds.in/assets/banner.jpg",
      ],
    },

    // JSON-LD schema
    other: {
      "application/ld+json": JSON.stringify(schema),
    },
  };
}


export default function Home() {
  return (
    <main>
      <MainSlider />
      <SubBanners />
      <TrandingProduct />
      <WhyChoose />
      {/* <ReasonsSection /> */}
      <FaqSection />
      <FeatureHighlights />
      <RecentBlogs />
    </main>
  );
}
