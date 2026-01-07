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
    "name": "FTDS Hardware",
    "url": "https://www.ftds.in/",
    "logo": "https://www.ftds.in/logo.png",
    "image": "https://www.ftds.in/assets/banner.jpg",
    "description":
      "FTDS Hardware is a trusted provider of certified refurbished laptops and desktops in Chennai, offering high-quality systems backed by warranty.",
    "telephone": "+91-7277929292",

    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN",
    },

    "areaServed": [
      { "@type": "City", "name": "Chennai" },
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" },
    ],

    "sameAs": [
      "https://www.facebook.com/ftdshardware",
      "https://www.instagram.com/ftds_hardware?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    ],
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
        "Buy certified refurbished laptops and desktops in Chennai with warranty.",
      images: [
        "https://www.ftds.in/assets/banner.jpg",
      ],
    },

    // JSON-LD Schema
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
