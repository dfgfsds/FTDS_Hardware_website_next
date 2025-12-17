'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useCategories } from '@/context/CategoriesContext';
import { useRouter } from 'next/navigation';
import { slugConvert } from '../../lib/utils';

export default function CategorySlider() {
  const router = useRouter();
  const { categories } = useCategories();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const ITEM_WIDTH = 300; // must match card width

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -ITEM_WIDTH : ITEM_WIDTH,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const index = Math.round(scrollLeft / ITEM_WIDTH);
    setActiveIndex(index);
  };

  return (
    <div className="relative bg-white p-4 md:px-10 shadow-sm rounded-md">
      <h2 className="text-center md:text-start py-6 text-2xl font-semibold">
        Categories
      </h2>

      {/* Left Arrow (Desktop) */}
      <button
        onClick={() => scroll('left')}
        className="hidden sm:flex absolute left-2 top-[60%] z-10 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
      >
        <HiChevronLeft className="text-lg" />
      </button>

      {/* Right Arrow (Desktop) */}
      <button
        onClick={() => scroll('right')}
        className="hidden sm:flex absolute right-2 top-[60%] z-10 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
      >
        <HiChevronRight className="text-lg" />
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide px-2 sm:px-6 gap-4"
      >
        {categories?.data?.map((cat: any) => (
          <div
            key={cat?.id}
            className="flex items-center gap-4 flex-shrink-0 w-full sm:w-[300px] p-3 border sm:border-0 rounded-lg"
          >
            <div className="w-20 h-20 rounded-full border-2 border-orange-500 overflow-hidden flex items-center justify-center">
              <Image
                src={cat?.image}
                alt={cat?.name}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </div>

            <button
              onClick={() =>
                router.push(`/categories/${slugConvert(cat?.name)}`)
              }
              className="text-sm font-medium leading-tight text-left"
            >
              {cat?.name}
              <br />
              <span className="text-gray-500 text-xs">
                {cat?.brand}
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Dots Indicator (Mobile only) */}
      <div className="flex justify-center mt-4 gap-2 sm:hidden">
        {categories?.data?.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() =>
              scrollRef.current?.scrollTo({
                left: index * ITEM_WIDTH,
                behavior: 'smooth',
              })
            }
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'bg-orange-500 w-4'
                : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
