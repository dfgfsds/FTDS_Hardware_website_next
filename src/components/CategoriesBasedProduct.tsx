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

export default function CategoriesBasedProduct() {
    const topRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    /* ✅ useParams ONLY ONCE (TYPE SAFE) */
    const params = useParams<{ id: string }>();
    const slug = params?.id;

    const { products, isLoading }: any = useProducts();
    const { categories }: any = useCategories();
    const { vendorId } = useVendor();
    const { cartItem }: any = useCartItem();

    const [categoryData, setCategoryData] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [signInmodal, setSignInModal] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const ITEMS_PER_PAGE = 12;

    /* ✅ SEO CONTENT BASED ON SLUG */
    const seoData =
        slug && typeof slug === 'string'
            ? categorySeo[slug as keyof typeof categorySeo]
            : null;

    /* 🔹 Convert category name → slug */
    const slugConvert = (name: string) =>
        name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');

    /* ✅ FIND CATEGORY BY SLUG */
    useEffect(() => {
        if (!categories?.data || !slug) return;

        const foundCategory = categories.data.find(
            (cat: any) => slugConvert(cat.name) === slug
        );

        if (foundCategory) {
            setCategoryData(foundCategory);
        }
    }, [categories?.data, slug]);

    const categoryName = categoryData?.name || 'Category';

    /* ✅ FILTER PRODUCTS BY CATEGORY */
    const filteredProducts = products?.data?.filter(
        (product: any) =>
            product.category?.toString() === categoryData?.id?.toString()
    );

    /* ✅ ONLY ACTIVE PRODUCTS */
    const activeProducts = filteredProducts?.filter((p: any) => {
        const s = p?.status;
        return (
            s === true ||
            s === 1 ||
            s === '1' ||
            s === 'true' ||
            s === 'TRUE' ||
            s === 'active' ||
            s === 'ACTIVE'
        );
    });

    /* ✅ MERGE CART QTY */
    const mergedProducts = activeProducts?.map((product: any, index: number) => {
        const matchingCartItem = cartItem?.data?.find(
            (item: any) => item?.product === product?.id
        );

        return matchingCartItem
            ? {
                ...product,
                Aid: index,
                cartQty: matchingCartItem.quantity,
                cartId: matchingCartItem.id,
            }
            : product;
    });

    /* ✅ PAGINATION */
    const totalPages = Math.ceil(
        (mergedProducts?.length || 0) / ITEMS_PER_PAGE
    );

    const paginatedItems = mergedProducts?.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div ref={topRef} className="max-w-6xl mx-auto px-2 md:px-4 py-10">
            {/* 🔙 Breadcrumb */}
            <div className="mb-5 flex items-center gap-2 text-gray-400">
                <ArrowLeft
                    onClick={() => router.back()}
                    className="cursor-pointer"
                />
                <span>Home</span>
                <span>/</span>
                <span className="text-orange-500">{categoryName}</span>
            </div>

            {/* 🟠 HEADING */}
            <h1 className="text-3xl font-bold text-orange-500 mb-8 text-center">
                {categoryName} Products
            </h1>

            {paginatedItems?.length > 0 ? (
                <>
                    <ProductCard
                        isLoading={isLoading}
                        products={paginatedItems}
                        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    />

                    {/* 🔥 SEO CONTENT */}
                    {seoData?.content && (
                        <div className="mt-14 bg-gray-50 p-6 rounded-lg">
                            {/* REMOVE this heading if your content already has <h1> */}
                            {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">
      About {categoryName}
    </h2> */}

                            <div
                                className={`prose prose-gray max-w-none transition-all duration-300 ${showMore ? '' : 'line-clamp-4'
                                    }`}
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


                    {/* 📄 PAGINATION */}
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
                </>
            ) : (
                <p className="text-center text-gray-500">
                    No products found for this category.
                </p>
            )}

            {/* 🔐 LOGIN MODAL */}
            {signInmodal && (
                <LoginModal
                    open={signInmodal}
                    handleClose={() => setSignInModal(false)}
                    vendorId={vendorId}
                />
            )}
        </div>
    );
}
