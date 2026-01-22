import CategoriesBasedProduct from "@/components/CategoriesBasedProduct";
import categorySeo from "../../../seo/categorySeo.json";
import Script from "next/script";
import { notFound } from "next/navigation";

/* 🔹 SEO TYPE */
type FAQ = {
  question: string;
  answer: string;
};

type CategorySEO = {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  content?: string;
  faqs?: FAQ[];
};

type CategorySeoMap = Record<string, CategorySEO>;

const seoDataMap = categorySeo as CategorySeoMap;

// ✅ Dynamic SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  const seo = seoDataMap[params.id];

  if (!seo) {
    return {
      title: "Category Not Found | FTDS Hardware",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: {
      canonical: seo.canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ✅ Page Component
export default function CategoriesProduct({
  params,
}: {
  params: { id: string };
}) {
  const seo = seoDataMap[params.id];

  if (!seo) {
    notFound();
  }

  const faqs = seo.faqs ?? [];

  return (
    <>
      <CategoriesBasedProduct />

      {/* ✅ FAQ SCHEMA */}
      {faqs.length > 0 && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
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
