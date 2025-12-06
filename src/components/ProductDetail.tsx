'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaStar, FaHeart } from 'react-icons/fa';
import { useProducts } from '@/context/ProductsContext';
import { useCartItem } from '@/context/CartItemContext';
import { useVendor } from '@/context/VendorContext';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
import { deleteCartitemsApi, postCartitemApi, updateCartitemsApi } from '@/api-endpoints/CartsApi';
import LoginModal from './LoginModel';
import { ShoppingCart } from 'lucide-react';
import { slugConvert } from '../../lib/utils';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductDetail({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<'description' | 'spec' | 'review'>('description');
  const router = useRouter();
  const { products, isAuthenticated, isLoading }: any = useProducts();
  const { cartItem }: any = useCartItem();
  const { vendorId } = useVendor();
  const [getUserId, setUserId] = useState<string | null>(null);
  const [getCartId, setCartId] = useState<string | null>(null);
  const [getUserName, setUserName] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const [signInmodal, setSignInModal] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedCartId = localStorage.getItem('cartId');
    const storedUserName = localStorage.getItem('userName');

    setUserId(storedUserId);
    setCartId(storedCartId);
    setUserName(storedUserName);
  }, []);

  
  useEffect(() => {
    if (products?.data && productId) {
      const found = products?.data?.find((p: any) => slugConvert(p?.name) === productId);
      if (found) {
        setProduct(found);
      } else {
      }
    }
  }, [products, productId]);


  const matchingProductsArray = products?.data?.map((product: any, index: number) => {
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

  const productDetails = matchingProductsArray?.find((item: any) => String(item?.id) === String(product?.id));



  if (!productDetails) return <p className="p-10">Loading...</p>;

  const handleAddCart = async (id: any, qty: any) => {
    const payload = {
      cart: getCartId,
      product: id,
      user: getUserId,
      vendor: vendorId,
      quantity: qty,
      created_by: getUserName ? getUserName : 'user'
    }
    try {
      const response = await postCartitemApi(``, payload)
      if (response) {
        queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
      }
    } catch (error) {

    }
  }

  const handleUpdateCart = async (id: any, type: any, qty: any) => {
    try {
      if (qty === 1) {
        const updateApi = await deleteCartitemsApi(`${id}`)
        if (updateApi) {
          queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
        }
      } else {
        const response = await updateCartitemsApi(`${id}/${type}/`)
        if (response) {
          queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
        }
      }

    } catch (error) {

    }
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(price);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Product Images */}
        <div className=" h-fit rounded">
          <img
            src={productDetails.image_urls[0]}
            alt={productDetails.title}
            className="w-full h-96 object-contain border p-4"
          />
        </div>

        {/* Product Info */}
        <div className="">
          <h2 className="text-2xl mt-2 md:mt-3 font-semibold">{productDetails.name}</h2>

          <div className="space-y-1">
            <div className='flex mt-2 md:mt-3 gap-3'>
              <p className="text-xl py-5 font-bold">{formatPrice(Number(productDetails.price))}</p>
              <p className="text-xl py-5 line-through text-gray-500">{formatPrice(Number(productDetails.discount))}</p>
            </div>
            <p className="text-sm py-3">
              <span className="font-semibold">Category:</span> {productDetails.category_name}
            </p>
            <p className="text-sm py-2">
              <span className="font-semibold">Availability:</span> In Stock
            </p>
          </div>

          <div className="flex items-center mt-2 md:mt-3 gap-4">

            {productDetails?.cartQty > 0 ? (
              <div className="flex items-center justify-center mt-4 mb-4 space-x-4">
                <button
                  onClick={() =>
                    handleUpdateCart(productDetails?.cartId, 'decrease', productDetails?.cartQty)
                  }
                  disabled={productDetails.cartQty <= 1}
                  className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 disabled:opacity-50"
                >
                  −
                </button>
                <span className="text-gray-800 font-semibold text-lg">{productDetails.cartQty}</span>
                <button
                  onClick={() => handleUpdateCart(productDetails?.cartId, 'increase', '')}
                  className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
                >
                  +
                </button>
              </div>
            ) : (
              <div className=" pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    getUserId ? handleAddCart(productDetails.id, 1) : setSignInModal(true);
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 hover:text-white text-white py-2 px-4 rounded-md font-medium shadow-sm transition-all duration-200"
                >
                  <span className='flex justify-center'>Add to cart <span className='ml-2 mt-1 align-middle'><ShoppingCart size={16} /></span> </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10 border-t pt-6">
        <div className="flex gap-6 text-sm font-medium">
          {['description'].map((key) => (
            <button
              key={key}
              className={`pb-2 border-b-2 capitalize ${tab === key ? 'border-black' : 'border-transparent'
                }`}
              onClick={() => setTab(key as typeof tab)}
            >
              {key === 'review' ? 'Reviews (1)' : key}
            </button>
          ))}
        </div>

        <div className="mt-4 text-sm text-gray-700">
          {tab === 'description' && <div dangerouslySetInnerHTML={{ __html: productDetails.description }} />}

          {/* {tab === 'spec' && (
            <ul className="list-disc pl-5 space-y-1">
              <li>1GB RAM, 1.6 GHz CPU</li>
              <li>Sleek, lightweight body</li>
              <li>Wireless enabled, built-in front camera</li>
            </ul>
          )}

          {tab === 'review' && (
            <div>
              <p className="font-medium">John Doe</p>
              <p>Very good product. Worth the price.</p>
            </div>
          )} */}
        </div>
      </div>
      {signInmodal && (
        <LoginModal open={signInmodal} handleClose={() => setSignInModal(false)} vendorId={vendorId} />
      )}
    </div>
  );
}
