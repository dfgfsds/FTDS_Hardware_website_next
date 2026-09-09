import DeliveryPolicyClient from "./DeliveryPolicyClient";

export async function generateMetadata() {
    const deliveryPolicySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Delivery Policy - FTDS Hardware",
        url: "https://www.ftds.in/delivery_policy",
        description:
            "Delivery policy of FTDS Hardware explaining order processing, delivery timelines, and service areas for IT products and refurbished laptops.",
        publisher: {
            "@type": "Organization",
            name: "FTDS Hardware",
            url: "https://www.ftds.in",
            logo: {
                "@type": "ImageObject",
                url: "https://www.ftds.in/images/logo.png",
            },
        },
        about: {
            "@type": "Thing",
            name: "Delivery Policy",
        },
        inLanguage: "en-IN",
        isPartOf: {
            "@type": "WebSite",
            name: "FTDS Hardware",
            url: "https://www.ftds.in",
        },
    };

    return {
        title: "Second Hand Desktops in Chennai | Delivery Policy",

        description:
            "Learn about our delivery policy for second hand desktops in Chennai, including delivery areas, timelines, charges, and order tracking details.",

        keywords: [
            "FTDS delivery policy",
            "laptop delivery Chennai",
            "IT hardware shipping India",
            "order delivery terms FTDS",
            "refurbished laptop delivery policy",
        ],

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
                "max-video-preview": -1,
            },
        },

        alternates: {
            canonical: "https://www.ftds.in/delivery_policy",
        },

        openGraph: {
            title: "Second Hand Desktops in Chennai | Delivery Policy",
            description:
                "Learn about our delivery policy for second hand desktops in Chennai, including delivery areas, timelines, charges, and order tracking details.",
            url: "https://www.ftds.in/delivery_policy",
            type: "website",
            siteName: "FTDS Hardware",
            images: [
                {
                    url: "/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "Delivery Policy - FTDS Hardware",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Second Hand Desktops in Chennai | Delivery Policy",
            description:
                "Learn about our delivery policy for second hand desktops in Chennai, including delivery areas, timelines, charges, and order tracking details.",
            images: [
                "/logo.png",
            ],
            site: "@FTDSHardware",
        },

        other: {
            image_src: "/logo.png",
            "application/ld+json": JSON.stringify(deliveryPolicySchema),
        },
    };
}

function Page() {

    return (
        <>
            <DeliveryPolicyClient />

        </>
    );
}

export default Page;
