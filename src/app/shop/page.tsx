// app/shop/page.tsx

import ShopPageClient from "./ShopPageClient";

export async function generateMetadata() {
  return {
    title: "Shop Refurbished Laptops & Desktops in Chennai | FTDS Hardware",

    description:
      "Buy certified refurbished laptops, desktops, monitors, and accessories at affordable prices from FTDS Hardware. Tested systems with warranty and fast delivery in Chennai.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/shop",
    },

    openGraph: {
      title: "Shop Refurbished Laptops & Desktops in Chennai | FTDS Hardware",
      description:
        "Certified refurbished laptops, desktops, monitors & accessories with warranty and fast delivery in Chennai.",
      url: "https://www.ftds.in/shop",
      siteName: "FTDS Hardware",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function Page() {
  return <ShopPageClient />;
}
