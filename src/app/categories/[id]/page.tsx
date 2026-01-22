import CategoriesBasedProduct from "@/components/CategoriesBasedProduct";
import categorySeo from "../../../seo/categorySeo.json";
import Script from "next/script";

// ✅ Dynamic SEO for all category pages
export async function generateMetadata({ params }: any) {
  const seo = categorySeo[params.id];

  return {
    title: seo?.metaTitle || "Computer Shop in Chennai | TN Computers",
    description:
      seo?.metaDescription ||
      "Buy computers, laptops & accessories at best price in Chennai",

    // ✅ Canonical
    alternates: {
      canonical: seo?.canonical || `https://www.ftds.in/categories/${params.id}`,
    },

    // ✅ Robots
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ✅ Page render
export default function CategoriesProduct({ params }: any) {
  const seo = categorySeo[params.id];

  return (
    <>
      {/* PAGE UI */}
      <CategoriesBasedProduct />

      {/* ✅ FAQ SCHEMA */}
      {seo?.faqs?.length > 0 && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: seo.faqs.map((faq: any) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </>
  );
}
