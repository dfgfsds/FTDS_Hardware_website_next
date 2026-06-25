'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useProducts } from '@/context/ProductsContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { baseUrl } from '@/api-endpoints/ApiUrls';
import { useVendor } from '@/context/VendorContext';
import { slugConvert } from '../../lib/utils';


export default function HeroSection() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [randomProduct, setRandomProduct] = useState<any>(null);
  const [banners, setBanners] = useState<any[]>([]);
  const { products } = useProducts();
  const { vendorId } = useVendor();

  // Fetch banners
  // const bannerGetApi = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}/banners/?vendorId=${vendorId}`);
  //     if (res.data?.banners) {
  //       setBanners(res.data.banners);
  //     } else {
  //       console.warn('Unexpected API response:', res.data);
  //     }
  //   } catch (error) {
  //     console.log('Error fetching banners:', error);
  //   }
  // };

  // useEffect(() => {
  //   bannerGetApi();
  // }, [vendorId]);

  useEffect(() => {
  const bannerGetApi = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/banners/?vendorId=${vendorId}`
      );

      if (res.data?.banners) {
        setBanners(res.data.banners);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (vendorId) {
    bannerGetApi();
  }
}, [vendorId]);


  // Pick random product whenever products change
  useEffect(() => {
    if (products?.data?.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.data.length);
      setRandomProduct(products.data[randomIndex]);
    }
  }, [products]);

  // const nextSlide = () =>
  //   setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  // const prevSlide = () =>
  //   setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));

  // useEffect(() => {
  //   const timer = setInterval(() => nextSlide(), 5000);
  //   return () => clearInterval(timer);
  // }, []);

  
useEffect(() => {
  if (!banners.length) return;

  const timer = setInterval(() => {
    setCurrentSlide((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(timer);
}, [banners.length]);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-6 lg:px-12">

      <div
        className=" w-full h-[400px]  md:h-[450px]  rounded-2xl overflow-hidden flex items-center justify-start text-start px-4 sm:px-6 lg:px-12 transition-all duration-700 relative bg-cover bg-no-repeat bg-[position:right] sm:bg-[position:center] "
        style={{
          backgroundImage: `url(./assets/banner.jpg)`,
           
          }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-75 md:bg-opacity-65 rounded-2xl"></div>

        {/* Text Content */}
        <div className="max-w-md text-white z-10 relative">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug drop-shadow-md">
           Refurbished Computers in Chennai – Certified Systems from FTDS Hardware
          </h1>
          <p className="mt-3 text-sm opacity-90 drop-shadow-sm">
            FTDS Hardware offers Refurbished Laptops and Desktops in Chennai supported by Warranty and Expert Service.
          </p>
          <Link href={banners[currentSlide]?.link || '/shop'}>
            <button className="mt-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-orange-500 hover:bg-gray-100 transition">
              Shop Now <FaArrowRightLong />
            </button>
          </Link>
        </div>

     
      </div>



    
    </section>
  );
}


