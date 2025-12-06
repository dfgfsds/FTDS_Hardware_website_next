"use client";

import { deleteCartitemsApi, updateCartitemsApi } from '@/api-endpoints/CartsApi';
import { useCartItem } from '@/context/CartItemContext';
import { useProducts } from '@/context/ProductsContext';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CheckoutDrawer from './CheckoutDrawer';

export default function CartPage() {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const { cartItem }: any = useCartItem();
  const { products }: any = useProducts();

  const matchingProductsArray = cartItem?.data
    ?.map((item: any, index: number) => {
      const matchingProduct = products?.data?.find(
        (product: any) => product.id === item.product
      );
      return {
        Aid: index,
        cartId: item?.id,
        cartQty: item?.quantity,
        ...matchingProduct,
      };
    })
    ?.sort((a: any, b: any) => a.name?.localeCompare(b.name));

  const totalAmount = matchingProductsArray?.reduce((acc: number, item: any) => {
    const price =
      item.price ?? item?.product_variant_price ?? item?.product_size_price ?? 0;
    return acc + price * (item.cartQty || 1);
  }, 0);

  const handleUpdateCart = async (id: any, type: any, qty: any) => {
    try {
      if (qty === 1 && type === 'decrease') {
        const updateApi = await deleteCartitemsApi(`${id}`);
        if (updateApi) {
          queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
        }
      } else {
        const response = await updateCartitemsApi(`${id}/${type}/`);
        if (response) {
          queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
        }
      }
    } catch (error) {
      console.error('Failed to update cart:', error);
    }
  };

  function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(price);
  }

  return (
    <div className="container mx-auto px-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-500 text-center mb-6 mt-6">
          Your Shopping Cart
        </h1>

        {matchingProductsArray?.length === 0 || matchingProductsArray === undefined ? (
          <div className="flex flex-col items-center justify-center space-y-6 py-10">
            <p className="text-center text-gray-600 text-base sm:text-lg">
              Your cart is empty.
            </p>
            <Link href="/shop">
              <span className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105">
                Shop Now
              </span>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {matchingProductsArray?.map((product: any) => (
                <div
                  key={product.cartId}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  {/* Left Section */}
                  <div className="flex items-start sm:items-center gap-4 flex-1">
                    <Image
                      src={product?.image_urls?.[0]}
                      alt={product?.name}
                      width={100}
                      height={100}
                      className="object-cover rounded-lg w-24 h-24 sm:h-28 sm:w-28"
                    />
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
                        {product?.name}
                      </h4>
                      <p className="text-sm sm:text-lg text-orange-500 font-medium mt-1">
                        {formatPrice(Number(product?.price))}
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex  sm:flex-row items-end sm:items-center gap-3 sm:gap-6">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                      <button
                        className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center bg-orange-100 hover:bg-gray-200 transition"
                        onClick={() =>
                          handleUpdateCart(product?.cartId, 'decrease', product?.cartQty)
                        }
                      >
                        <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                      </button>
                      <div className="w-10 sm:w-12 text-center text-sm font-medium">
                        {product?.cartQty}
                      </div>
                      <button
                        className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center bg-orange-100 hover:bg-gray-200 transition"
                        onClick={() =>
                          handleUpdateCart(product?.cartId, 'increase', product?.cartQty)
                        }
                      >
                        <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right text-sm sm:text-md font-semibold text-gray-800 min-w-[80px] sm:min-w-[100px]">
                      {formatPrice(Number(product?.price * product?.cartQty))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total + Checkout */}
            <div className="mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center text-xl sm:text-2xl font-bold text-gray-800 border-b pb-3 sm:pb-4 mb-4">
                <span>Total Amount</span>
                <span>{formatPrice(Number(totalAmount))}</span>
              </div>
              <div className="flex justify-end">
                <button
                  className="ml-auto bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-base sm:text-lg font-medium transition duration-300 ease-in-out transform"
                  onClick={() => setIsOpen(true)}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <CheckoutDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} subtotal={totalAmount} />
    </div>
  );
}
