import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.ftds.in'
const lastMod = new Date()

const staticPages = [
  '/',
  '/shop',
  '/categories',
  '/about',
  '/contact',
  '/blog',
  '/categories/refurbished-laptops',
  '/categories/keyboard-and-mouse',
  '/categories/refurbished-desktops',
  '/categories/laptops-and-desktops',
  '/categories/refurbished-monitors',
  '/categories/computer-components',
  '/categories/printers',
  '/categories/mouse',
  '/privacy_policy',
  '/delivery_policy',
  '/refund_and_cancellation_policy',
  '/shipping_policy',
  '/terms_and_conditions',
  '/profile',
  '/cart',
  '/refurbished-laptop-in-chennai'
]

const priorities: Record<string, number> = {
  '/': 1.0,
  '/shop': 0.9,
  '/categories': 0.9,
  '/about': 0.8,
  '/contact': 0.8,
  '/blog': 0.8,
  '/refurbished-laptop-in-chennai': 0.9
}

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastMod,
    priority: priorities[path] ?? 0.64
  }))
}
