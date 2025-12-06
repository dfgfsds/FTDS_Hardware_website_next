'use client';

import { useEffect, useRef, useState } from 'react';
import FilterSidebar from '../../components/FilterSidebar';
import ProductCard from '../../components/ProductCard';
import { useCategories } from '@/context/CategoriesContext';
import { useProducts } from '@/context/ProductsContext';
import { Pagination } from '@/components/Pagination';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ShopPage() {
  const topRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { products, isLoading } = useProducts();
  const { categories } = useCategories();
  const ITEMS_PER_PAGE = 24;

  const filteredProducts = selectedCategory
    ? products?.data?.filter(
      (p: any) =>
        p.category ==
        selectedCategory
    )
    : products?.data;

  const totalPages = Math.ceil(filteredProducts?.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredProducts?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-full mx-auto py-5 px-4 md:px-10">
      <h1 className="text-2xl font-bold mb-2">Shop Product</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Shop Product</p>

      <div className="flex flex-col md:flex-row gap-6" ref={topRef}>
        <FilterSidebar
          categories={categories?.data}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="w-full">
          <img
            src="https://pclmu.com/wp-content/uploads/2021/03/inner-banner.jpg"
            alt="Shop Banner"
            className="w-full h-[250px] object-cover rounded-2xl mb-10"
          />

          <div className="flex justify-between mb-4">
            <p className="text-sm">
              Showing {filteredProducts?.length} of {products?.data?.length} results
            </p>
          </div>

          {/* ✅ Force 4 products per row on all screen sizes */}
          <ProductCard
            isLoading={isLoading}
            products={paginatedItems}
            gridCols="grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          />
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  topRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
