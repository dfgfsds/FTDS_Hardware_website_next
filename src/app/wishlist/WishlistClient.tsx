'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';

export default function WishlistClient() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 text-center max-w-md w-full">
        <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Wishlist</h1>
        <p className="text-gray-500 mb-8">
          You haven&apos;t added any items to your wishlist yet. Explore our quality-tested laptops and desktops.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
        >
          <ShoppingBag className="w-5 h-5" />
          Explore Shop
        </Link>
      </div>
    </div>
  );
}
