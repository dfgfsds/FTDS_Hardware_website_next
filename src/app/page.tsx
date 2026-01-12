import Script from "next/script";
import MainSlider from "@/components/MainSlider";
import SubBanners from "@/components/CategorySlider";
import TrandingProduct from "@/components/trandingProduct";
import WhyChoose from "@/components/whychoose";
import FaqSection from "@/components/FaqSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import RecentBlogs from "@/components/lastestBolg";

export const metadata = {
  title: "Best Refurbished Laptops in Chennai | FTDS Hardware",
  description:
    "Buy refurbished laptops in Chennai from FTDS Hardware. Certified systems with warranty, transparent specs, and reliable support. Shipping across India.",

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
    images: [
      {
        url: "https://www.ftds.in/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "FTDS Hardware Refurbished Laptops Chennai",
      },
    ],
  },
};


export default function Home() {
  const schema = {
   "@context": "https://schema.org",
    "@type": "ComputerStore",
    "@id": "https://www.ftds.in/#computerstore",
    "name": "FTDS Hardware",
    "url": "https://www.ftds.in/",
    "logo": "https://www.ftds.in/logo.png",
    "image": "https://www.ftds.in/assets/banner.jpg",
    "description":
      "FTDS Hardware is a trusted provider of certified refurbished laptops and desktops in Chennai, offering high-quality systems backed by warranty.",
    "telephone": "+91-7277929292",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chennai",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600017",
      "addressCountry": "IN"

    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "State",
        "name": "Tamil Nadu"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "sameAs": [
    "https://www.facebook.com/ftdshardware",
    "https://www.instagram.com/ftds_hardware"
  ]
};

return (
  <>
   
       <Script
        id="computer-store-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

    <main>
      <MainSlider />
      <SubBanners />
      <TrandingProduct />
      <WhyChoose />
      <FaqSection />
      <FeatureHighlights />
      <RecentBlogs />
    </main>
  </>
);
}
