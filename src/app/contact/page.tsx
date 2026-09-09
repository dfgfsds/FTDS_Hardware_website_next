

import ContactSection from "./contentClinent";



export async function generateMetadata() {
  return {
    title: "Premium Refurbished Laptops in Chennai | Contact FTDS Hardware",

    description:
      "Discover premium refurbished laptops in Chennai at affordable prices. Shop quality-tested top brands with reliable performance and great value.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/contact",
    },

    openGraph: {
      title: "Premium Refurbished Laptops in Chennai | Contact FTDS Hardware",
      description:
        "Discover premium refurbished laptops in Chennai at affordable prices. Shop quality-tested top brands with reliable performance and great value.",
      url: "https://www.ftds.in/contact",
      siteName: "FTDS Hardware",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Premium Refurbished Laptops in Chennai | Contact FTDS Hardware",
      description:
        "Discover premium refurbished laptops in Chennai at affordable prices. Shop quality-tested top brands with reliable performance and great value.",
    },
  };
}

export default function Page() {
  return <ContactSection />;
}
