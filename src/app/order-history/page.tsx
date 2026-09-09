import type { Metadata } from 'next';
import Profile from '@/components/Profile';

export const metadata: Metadata = {
  title: 'Refurbished Laptop Shop Chennai | Login',
  description:
    'Login to your account at a trusted refurbished laptop shop in Chennai. Manage orders, track purchases, and securely access your account details.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://www.ftds.in/order-history',
  },
  openGraph: {
    title: 'Refurbished Laptop Shop Chennai | Login',
    description:
      'Login to your account at a trusted refurbished laptop shop in Chennai. Manage orders, track purchases, and securely access your account details.',
    url: 'https://www.ftds.in/order-history',
    siteName: 'FTDS Hardware',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refurbished Laptop Shop Chennai | Login',
    description:
      'Login to your account at a trusted refurbished laptop shop in Chennai. Manage orders, track purchases, and securely access your account details.',
  },
};

export default function OrderHistoryPage() {
  return <Profile />;
}
