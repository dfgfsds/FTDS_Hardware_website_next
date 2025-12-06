'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductCard from "../components/ProductCard";
import { useProducts } from '@/context/ProductsContext';

export default function TrandingProduct() {
  const { products, isLoading } = useProducts();
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    if (products?.data) {
      const updateVisibleProducts = () => {
        if (window.innerWidth < 768) {
          // Mobile: show 6
          setVisibleProducts(products.data.slice(0, 6));
        } else {
          // Desktop: show 12
          setVisibleProducts(products.data.slice(0, 12));
        }
      };

      updateVisibleProducts();
      window.addEventListener('resize', updateVisibleProducts);

      return () => window.removeEventListener('resize', updateVisibleProducts);
    }
  }, [products]);

  return (
    <div className="mx-auto p-4 md:pb-0 md:px-10">
      <div className="bg-slate-100 px-5 rounded-2xl">
        <h2 className="py-6 text-2xl font-semibold text-center md:text-left">
          Featured Products
        </h2>

        {/* Product list */}
        <ProductCard products={visibleProducts} isLoading={isLoading} />

        {/* Mobile-only "Shop Now" button */}
        <div className="flex justify-center py-6 md:hidden">
          <Link
            href="/shop"
            className="bg-orange-500 text-white px-6 py-2 rounded-full animate-bounce font-medium text-sm hover:bg-orange-600 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
