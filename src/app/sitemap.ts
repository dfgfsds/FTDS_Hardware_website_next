import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.ftds.in'
const lastMod = new Date()

/* ✅ ALL INDEXABLE PAGES */
const staticPages = [
  '/',
  '/shop',
  '/categories',
  '/about',
  '/contact',
  '/blog',

  /* 🔥 CATEGORY PAGES */
  '/categories/refurbished-laptops',
  '/categories/refurbished-desktops',
  '/categories/laptops-and-desktops',
  '/categories/refurbished-monitors',
  '/categories/computer-components',
  '/categories/keyboard-and-mouse',
  '/categories/mouse',
  '/categories/printers',

  /* 🔥 SEO LANDING PAGE */
  '/refurbished-laptop-in-chennai',

  /* 🧾 POLICY PAGES */
  '/privacy_policy',
  '/delivery_policy',
  '/refund_and_cancellation_policy',
  '/shipping_policy',
  '/terms_and_conditions',

  /* 👤 USER PAGES (OPTIONAL INDEX) */
  '/profile',
  '/cart'
]

/* ✅ PRIORITY MAP (SEO OPTIMIZED) */
const priorities: Record<string, number> = {
  '/': 1.0,
  '/shop': 0.9,
  '/categories': 0.9,

  '/categories/refurbished-laptops': 0.85,
  '/categories/refurbished-desktops': 0.85,
  '/categories/laptops-and-desktops': 0.82,

  '/categories/refurbished-monitors': 0.8,
  '/categories/computer-components': 0.8,

  '/categories/keyboard-and-mouse': 0.78,
  '/categories/mouse': 0.78,

  '/categories/printers': 0.75,

  '/refurbished-laptop-in-chennai': 0.9,

  '/about': 0.8,
  '/contact': 0.8,
  '/blog': 0.8
}

/* ✅ SITEMAP EXPORT */
export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastMod,
    priority: priorities[path] ?? 0.64
  }))
}
