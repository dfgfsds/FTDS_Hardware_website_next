import Image from "next/image";
import { Metadata } from "next";
import blogSeoData from "../../../seo/blog.json";
import { slugConvert } from "../../../../lib/utils";

interface Blog {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  content: string;
  banner_url: string;
  created_at: string;
  author: string;
  meta_title?: string;
  meta_description?: string;
  canonical_tag?: string;
  robots_tag?: string;
  url_description?: string;
  og_tags?: any;
  twitter_tags?: any;
  image_src_tags?: any;
  schema?: any;
  url_slug?: string;
}

interface Props {
  params: { slug: string };
}

const VENDOR_ID = 87;

async function getBlogData(slug: string): Promise<Blog | undefined> {
  try {
    const res = await fetch(
      `https://test-ecomapi.ftdigitalsolutions.org/blog/?vendor_id=${VENDOR_ID}`
    );
    if (!res.ok) return undefined;
    const data = await res.json();
    return data.blogs?.find(
      (b: Blog) => (b.url_slug || slugConvert(b.title)) === slug
    );
  } catch (error) {
    return undefined;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `https://test-ecomapi.ftdigitalsolutions.org/blog/?vendor_id=${VENDOR_ID}`
    );
    if (!res.ok) return [];
    const data = await res.json();
    const blogs: Blog[] = data.blogs || [];

    return blogs.map((blog) => ({
      slug: blog.url_slug || slugConvert(blog.title),
    }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const seo = blogSeoData.find((item) => item.slug === params.slug);

  const metaTitle = blog.meta_title || seo?.metaTitle || blog.title;
  const metaDescription =
    blog.meta_description ||
    seo?.metaDescription ||
    blog.content.replace(/<[^>]+>/g, "").substring(0, 160);
  const ogImage = blog.banner_url;
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`;

  const canonical = blog.canonical_tag || pageUrl;
  const robots = blog.robots_tag || "index, follow";

  let openGraph: any = {
    title: metaTitle,
    description: metaDescription,
    url: pageUrl,
    images: [{ url: ogImage }],
    type: "article",
  };
  
  if (blog.og_tags && Object.keys(blog.og_tags).length > 0) {
    openGraph = { ...openGraph, ...blog.og_tags };
  }

  let twitter: any = {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [ogImage],
  };

  if (blog.twitter_tags && Object.keys(blog.twitter_tags).length > 0) {
    twitter = { ...twitter, ...blog.twitter_tags };
  }

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonical,
    },
    robots: robots,
    openGraph,
    twitter,
  };
}

export default async function BlogDetail({ params }: Props) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return <div className="py-20 text-center">Blog not found</div>;
  }

  const seo = blogSeoData.find((item) => item.slug === params.slug);
  
  // Use the API schema if it exists and is not empty, otherwise fallback to local JSON
  const hasApiSchema = blog.schema && Object.keys(blog.schema).length > 0;
  const schemaToUse = hasApiSchema ? blog.schema : seo?.schema;

  return (
    <>
      {schemaToUse && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToUse) }}
        />
      )}

      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          {new Date(blog.created_at).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · by {blog.author}
        </p>

        <div className="relative w-full h-[500px] mb-8">
          <Image
            src={blog.banner_url}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div
          className="quill-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </>
  );
}
