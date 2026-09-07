'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiX } from 'react-icons/hi';
import { useProducts } from '@/context/ProductsContext';
import { useRouter, usePathname } from 'next/navigation';
import { useVendor } from '@/context/VendorContext';
import Mobilebanner1 from "../../public/assets/banners/FTDS MOBILE BANNER 01.jpg.jpeg"
import Mobilebanner2 from "../../public/assets/banners/FTDS MOBILE BANNER 02.jpg.jpeg"
import Mobilebanner3 from "../../public/assets/banners/FTDS MOBILE BANNER 03.jpg.jpeg"
import banner1 from "../../public/assets/banners/FTDS WEB BANNER 01.jpg.jpeg"
import banner2 from "../../public/assets/banners/FTDS WEB BANNER 02.jpg.jpeg"
import banner3 from "../../public/assets/banners/FTDS WEB BANNER 03.jpg.jpeg"
// Default banner slides with PC and Mobile versions from /assets/banners
const defaultBanners = [
  {
    id: 1,
    title: 'Certified Refurbished Laptops & Desktops in Chennai',
    pcSrc: banner1,
    mobileSrc: Mobilebanner1,
    link: '/shop',
  },
  {
    id: 2,
    title: 'Smart Technology, Better Value',
    pcSrc: banner2,
    mobileSrc: Mobilebanner2,
    link: '/shop',
  },
  {
    id: 3,
    title: 'Reliable Tech, Sustainable Choice',
    pcSrc: banner3,
    mobileSrc: Mobilebanner3,
    link: '/shop',
  },
];

// Helper to safely extract image URL whether it is a direct import (StaticImageData) or string path
const getImgSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return encodeURI(img);
  if (typeof img === 'object' && img.src) return img.src;
  return String(img);
};

export default function HeroSection() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [banners, setBanners] = useState<any[]>(defaultBanners);
  const { products } = useProducts();
  const { vendorId } = useVendor();

  // Touch swipe support for mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Modal state management (kept for future promo popup if needed)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  }, [banners.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  }, [banners.length]);

  // Auto slide management
  useEffect(() => {
    if (banners.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length, isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="w-full px-4 py-4 sm:px-6 lg:px-12 relative select-none">
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-md bg-gray-100 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Banner Slides Carousel */}
        <div className="relative w-full">
          {banners.map((slide, index) => {
            const isActive = index === currentSlide;
            const pcUrl = getImgSrc(slide.pcSrc);
            const mobileUrl = getImgSrc(slide.mobileSrc || slide.pcSrc);

            return (
              <div
                key={slide.id || index}
                className={`w-full transition-opacity duration-700 ease-in-out ${isActive
                  ? 'opacity-100 relative z-10'
                  : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                  }`}
              >
                <Link
                  href={slide.link || '/shop'}
                  className="block w-full focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-2xl"
                >
                  <picture className="w-full block">
                    {/* Mobile Banner: screen width < 768px */}
                    <source media="(max-width: 767px)" srcSet={mobileUrl} />
                    {/* Desktop / PC Banner: screen width >= 768px */}
                    <img
                      src={pcUrl}
                      alt={slide.title}
                      className="w-full h-auto object-cover sm:object-contain rounded-2xl block"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </picture>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Prev / Next Navigation Arrows */}
        {banners.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md backdrop-blur-sm transition-all hover:scale-110 active:scale-95 focus:outline-none opacity-80 group-hover:opacity-100"
              aria-label="Previous Slide"
            >
              <HiOutlineChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md backdrop-blur-sm transition-all hover:scale-110 active:scale-95 focus:outline-none opacity-80 group-hover:opacity-100"
              aria-label="Next Slide"
            >
              <HiOutlineChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {banners.length > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {banners.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlide(dotIdx)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${dotIdx === currentSlide
                  ? 'w-6 sm:w-8 bg-orange-500 shadow-sm'
                  : 'w-2 sm:w-2.5 bg-white/70 hover:bg-white'
                  }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
