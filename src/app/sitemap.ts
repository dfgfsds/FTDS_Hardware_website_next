// import type { MetadataRoute } from 'next'

// const baseUrl = 'https://www.ftds.in'

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const lastMod = new Date()

//   /* ✅ STATIC PAGES */
//   const staticPages = [
//     '/',
//     '/shop',
//     '/categories',
//     '/about',
//     '/contact',
//     '/blog',

//     '/categories/refurbished-laptops',
//     '/categories/refurbished-desktops',
//     '/categories/laptops-and-desktops',
//     '/categories/refurbished-monitors',
//     '/categories/computer-components',
//     '/categories/keyboard-and-mouse',
//     '/categories/mouse',
//     '/categories/printers',

//     '/privacy_policy',
//     '/delivery_policy',
//     '/refund_and_cancellation_policy',
//     '/shipping_policy',
//     '/terms_and_conditions',
//   ]

//   /* ✅ FETCH BLOGS */
//   let blogPages: any[] = []
//   try {
//     const res = await fetch(
//       `https://ecomapi.ftdigitalsolutions.org/blog/?vendor_id=87`,
//       { 
//         cache: 'no-store',
//         headers: {
//           'Origin': baseUrl
//         }
//       }
//     )

//     if (res.ok) {
//       const data = await res.json()
//       blogPages =
//         data?.blogs?.map((blog: any) => ({
//           url: `${baseUrl}/blog/${slugConvert(blog.title)}`,
//           lastModified: new Date(blog.created_at),
//           priority: 0.7,
//         })) || []
//     } else {
//       console.error('Failed to fetch blogs for sitemap:', await res.text())
//     }
//   } catch (error) {
//     console.error('Error fetching blogs for sitemap:', error)
//   }

//   /* ✅ STATIC PAGE MAP */
//   const staticUrls = staticPages.map((path) => ({
//     url: `${baseUrl}${path}`,
//     lastModified: lastMod,
//     priority: path === '/' ? 1.0 : 0.8,
//   }))

//   return [...staticUrls, ...blogPages]
// }

// /* ✅ SLUG FUNCTION */
// function slugConvert(text: string) {
//   return text
//     .toLowerCase()
//     .replace(/[^\w ]+/g, '')
//     .replace(/ +/g, '-')
// }


