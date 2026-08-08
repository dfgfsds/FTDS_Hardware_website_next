import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ftds.in"),

    title:
        "FTDS Hardware | Certified Refurbished Laptops, Desktops & IT Hardware Chennai",

    description:
        "Connect with FTDS Hardware for certified refurbished laptops, desktops, printers, computer accessories, Google Reviews and our Chennai showroom.",

    keywords: [
        "FTDS Hardware",
        "Refurbished Laptops Chennai",
        "Refurbished Desktops Chennai",
        "Certified Refurbished Laptops",
        "Used Laptops Chennai",
        "Business Laptops Chennai",
        "Student Laptops Chennai",
        "Refurbished Computers",
        "Refurbished Printers",
        "Computer Accessories Chennai",
        "Refurbished Monitors",
        "Keyboard and Mouse",
        "Affordable Laptops Chennai",
        "Corporate IT Solutions",
        "Bulk Laptop Dealers Chennai",
        "IT Hardware Chennai",
        "Refurbished IT Products",
        "Warranty Refurbished Laptops",
        "FTDS Connect",
    ],

    alternates: {
        canonical: "https://www.ftds.in/connect",
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },

    openGraph: {
        title:
            "FTDS Hardware | Certified Refurbished IT Hardware Chennai",

        description:
            "Official FTDS Hardware Connect page for refurbished laptops, desktops, printers and IT accessories.",

        url: "https://www.ftds.in/connect",

        siteName: "FTDS Hardware",

        locale: "en_IN",

        type: "website",

        images: [
            {
                url: "https://www.ftds.in/logo.png",
                width: 1200,
                height: 630,
                alt: "FTDS Hardware Connect",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "FTDS Hardware | Refurbished Laptops & IT Hardware",

        description:
            "Follow FTDS Hardware for refurbished laptops, desktops, printers and exclusive offers.",

        images: ["https://www.ftds.in/logo.png"],
    },

    category: "Technology",
};

export default function ConnectPage() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FTDS Hardware",
        "url": "https://www.ftds.in",
        "logo": "https://www.ftds.in/logo.png",
        "email": "ftdigitalsolution777@gmail.com",
        "telephone": "+91-7277929292",
        "sameAs": [
            "https://www.facebook.com/ftdshardware",
            "https://www.instagram.com/ftds_hardware/",
            "https://www.youtube.com/@ftdshardware",
            "https://www.linkedin.com/company/ft-digital-solutions/",
            "https://www.threads.com/@ftds_hardware",
            "https://wa.me/7277929292",
            "https://maps.app.goo.gl/sU25vbuUk88m61HF7"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ComputerStore",
        "@id": "https://www.ftds.in/#organization",
        "name": "FTDS Hardware",
        "url": "https://www.ftds.in",
        "logo": "https://www.ftds.in/logo.png",
        "image": "https://www.ftds.in/logo.png",
        "telephone": "+91-7277929292",
        "email": "ftdigitalsolution777@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "New No.46, Old No.45, 1st Floor (North Side), Giri Road",
            "addressLocality": "T. Nagar",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600017",
            "addressCountry": "IN"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "09:00",
                "closes": "21:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/ftdshardware",
            "https://www.instagram.com/ftds_hardware/",
            "https://www.youtube.com/@ftdshardware",
            "https://www.linkedin.com/company/ft-digital-solutions/",
            "https://www.threads.com/@ftds_hardware",
            "https://wa.me/7277929292",
            "https://maps.app.goo.gl/sU25vbuUk88m61HF7"
        ]
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FTDS Hardware Connect",
        "description": "Official Connect page for FTDS Hardware.",
        "url": "https://www.ftds.in/connect",
        "inLanguage": "en",
        "isPartOf": {
            "@type": "WebSite",
            "name": "FTDS Hardware",
            "url": "https://www.ftds.in"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ftds.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Connect",
                "item": "https://www.ftds.in/connect"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is FTDS Hardware?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FTDS Hardware is a trusted supplier of certified refurbished laptops, desktops, printers and IT accessories in Chennai."
                }
            },
            {
                "@type": "Question",
                "name": "Where is FTDS Hardware located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FTDS Hardware is located at New No.46, Old No.45, 1st Floor (North Side), Giri Road, T. Nagar, Chennai – 600017."
                }
            },
            {
                "@type": "Question",
                "name": "Does FTDS Hardware provide warranty?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Most refurbished products include a 12-month service warranty."
                }
            },
            {
                "@type": "Question",
                "name": "Can I contact FTDS Hardware through WhatsApp?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Customer support is available on WhatsApp at +91 7277929292 during business hours."
                }
            },
            {
                "@type": "Question",
                "name": "What products does FTDS Hardware offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FTDS Hardware offers refurbished laptops, desktops, printers, monitors, computer accessories, components and corporate IT solutions."
                }
            }
        ]
    };

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "FTDS Hardware Featured Services",
        "itemListElement": [
            {
                "@type": "Service",
                "position": 1,
                "name": "Refurbished Laptops"
            },
            {
                "@type": "Service",
                "position": 2,
                "name": "Refurbished Desktops"
            },
            {
                "@type": "Service",
                "position": 3,
                "name": "Printers"
            },
            {
                "@type": "Service",
                "position": 4,
                "name": "Computer Accessories"
            },
            {
                "@type": "Service",
                "position": 5,
                "name": "Corporate IT Solutions"
            }
        ]
    };

    return (
        <>
            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />

            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />

            {/* WebPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webPageSchema),
                }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            {/* FAQ Schema (AEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            {/* ItemList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(itemListSchema),
                }}
            />

            <ConnectClient />
        </>
    );
}