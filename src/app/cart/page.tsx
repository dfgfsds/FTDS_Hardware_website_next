import type { Metadata } from 'next';
import CartClient from './CartClient';

export const metadata: Metadata = {
  title: 'Affordable Refurbished Desktop in Chennai | Cart',
  description:
    'Find affordable refurbished desktops in Chennai with reliable performance. View your cart, adjust your selection, and order your preferred desktop today.',
  alternates: {
    canonical: 'https://www.ftds.in/cart',
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Affordable Refurbished Desktop in Chennai | Cart',
    description:
      'Find affordable refurbished desktops in Chennai with reliable performance. View your cart, adjust your selection, and order your preferred desktop today.',
    url: 'https://www.ftds.in/cart',
    siteName: 'FTDS Hardware',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Refurbished Desktop in Chennai | Cart',
    description:
      'Find affordable refurbished desktops in Chennai with reliable performance. View your cart, adjust your selection, and order your preferred desktop today.',
  },
};

export default function CartPage() {
  return <CartClient />;
}
