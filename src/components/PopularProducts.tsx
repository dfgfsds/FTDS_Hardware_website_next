'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import ProductCard from '../components/ProductCard';
import { useProducts } from '@/context/ProductsContext';

export default function PopularProducts() {
  const { products,isLoading} = useProducts();

  const randomProducts = products?.data
    ? [...products.data]
      .slice(0, 3)
    : [];

  return (
    <section className="mb-10 pb-6 px-4 md:px-10 mx-auto">
      <div className="bg-slate-100 py-12 shadow rounded-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 px-4">

          {/* Left Section - Icon & CTA */}
          <div className="w-full md:w-[25%] flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex items-center justify-center mb-3">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRERqbMWtLVHM4nbkjMjUMN0prQUJ_M1bJQ&s"
                alt="Like"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="font-semibold text-lg md:text-xl mb-2">Popular Products</h2>
            <Link href="/shop">
            <button className="flex items-center gap-1 text-sm border bg-orange-500 mt-3 rounded-full px-5 text-white py-2 transition hover:bg-orange-600">
              See More <HiArrowRight />
            </button>
            </Link>
          </div>

          {/* Product Cards Section */}
          <div className="w-full md:w-[75%] overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 min-w-full">
              <ProductCard gridCols='grid-cols-1 sm:grid-cols-2 md:grid-cols-3' isLoading={isLoading} products={randomProducts} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
