import PrivacyPolicyClient from "./PrivacyPolicyClient";

export async function generateMetadata() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - FTDS Hardware",
    url: "https://www.ftds.in/privacy_policy",
    description:
      "Privacy Policy of FTDS Hardware explaining how user data is collected, used, and protected for IT products and refurbished laptops.",
    publisher: {
      "@type": "Organization",
      name: "FTDS Hardware",
      url: "https://www.ftds.in",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    about: {
      "@type": "Thing",
      name: "Privacy Policy",
    },
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "FTDS Hardware",
      url: "https://www.ftds.in",
    },
  };

  return {
    title: "Used Desktops in Chennai | Quality PCs at Best Prices",

    description:
      "Find reliable used desktops in Chennai at affordable prices. Explore quality-tested PCs from top brands for home, office, business, and more.",

    keywords: [
      "FTDS Hardware privacy policy",
      "data protection Chennai",
      "refurbished laptops privacy",
      "IT store privacy India",
      "user data security FTDS",
    ],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/privacy_policy",
    },

    openGraph: {
      title: "Used Desktops in Chennai | Quality PCs at Best Prices",
      description:
        "Find reliable used desktops in Chennai at affordable prices. Explore quality-tested PCs from top brands for home, office, business, and more.",
      url: "https://www.ftds.in/privacy_policy",
      siteName: "FTDS Hardware",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Privacy Policy - FTDS Hardware",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Used Desktops in Chennai | Quality PCs at Best Prices",
      description:
        "Find reliable used desktops in Chennai at affordable prices. Explore quality-tested PCs from top brands for home, office, business, and more.",
      images: [
        "/logo.png",
      ],
      site: "@FTDSHardware",
    },

    other: {
      image_src: "/logo.png",
      "application/ld+json": JSON.stringify(privacySchema),
    },
  };
}

export default function Page() {
  return (
    <>
      <PrivacyPolicyClient />
    </>
  );
}