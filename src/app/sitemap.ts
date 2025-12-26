import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.ftds.in'
const lastMod = '2025-12-26T07:09:55+00:00'

const staticPages = [
  '/',
  '/shop',
  '/categories', 
  '/about',
  '/contact',
  '/blog',
  '/privacy_policy',
  '/delivery_policy',
  '/refund_and_cancellation_policy',
  '/shipping_policy',
  '/terms_and_conditions',
  '/profile',
  '/cart',
  '/refurbished-laptop-in-chennai'
]

const priorities = {
  '/': 1.00,
  '/shop': 0.80,
  '/categories': 0.80,
  '/about': 0.80,
  '/contact': 0.80,
  '/blog': 0.80,
  '/privacy_policy': 0.80,
  '/delivery_policy': 0.80,
  '/refund_and_cancellation_policy': 0.80,
  '/shipping_policy': 0.80,
  '/terms_and_conditions': 0.80,
  '/profile': 0.80,
  '/cart': 0.80,
  '/refurbished-laptop-in-chennai': 0.64
}

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastMod,
    priority: priorities[path as keyof typeof priorities]
  }))
}
