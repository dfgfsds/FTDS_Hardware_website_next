

import ContactSection from "./contentClinent";



export async function generateMetadata() {
  return {
    title: "Contact FTDS Hardware | Best Refurbished Laptops in Chennai",

    description:
      "Get in touch with FTDS Hardware for certified refurbished laptops and desktops in Chennai. Call us, visit our store, or send an enquiry for expert assistance.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/contact",
    },

    openGraph: {
      title: "Contact FTDS Hardware | Best Refurbished Laptops in Chennai",
      description:
        "Contact FTDS Hardware for certified refurbished laptops and desktops in Chennai. Call, visit our store, or enquire today.",
      url: "https://www.ftds.in/contact",
      siteName: "FTDS Hardware",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function Page() {
  return <ContactSection />;
}
