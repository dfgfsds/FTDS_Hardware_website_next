'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const brands = [
  { id: 1, name: 'APPLE', image: 'https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500', active: true },
  { id: 2, name: 'ASUS', image: 'https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500', active: false },
  { id: 3, name: 'SAMSUNG', image: 'https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500', active: false },
  { id: 4, name: 'LENOVO', image: 'https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500', active: false },
  { id: 5, name: 'DELL', image: 'https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500', active: false },
  { id: 6, name: 'APPLE', image: 'https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500', active: false },

];

export default function BrandSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative px-6 py-10 md:py-14 bg-gray-50">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <HiChevronLeft className="text-2xl text-gray-700" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <HiChevronRight className="text-2xl text-gray-700" />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-20 overflow-x-auto scrollbar-hide px-6 pb-2"
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="relative min-w-[210px] md:min-w-[240px] h-[90px] px-4 py-3 border rounded-xl shadow-sm transition-all pr-14" // <- Add right padding
            style={{ backgroundColor: brand.active ? '#5D3FD3' : '#ffffff' }}
          >
            <div className="flex items-center h-full justify-between">
              {/* Brand Name */}
              <p
                className={`text-sm ml-[25%] font-semibold ${
                  brand.active ? 'text-white' : 'text-gray-800'
                }`}
              >
                {brand.name}
              </p>
            </div>

            {/* Image Overlapping */}
            <div className="w-24 h-16 flex items-center justify-center absolute -right-8 top-1/2 -translate-y-1/2">
              <Image
                src={brand.image}
                alt={brand.name}
                width={100}
                height={64}
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
