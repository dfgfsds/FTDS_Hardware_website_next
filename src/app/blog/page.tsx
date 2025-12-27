

import BlogsPage from "./blogClinet";




export async function generateMetadata() {
  return {
    title: "Tips for Buying Your Refurbished Hardwares | FTDS Blog",

    description:
      "Read expert guides, tips, and insights on refurbished laptops, desktops, and IT hardware to help you make smarter and cost-effective choices.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/blog",
    },

    openGraph: {
      title: "Tips for Buying Your Refurbished Hardwares | FTDS Blog",
      description:
        "Expert articles on refurbished laptops, desktops & IT hardware buying tips, guides, and cost-saving insights.",
      url: "https://www.ftds.in/blog",
      siteName: "FTDS Hardware",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function Page() {
  return <BlogsPage />;
}
