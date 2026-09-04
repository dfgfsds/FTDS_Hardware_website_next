'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiX } from 'react-icons/hi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useProducts } from '@/context/ProductsContext';
import { useRouter, usePathname } from 'next/navigation';
import axios from 'axios';
import { baseUrl } from '@/api-endpoints/ApiUrls';
import { useVendor } from '@/context/VendorContext';
import { slugConvert } from '../../lib/utils';

export default function HeroSection() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [randomProduct, setRandomProduct] = useState<any>(null);
  const [banners, setBanners] = useState<any[]>([]);
  const { products } = useProducts();
  const { vendorId } = useVendor();

  // Modal show state management
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Trigger modal when returning to this page
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  // Fetch banners
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

  // Auto slide management
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
    <section className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-6 lg:px-12 relative">

      <div
        className=" w-full h-[400px]  md:h-[450px]  rounded-2xl overflow-hidden flex items-center justify-start text-start px-4 sm:px-6 lg:px-12 transition-all duration-700 relative bg-cover bg-no-repeat bg-[position:right] sm:bg-[position:center] "
        style={{
          backgroundImage: `url(/assets/banner.jpg)`,
        }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-10 rounded-2xl"></div>

        {/* <div className="max-w-md text-white z-10 relative">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug drop-shadow-md">
            Refurbished Laptops & Desktops in Chennai — Certified, Tested & Warranty-Backed
          </h1>
          <p className="mt-3 text-sm opacity-90 drop-shadow-sm">
            FTDS Hardware sells professionally tested refurbished laptops and
            desktops in Chennai with a 12-month warranty, transparent specifications,
            and support for individuals, students, and businesses.
          </p>
          <Link href={banners[currentSlide]?.link || '/shop'}>
            <button className="mt-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-orange-500 hover:bg-gray-100 transition">
              Shop Now <FaArrowRightLong />
            </button>
          </Link>
        </div> */}
      </div>


      {/* --- BANNER POPUP MODAL --- */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity duration-300">

          <div className="absolute inset-0 w-full h-full" onClick={() => setIsModalOpen(false)}></div>

          <div className="relative w-full max-w-xs sm:max-w-3xl bg-transparent rounded-2xl overflow-hidden shadow-2xl transition-all scale-100 transform z-10 mx-auto">

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[10000] p-2 text-gray-700 hover:text-black bg-white/90 backdrop-blur-md rounded-full shadow-lg transition-all hover:scale-105"
              aria-label="Close modal"
            >
              <HiX size={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-auto cursor-pointer flex justify-center"
            >
              <picture className="w-full h-auto flex justify-center">
                <source
                  media="(max-width: 639px)"
                  srcSet="./assets/banner-mobile.jpeg" // <-- Unoda mobile banner path-ah inga podu machan
                />

                <img
                  src="./assets/banner-2.webp"
                  alt="Aadi Sale Offer Banner"
                  className="w-full h-auto object-contain select-none max-h-[80vh] rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './assets/banner.jpg';
                  }}
                />
              </picture>
            </a>

          </div>
        </div>
      )} */}
    </section>
  );
}
