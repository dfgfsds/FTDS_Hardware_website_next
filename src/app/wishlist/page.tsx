import type { Metadata } from 'next';
import WishlistClient from './WishlistClient';

export const metadata: Metadata = {
  title: 'Refurbished Laptops with Warranty Chennai | Wishlist',
  description:
    'Login to your account at a trusted refurbished laptop shop in Chennai. Manage orders, track purchases, and securely access your account details.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://www.ftds.in/wishlist',
  },
  openGraph: {
    title: 'Refurbished Laptops with Warranty Chennai | Wishlist',
    description:
      'Login to your account at a trusted refurbished laptop shop in Chennai. Manage orders, track purchases, and securely access your account details.',
    url: 'https://www.ftds.in/wishlist',
    siteName: 'FTDS Hardware',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refurbished Laptops with Warranty Chennai | Wishlist',
    description:
      'Login to your account at a trusted refurbished laptop shop in Chennai. Manage orders, track purchases, and securely access your account details.',
  },
};

export default function WishlistPage() {
  return <WishlistClient />;
}