import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.ftds.in'
const defaultLastMod = new Date('2026-07-21')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  /* ✅ STATIC & CATEGORY PAGES WITH EXACT XML METADATA */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: defaultLastMod,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: defaultLastMod,
      changeFrequency: 'daily',
      priority: 0.8,
    },

    /* Category Pages */
    {
      url: `${baseUrl}/categories/refurbished-laptops`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories/refurbished-desktops`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories/keyboard-and-mouse`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/categories/laptops-and-desktops`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories/refurbished-monitors`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/categories/computer-components`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/categories/printers`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/categories/mouse`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    /* Policy Pages */
    {
      url: `${baseUrl}/privacy_policy`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/delivery_policy`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund_and_cancellation_policy`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/shipping_policy`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms_and_conditions`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  /* ✅ STATIC BLOG SLUGS FROM XML (GUARANTEED FALLBACK) */
  const staticBlogSlugs = [
    { slug: 'refurbished-dell-latitude-5490-the-ultimate-budget-friendly-business-laptop', priority: 0.7 },
    { slug: 'why-it-teams-prefer-refurbished-dell-latitude-5410-for-bulk-office-setup', priority: 0.7 },
    { slug: 'top-features-of-the-refurbished-lenovo-aio-v310z-that-boost-productivity', priority: 0.7 },
    { slug: 'refurbished-laptops-vs-refurbished-desktops', priority: 0.8 },
    { slug: 'refurbished-dell-latitude-e7470-i5-reliable-performance-on-a-budget', priority: 0.7 },
    { slug: 'refurbished-lenovo-thinkpad-l480-smooth-performance-for-remote-work', priority: 0.7 },
    { slug: 'boost-your-office-efficiency-with-a-refurbished-dell-optiplex-7050', priority: 0.7 },
    { slug: 'best-laptops-for-office-work-why-hp-elitebook-830-g7-stands-out', priority: 0.7 },
    { slug: 'why-the-acer-chromebook-714-is-a-great-choice-for-writers-and-creatives', priority: 0.7 },
    { slug: 'refurbished-lenovo-thinkcentre-affordable-desktop-for-everyday-use', priority: 0.7 },
    { slug: 'best-budget-white-theme-desktop-pc-for-home--office-in-2025', priority: 0.7 },
    { slug: 'how-hp-midtower-g4-supports-modern-business-applications', priority: 0.7 },
    { slug: 'top-features-of-dell-latitude-7420-every-professional-should-know', priority: 0.7 },
    { slug: 'refurbished-hp-midtower-g4-a-cost-effective-way-to-own-the-best-hp-desktop', priority: 0.7 },
    { slug: 'why-refurbished-dell-latitude-5410-models-are-a-great-investment', priority: 0.7 },
    { slug: 'is-the-lenovo-thinkpad-t480-still-a-reliable-laptop-in-2025', priority: 0.8 },
    { slug: 'dell-latitude-5400-performance-meets-portability-and-style', priority: 0.7 },
    { slug: 'why-is-a-refurbished-dell-latitude-7490-the-freelancers-secret-weapon', priority: 0.7 },
    { slug: 'where-to-buy-genuine-refurbished-dell-laptops-in-chennai', priority: 0.8 },
    { slug: 'why-the-refurbished-optiplex-3010-is-ideal-for-small-offices', priority: 0.7 },
    { slug: 'differences-between-renewed-refurbished-and-used-laptops-clarified', priority: 0.8 },
    { slug: 'how-to-choose-the-right-laptop-for-work-from-home-needs', priority: 0.8 },
    { slug: 'why-refurbished-desktops-are-the-best-choice-for-small-businesses', priority: 0.8 },
    { slug: 'best-refurbished-all-in-one-desktops-for-home--office-use', priority: 0.8 },
    { slug: 'best-hp-refurbished-laptops-for-business-users-in-2025', priority: 0.8 },
    { slug: 'refurbished-desktops-vs-laptops--which-should-you-choose', priority: 0.8 },
    { slug: 'top-features-that-make-the-hp-midtower-g4-a-smart-business-choice', priority: 0.7 },
    { slug: 'why-the-hp-chromebook-x360-is-the-ideal-laptop-for-students', priority: 0.7 },
    { slug: 'benefits-of-buying-refurbished-desktops-for-students--home-use', priority: 0.8 },
    { slug: 'top-benefits-of-buying-a-refurbished-dell-latitude-7480', priority: 0.7 },
    { slug: 'top-features-that-make-the-refurbished-dell-optiplex-3050-reliable-and-efficient', priority: 0.7 },
    { slug: 'cost-savings-with-a-refurbished-dell-optiplex-5050-worth-it-or-not', priority: 0.7 },
    { slug: 'how-the-dell-latitude-7390-handles-multitasking-and-productivity', priority: 0.7 },
    { slug: 'refurbished-dell-latitude-5480-the-best-laptop-under-25000', priority: 0.8 },
    { slug: 'how-to-get-the-best-value-from-a-refurbished-dell-latitude-5410', priority: 0.7 },
    { slug: 'hp-elitebook-640-g9-best-laptop-for-corporate-professionals-and-students', priority: 0.8 },
    { slug: 'is-the-dell-latitude-5420-refurbished-laptop-worth-buying-in-2025', priority: 0.8 },
    { slug: 'how-the-hp-elitebook-830-g7-refurbished-supports-remote-work-efficiency', priority: 0.7 },
  ]

  let dynamicBlogPages: MetadataRoute.Sitemap = []

  /* ✅ FETCH DYNAMIC BLOGS FROM API */
  try {
    const res = await fetch(
      `https://ecomapi.ftdigitalsolutions.org/blog/?vendor_id=87`,
      {
        cache: 'no-store',
        headers: {
          'Origin': baseUrl,
        },
      }
    )

    if (res.ok) {
      const data = await res.json()
      dynamicBlogPages =
        data?.blogs?.map((blog: any) => ({
          url: `${baseUrl}/blog/${slugConvert(blog.title)}`,
          lastModified: blog.created_at ? new Date(blog.created_at) : defaultLastMod,
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        })) || []
    } else {
      console.error('Failed to fetch blogs for sitemap:', await res.text())
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  /* ✅ MERGE DYNAMIC & STATIC FALLBACK BLOGS (PREVENT DUPLICATES) */
  const fetchedUrls = new Set(dynamicBlogPages.map((b) => b.url))

  const staticFallbackBlogs: MetadataRoute.Sitemap = staticBlogSlugs
    .map((item) => ({
      url: `${baseUrl}/blog/${item.slug}`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly' as const,
      priority: item.priority,
    }))
    .filter((item) => !fetchedUrls.has(item.url))

  return [...staticPages, ...dynamicBlogPages, ...staticFallbackBlogs]
}

/* ✅ SLUG CONVERT FUNCTION */
function slugConvert(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}