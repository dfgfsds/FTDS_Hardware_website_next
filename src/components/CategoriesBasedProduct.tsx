'use client';

import { useParams, useRouter } from 'next/navigation';
import { useProducts } from '@/context/ProductsContext';
import { useCategories } from '@/context/CategoriesContext';
import { useVendor } from '@/context/VendorContext';
import { useCartItem } from '@/context/CartItemContext';

import { ArrowLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import ProductCard from './ProductCard';
import { Pagination } from './Pagination';
import LoginModal from './LoginModel';

import categorySeo from '../seo/categorySeo.json';

/* 🔹 SEO TYPE */
type CategorySEO = {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  content?: string;
  faqs?: { question: string; answer: string }[];
};

const seoMap = categorySeo as Record<string, CategorySEO>;

export default function CategoriesBasedProduct() {
  const topRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const { products, isLoading }: any = useProducts();
  const { categories }: any = useCategories();
  const { vendorId } = useVendor();
  const { cartItem }: any = useCartItem();

  const [categoryData, setCategoryData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [signInModal, setSignInModal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const ITEMS_PER_PAGE = 12;

  const seoData = slug ? seoMap[slug] : null;

  const slugConvert = (name: string) =>
    name.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  useEffect(() => {
    if (!categories?.data || !slug) return;

    const found = categories.data.find(
      (cat: any) => slugConvert(cat.name) === slug
    );

    if (found) setCategoryData(found);
  }, [categories?.data, slug]);

  const categoryName = categoryData?.name || 'Category';

  const filteredProducts = products?.data?.filter(
    (p: any) => p.category?.toString() === categoryData?.id?.toString()
  );

  const activeProducts = filteredProducts?.filter((p: any) =>
    ['1', 1, true, 'true', 'active', 'ACTIVE'].includes(p?.status)
  );

  const mergedProducts = activeProducts?.map((product: any, index: number) => {
    const cartMatch = cartItem?.data?.find(
      (item: any) => item.product === product.id
    );

    return cartMatch
      ? { ...product, Aid: index, cartQty: cartMatch.quantity }
      : product;
  });

  const totalPages = Math.ceil((mergedProducts?.length || 0) / ITEMS_PER_PAGE);

  const paginatedItems = mergedProducts?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div ref={topRef} className="max-w-6xl mx-auto px-2 md:px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-5 flex items-center gap-2 text-gray-400 text-sm">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <a href="/" className="hover:underline">Home</a>
        <span>/</span>
        <span className="text-orange-500">{categoryName}</span>
      </div>

      {/* ✅ STRONG H1 */}
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
        {categoryName}
      </h2>

      {/* PRODUCTS */}
      {paginatedItems?.length > 0 ? (
        <ProductCard
          isLoading={isLoading}
          products={paginatedItems}
          gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />
      ) : (
        <p className="text-center text-gray-500">
          Products will be available soon in this category.
        </p>
      )}

      {/* ✅ SEO CONTENT — ALWAYS RENDERED */}
      {seoData?.content && (
        <div className="mt-14 bg-gray-50 p-6 rounded-lg">
          <div
            className={`prose max-w-none ${showMore ? '' : 'line-clamp-4'}`}
            dangerouslySetInnerHTML={{ __html: seoData.content }}
          />

          {seoData.content.length > 300 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-3 text-blue-600 font-medium hover:underline"
            >
              {showMore ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
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

      {/* Login Modal */}
      {signInModal && (
        <LoginModal
          open={signInModal}
          handleClose={() => setSignInModal(false)}
          vendorId={vendorId}
        />
      )}
    </div>
  );
}
