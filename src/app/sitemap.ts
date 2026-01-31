import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.ftds.in'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastMod = new Date()

  /* ✅ STATIC PAGES */
  const staticPages = [
    '/',
    '/shop',
    '/categories',
    '/about',
    '/contact',
    '/blog',

    '/categories/refurbished-laptops',
    '/categories/refurbished-desktops',
    '/categories/laptops-and-desktops',
    '/categories/refurbished-monitors',
    '/categories/computer-components',
    '/categories/keyboard-and-mouse',
    '/categories/mouse',
    '/categories/printers',

    '/privacy_policy',
    '/delivery_policy',
    '/refund_and_cancellation_policy',
    '/shipping_policy',
    '/terms_and_conditions',
  ]

  /* ✅ FETCH BLOGS */
  const res = await fetch(
    `https://ecomapi.ftdigitalsolutions.org/blog/?vendor_id=87`,
    { cache: 'no-store' }
  )

  const data = await res.json()

  const blogPages =
    data?.blogs?.map((blog: any) => ({
      url: `${baseUrl}/blog/${slugConvert(blog.title)}`,
      lastModified: new Date(blog.created_at),
      priority: 0.7,
    })) || []

  /* ✅ STATIC PAGE MAP */
  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastMod,
    priority: path === '/' ? 1.0 : 0.8,
  }))

  return [...staticUrls, ...blogPages]
}

/* ✅ SLUG FUNCTION */
function slugConvert(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}
