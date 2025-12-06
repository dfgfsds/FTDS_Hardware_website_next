'use client';
import { useParams } from 'next/navigation';
import { useProducts } from '@/context/ProductsContext';
import { useCategories } from '@/context/CategoriesContext';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, SearchCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { deleteCartitemsApi, postCartitemApi, updateCartitemsApi } from '@/api-endpoints/CartsApi';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
import { useVendor } from '@/context/VendorContext';
import { useCartItem } from '@/context/CartItemContext';
import ProductCard from './ProductCard';
import { useRouter } from 'next/navigation';
import { Pagination } from './Pagination';
import img from "../public/catAb.jpg"
import LoginModal from './LoginModel';

export default function CategoriesBasedProduct() {
    const topRef = useRef<HTMLDivElement>(null);
    const { id } = useParams() ?? {};
    const [getUserId, setUserId] = useState<string | null>(null);
    const [getCartId, setCartId] = useState<string | null>(null);
    const [getUserName, setUserName] = useState<string | null>(null);
    const [signInmodal, setSignInModal] = useState(false);
    const { products, isLoading }: any = useProducts();
    const { categories }: any = useCategories();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const queryClient = useQueryClient();
    const { vendorId } = useVendor();
    const { cartItem }: any = useCartItem();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;
    const [categoryId,setCategoryId]=useState<any>('')

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        const storedCartId = localStorage.getItem('cartId');
        const storedUserName = localStorage.getItem('userName');

        setUserId(storedUserId);
        setCartId(storedCartId);
        setUserName(storedUserName);
    }, []);

      useEffect(() => {
        if (categories?.data && id) {
          const found = categories?.data?.find((p: any) => slugConvert(p?.name) === id);
          if (found) {
            setCategoryId(found);
          } else {
          }
        }
      }, [categories?.data, id]);


    // Find the category name by ID
    const category = categories?.data?.find(
        (cat: any) => cat.id?.toString() === categoryId?.id?.toString()
    );

    const categoryName = category?.name || 'Category';

    // Filter products by category ID
    const filteredProducts = products?.data?.filter(
        (product: any) => product.category?.toString() === categoryId?.id?.toString()
    );

    // Keep only products with status === true (robust normalization)
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

    // Merge cart quantities
    const mergedProducts = activeProducts?.map((product: any, index: number) => {
        const matchingCartItem = cartItem?.data?.find(
            (item: any) => item?.product === product?.id
        );
        if (matchingCartItem) {
            return {
                ...product,
                Aid: index,
                cartQty: matchingCartItem?.quantity,
                cartId: matchingCartItem.id,
            };
        }
        return product;
    });

    const totalPages = Math.ceil((mergedProducts?.length || 0) / ITEMS_PER_PAGE);

    const paginatedItems = mergedProducts?.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    function slugConvert(name: string) {
        return name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')         // Replace spaces with hyphens
            .replace(/[^\w-]+/g, '');     // Remove non-word characters except hyphens
    }


    return (
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-10" ref={topRef}>
            <div className="my-2 mb-5 flex">
                <ArrowLeft onClick={() => router.back()} className='text-gray-400 cursor-pointer' />
                <div className="text-md text-gray-400 flex mt-0.5 gap-1">
                    <span>
                        Home</span><span className='cursor-pointer flex' onClick={() => router.back()}>/ {categoryName}</span>  <span className='text-orange-500'>/ Shop</span></div>
            </div>

            {/* <h1 className='m-2 font-bold text-2xl text-center text-orange-500'>
                {categoryName}
            </h1> */}
            {/* <div className='m-2'>
                <div className='quill-content' dangerouslySetInnerHTML={{ __html: category?.description2 }} />
            </div> */}
            <h1 className="text-3xl font-bold  text-orange-500 mb-6 mt-6 text-center">
                {categoryName} Products
            </h1>
            {paginatedItems?.length > 0 ? (
                <div className="">
                    <ProductCard
                        isLoading={isLoading}
                        products={paginatedItems}
                        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
            ) : (
                <p className="text-center text-gray-500">No products found for this category.</p>
            )}
            {signInmodal && (
                <LoginModal open={signInmodal} handleClose={() => setSignInModal(false)} vendorId={vendorId} />
            )}
        </div>
    );
} 