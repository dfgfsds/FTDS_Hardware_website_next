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
        title: "Refurbished Laptop Dealers Chennai | Login",

        description:
            "Login to your account with trusted refurbished laptop dealers in Chennai. Manage orders, track purchases, and access your account details.",

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
            title: "Refurbished Laptop Dealers Chennai | Login",
            description:
                "Login to your account with trusted refurbished laptop dealers in Chennai. Manage orders, track purchases, and access your account details.",
            url: "https://www.ftds.in/login",
            siteName: "FTDS Hardware",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: "Refurbished Laptop Dealers Chennai | Login",
            description:
                "Login to your account with trusted refurbished laptop dealers in Chennai. Manage orders, track purchases, and access your account details.",
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
