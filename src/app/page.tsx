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
    "@type": "ElectronicsStore",
    "name": "FTDS Hardware",
    "image": "https://www.ftds.in/_next/image?url=%2FFT-DS-hardware-logo.webp&w=256&q=75",
    "url": "https://www.ftds.in/",
    "telephone": "+91-7277929292",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New no.46, Old no.45, 1st Floor (North side), Giri Road, T.Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600017",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "ratingCount": "120"
    },
    "description":
      "FTDS Hardware is South India's trusted destination for certified refurbished laptops, desktops, and IT accessories. We provide top-brand systems from Dell, HP, Lenovo, Acer, and ASUS—fully tested, warranty-backed, and delivered across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh. Buy reliable refurbished computers at the best prices online from FTDS Hardware in Chennai.",
    "openingHours": "Monday-Sunday 09:00-10:00",
    "sameAs": [
      "https://www.facebook.com/ftdshardware",
      "https://www.youtube.com/@ftdshardware",
      "https://www.instagram.com/ftds_hardware/?hl=en"
    ]
  };

  return {
    title: "FTDS Hardware – Certified Refurbished Laptops & Desktops",
    description:
      "Buy certified refurbished laptops & desktops with warranty across South India.",
    alternates: {
      canonical: "https://www.ftds.in",
    },
    openGraph: {
      title: "FTDS Hardware – Refurbished Laptops",
      description:
        "Certified refurbished laptops & desktops with warranty across South India.",
      url: "https://www.ftds.in",
      siteName: "FTDS Hardware",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },

    // JSON-LD WILL BE RENDERED IN <head>
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
      <ReasonsSection />
      <FaqSection />
      <FeatureHighlights />
      <RecentBlogs />
    </main>
  );
}
