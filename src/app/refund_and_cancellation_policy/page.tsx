import RefundAndCancellationPolicy from "./RefundAndCancellationPolicy";

export async function generateMetadata() {
    const refundPolicySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Refund and Cancellation Policy - FTDS Hardware",
        url: "https://www.ftds.in/refund_and_cancellation_policy",
        description:
            "Refund and cancellation policy of FTDS Hardware explaining return eligibility, timelines, and cancellation process for IT products.",
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
            name: "Refund and Cancellation Policy",
        },
        inLanguage: "en-IN",
        isPartOf: {
            "@type": "WebSite",
            name: "FTDS Hardware",
            url: "https://www.ftds.in",
        },
    };

    return {
        title: "Refurbished Desktop Computers in Chennai | Refund Policy",

        description:
            "Check our refund and cancellation policy for refurbished desktop computers in Chennai, including eligibility, cancellation terms, and refund details.",

        keywords: [
            "FTDS refund policy",
            "cancellation policy IT products",
            "refurbished laptops return policy India",
            "refund terms FTDS Hardware",
            "order cancellation Chennai",
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
            canonical: "https://www.ftds.in/refund_and_cancellation_policy",
        },

        openGraph: {
            title: "Refurbished Desktop Computers in Chennai | Refund Policy",
            description:
                "Check our refund and cancellation policy for refurbished desktop computers in Chennai, including eligibility, cancellation terms, and refund details.",
            url: "https://www.ftds.in/refund_and_cancellation_policy",
            type: "website",
            siteName: "FTDS Hardware",
            images: [
                {
                    url: "/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "Refund & Cancellation Policy - FTDS Hardware",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Refurbished Desktop Computers in Chennai | Refund Policy",
            description:
                "Check our refund and cancellation policy for refurbished desktop computers in Chennai, including eligibility, cancellation terms, and refund details.",
            images: [
                "/logo.png",
            ],
            site: "@FTDSHardware",
        },

        other: {
            image_src: "/logo.png",
            "application/ld+json": JSON.stringify(refundPolicySchema),
        },
    };
}

function Page() {
    return (
        <>
            <RefundAndCancellationPolicy />
        </>
    );
}

export default Page;
