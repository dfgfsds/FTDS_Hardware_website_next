import Image from "next/image";
import blogSeoData from "../../../seo/blog.json";
import { slugConvert } from "../../../../lib/utils";

interface Blog {
  id: number;
  title: string;
  content: string;
  banner_url: string;
  created_at: string;
  author: string;
}

interface Props {
  params: { slug: string };
}

// Server-side fetch
export default async function BlogDetail({ params }: Props) {
  const vendorId = 87;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/?vendor_id=${vendorId}`
  );
  const data = await res.json();

  const blog: Blog | undefined = data.blogs.find(
    (b: Blog) => slugConvert(b.title) === params.slug
  );

  if (!blog) {
    return <div className="py-20 text-center">Blog not found</div>;
  }

  const seo = blogSeoData.find((item) => item.slug === params.slug);

  const metaTitle = seo?.metaTitle || blog.title;
  const metaDescription =
    seo?.metaDescription || blog.content.replace(/<[^>]+>/g, "").substring(0, 160);
  const ogImage = seo?.ogImage || blog.banner_url;
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`;

  return (
    <>
      {/* ================= SEO HEAD ================= */}
      <head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD Schema */}
        {seo?.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }}
          />
        )}
      </head>

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
