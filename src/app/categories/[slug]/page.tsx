import CategoriesBasedProduct from "../../../components/CategoriesBasedProduct";
import categorySeo from "../../../seo/categorySeo.json";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* 🔹 SEO TYPE */
type FAQ = {
  question: string;
  answer: string;
};

// type CategorySEO = {
//   metaTitle: string;
//   metaDescription: string;
//   canonical: string;
//   content?: string;
//   faqs?: FAQ[];
// };

type CategorySEO = {
  metaTitle: string;
  metaDescription: string;
  canonical: string;

  keywords?: string[];

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogWidth?: number;
  ogHeight?: number;
  ogImageAlt?: string;
  ogLocale?: string;

  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;

  imageSrc?: string;

  geoRegion?: string;
  geoPlaceName?: string;
  geoPosition?: string;
  icbm?: string;

  subject?: string;
  classification?: string;
  coverage?: string;
  distribution?: string;
  rating?: string;

  schema?: any;

  content?: string;
  faqs?: FAQ[];
};

type CategorySeoMap = Record<string, CategorySEO>;

const seoDataMap = categorySeo as any;

// ✅ Dynamic SEO (CRITICAL FIX)
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const seo = seoDataMap[params.slug];

//   if (!seo) {
//     return {
//       title: "Category Not Found | FTDS Hardware",
//       robots: { index: false, follow: false },
//     };
//   }

//   return {
//     title: seo.metaTitle,
//     description: seo.metaDescription,
//     alternates: {
//       canonical: seo.canonical,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//       },
//     },
//   };
// }

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const seo = seoDataMap[params.slug];

  if (!seo) {
    return {
      title: "Category Not Found | FTDS Hardware",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: seo.metaTitle,

    description: seo.metaDescription,

    keywords: seo.keywords || [],

    alternates: {
      canonical: seo.canonical,
    },

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

    openGraph: {
      type: "website",
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      url: seo.canonical,
      siteName: "FTDS Hardware",
      locale: seo.ogLocale || "en_IN",

      images: seo.ogImage
        ? [
          {
            url: seo.ogImage,
            width: seo.ogWidth || 1200,
            height: seo.ogHeight || 630,
            alt: seo.ogImageAlt || seo.metaTitle,
          },
        ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle || seo.metaTitle,
      description:
        seo.twitterDescription || seo.metaDescription,
      images: seo.twitterImage
        ? [seo.twitterImage]
        : [],
    },

    other: {
      image_src: seo.imageSrc || seo.ogImage,

      "geo.region": seo.geoRegion,
      "geo.placename": seo.geoPlaceName,
      "geo.position": seo.geoPosition,
      ICBM: seo.icbm,

      subject: seo.subject,
      classification: seo.classification,
      coverage: seo.coverage,
      distribution: seo.distribution,
      rating: seo.rating,
    },
  };
}

// ✅ Page Component
export default function CategoriesProduct({
  params,
}: {
  params: { slug: string };
}) {
  const seo = seoDataMap[params.slug];

  if (!seo) {
    notFound();
  }

  const faqs = seo.faqs ?? [];

  return (
    <>
      {/* ✅ H1 FOR SEO */}
      <h2 className="sr-only">{seo.metaTitle}</h2>

      <CategoriesBasedProduct />

      {/* ✅ FAQ SCHEMA */}
      {/* {faqs.length > 0 && (
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
      )} */}


      {seo.schema && (
        <Script
          id="collection-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schema),
          }}
        />
      )}

    </>
  );
}
