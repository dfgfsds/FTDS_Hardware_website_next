import LoginClient from "./LoginClient";

export async function generateMetadata() {
    const loginSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Login - FTDS Hardware",
        url: "https://www.ftds.in/login",
        description:
            "Login page for FTDS Hardware customers to access accounts, manage orders, and track purchases.",
        isPartOf: {
            "@type": "WebSite",
            name: "FTDS Hardware",
            url: "https://www.ftds.in",
        },
        potentialAction: {
            "@type": "LoginAction",
            target: "https://www.ftds.in/login",
        },
        inLanguage: "en-IN",
    };

    return {
        title: "Login | Buy Refurbished Laptops & Desktops – FTDS Hardware",

        description:
            "Login to your FTDS Hardware account to manage orders, track purchases, and shop refurbished laptops and IT products securely.",

        keywords: [
            "FTDS login",
            "account login",
            "refurbished laptops account",
            "IT hardware login India",
            "customer account FTDS",
        ],

        robots: {
            index: false,
            follow: false,
        },

        alternates: {
            canonical: "https://www.ftds.in/login",
        },

        openGraph: {
            title: "Login | Buy Refurbished Laptops & Desktops – FTDS Hardware",
            description:
                "Login to your FTDS Hardware account to manage orders, track purchases, and shop refurbished laptops and IT products securely.",
            url: "https://www.ftds.in/login",
            siteName: "FTDS Hardware",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: "Login | Buy Refurbished Laptops & Desktops – FTDS Hardware",
            description:
                "Login to your FTDS Hardware account to manage orders, track purchases, and shop refurbished laptops and IT products securely.",
        },

        other: {
            "application/ld+json": JSON.stringify(loginSchema),
        },
    };
}

const LoginPage = () => {
    return (
        <>
            <LoginClient />
        </>
    );
};

export default LoginPage;
