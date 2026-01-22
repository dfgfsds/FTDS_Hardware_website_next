

import ContactSection from "./contentClinent";



export async function generateMetadata() {
  return {
    title: "Contact FTDS Hardware | Refurbished Computer Store in Chennai",

    description:
      " Get in touch with FTDS Hardware for refurbished laptops, desktops, and accessories in Chennai. Visit our store or contact us for expert assistance.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/contact",
    },

    openGraph: {
      title: "Contact FTDS Hardware | Refurbished Computer Store in Chennai",
      description:
        " Get in touch with FTDS Hardware for refurbished laptops, desktops, and accessories in Chennai. Visit our store or contact us for expert assistance.",
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
