import ShippingPolicyClient from "./ShippingPolicyClient";


export async function generateMetadata() {
    const shippingPolicySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Shipping Policy - FTDS Hardware",
        url: "https://www.ftds.in/shipping_policy",
        description:
            "Shipping policy of FTDS Hardware explaining delivery charges, timelines, and courier services for laptops and IT hardware.",
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
            name: "Shipping Policy",
        },
        inLanguage: "en-IN",
        isPartOf: {
            "@type": "WebSite",
            name: "FTDS Hardware",
            url: "https://www.ftds.in",
        },
    };

    return {
        title: "Shipping Policy for Laptops & Computers | FTDS Hardware",

        description:
            "Read FTDS Hardware shipping policy covering delivery charges, timelines, courier partners, and nationwide shipping for laptops and IT products.",

        keywords: [
            "FTDS shipping policy",
            "laptop shipping Chennai",
            "IT hardware delivery India",
            "courier policy FTDS",
            "refurbished laptop shipping terms",
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
            canonical: "https://www.ftds.in/shipping_policy",
        },

        openGraph: {
            title: "Shipping Policy for Laptops & Computers | FTDS Hardware",
            description:
                "Explore FTDS Hardware shipping charges, delivery timelines, and logistics details for IT products across India.",
            url: "https://www.ftds.in/shipping_policy",
            type: "website",
            siteName: "FTDS Hardware",
            images: [
                {
                    url: "/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "Shipping Policy - FTDS Hardware",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Shipping Policy for Laptops & Computers | FTDS Hardware",
            description:
                "Check FTDS Hardware shipping policy including charges, delivery time, and service areas.",
            images: [
                "/logo.png",
            ],
            site: "@FTDSHardware",
        },

        other: {
            image_src: "/logo.png",
            "application/ld+json": JSON.stringify(shippingPolicySchema),
        },
    };
}

function Page() {
    return (
        <>
            <ShippingPolicyClient />
        </>
    );
}

export default Page;
