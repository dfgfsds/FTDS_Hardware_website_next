import CategoriesPage from "@/components/Categories";

export async function generateMetadata() {
  return {
    title:
      "Refurbished Laptops in Chennai & Refurbished Desktops in Chennai | FTDS Hardware",

    description:
      "Explore the best refurbished laptops and desktops in Chennai from Dell, HP, Lenovo, Acer, and ASUS. Tested and certified systems with 12-month warranty.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/categories",
    },

    openGraph: {
      title:
        "Refurbished Laptops & Desktops in Chennai | FTDS Hardware",
      description:
        "Buy certified refurbished laptops and desktops from top brands like Dell, HP, Lenovo, Acer, and ASUS with 12-month warranty in Chennai.",
      url: "https://www.ftds.in/categories",
      siteName: "FTDS Hardware",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
    },
  };
}



export default function CatePage() {
    return <CategoriesPage />;
}
