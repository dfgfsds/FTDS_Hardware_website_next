'use client';

import { Eye } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { slugConvert } from '../../lib/utils';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  products: any;
  gridCols?: string;
  isLoading?: boolean;
}

export default function ProductCard({
  isLoading,
  products,
  gridCols = 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
}: ProductCardProps) {

  const router = useRouter();

  function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(price);
  }

  // Skeleton Loader Component
  const SkeletonCard = () => (
    <div className="bg-white rounded-xl shadow-md w-full max-w-xs mx-auto p-4 flex flex-col justify-between h-full animate-pulse">
      <div className="flex flex-col flex-grow justify-between h-full">
        <div>
          <div className="h-32 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
        <div className="flex justify-between items-center gap-2 w-full mt-auto">
          <div className="h-5 bg-gray-300 rounded w-12"></div>
          <div className="h-8 bg-gray-300 rounded w-32"></div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="py-8 px-4 md:px-8 w-full">
        <div className={`grid ${gridCols} gap-6`}>
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-8  md:px-8 w-full">
      <div className={`grid ${gridCols} gap-6`}>
        {products?.map((product: any, i: any) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md w-full max-w-xs mx-auto p-4 flex flex-col justify-between h-full"
          >
            {/* Stretchable Content Area */}
            <div className="flex flex-col flex-grow justify-between h-full">
              <div>
                <img
                  src={product?.image_urls[0]}
                  alt={product?.name}
                  className="h-32 object-contain mx-auto mb-2"
                />

                <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 text-center">
                  {product.name}
                </h2>

              </div>

              {/* Bottom Section (pushed to bottom always) */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 w-full mt-auto">
                <p className="text-base font-bold text-gray-800">
                  {formatPrice(Number(product?.price))}
                </p>

                <Link
                  href={`/product/${slugConvert(product?.name)}`}
                  aria-label={`View details for ${product?.name}`}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-2 rounded font-medium flex items-center"
                >
                  View <Eye className="ml-2" size={16} />
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
