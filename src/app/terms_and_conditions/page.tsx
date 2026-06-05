import TermsAndConditionsClient from "./TermsAndConditionsClient";

export async function generateMetadata() {
    const termsSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Terms and Conditions - FTDS Hardware",
        url: "https://www.ftds.in/terms_and_conditions",
        description:
            "Terms and conditions of FTDS Hardware outlining policies for purchasing refurbished laptops, desktops, and IT products.",
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
            name: "Terms and Conditions",
        },
        inLanguage: "en-IN",
        isPartOf: {
            "@type": "WebSite",
            name: "FTDS Hardware",
            url: "https://www.ftds.in",
        },
    };

    return {
        title: "Terms & Conditions | FTDS Hardware Chennai",

        description:
            "Read FTDS Hardware terms and conditions for buying refurbished laptops, desktops, and IT hardware with clear policies and user guidelines.",

        keywords: [
            "FTDS terms and conditions",
            "refurbished laptops policy",
            "IT hardware terms India",
            "online store terms Chennai",
            "FTDS legal policies",
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
            canonical: "https://www.ftds.in/terms_and_conditions",
        },

        openGraph: {
            title: "Terms & Conditions | FTDS Hardware Chennai",
            description:
                "Review FTDS Hardware terms and conditions for secure purchases of refurbished laptops and IT products.",
            url: "https://www.ftds.in/terms_and_conditions",
            type: "website",
            siteName: "FTDS Hardware",
            images: [
                {
                    url: "/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "Terms & Conditions - FTDS Hardware",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Terms & Conditions | FTDS Hardware Chennai",
            description:
                "Check FTDS Hardware terms for buying refurbished laptops and IT hardware with transparency and security.",
            images: [
                "/logo.png",
            ],
            site: "@FTDSHardware",
        },

        other: {
            image_src: "/logo.png",
            "application/ld+json": JSON.stringify(termsSchema),
        },
    };
}

function Page() {

    return (
        <>
            <TermsAndConditionsClient />
        </>
    );
}

export default Page;
