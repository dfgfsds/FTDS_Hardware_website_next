'use client';

import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';

const categories = [
  {
    title: 'Gaming Monitors',
    subtitle: ' Size: 27 inch & Above',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb01IjvyzqF80pdCoBETG4rSn1yOx-ItrmA&usqp=CAU',
  },
  {
    title: 'Designers Monitor',
    subtitle: 'Size: 24 inch & Above',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb01IjvyzqF80pdCoBETG4rSn1yOx-ItrmA&usqp=CAU',
  },
  {
    title: 'Curved Monitors',
    subtitle: 'Size: 27 inch & Above',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb01IjvyzqF80pdCoBETG4rSn1yOx-ItrmA&usqp=CAU',
  },
];

export default function SpecialProduct() {
  return (
    <div className="w-full py-12 bg-white">
      <div className="mx-auto px-4 md:px-10">
        {/* 🔸 Mobile Slider (Horizontal Scroll) */}
        <div className="sm:hidden flex gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[90%] flex items-center bg-gradient-to-r from-orange-400 to-white rounded-xl p-4 gap-4 shadow-md"
            >
              {/* Left Image */}
              <div className="w-24 h-24 flex-shrink-0 rounded-xl   overflow-hidden relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center text-left flex-1">
                <h3 className="text-base font-semibold">{category.title}</h3>
                <p className="text-xs text-black/70 mb-2">{category.subtitle}</p>
                <button className="w-fit flex items-center gap-1 text-xs border border-black rounded-full px-3 py-1 transition hover:bg-black hover:text-white">
                  See More <HiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🔸 Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative w-full rounded-2xl p-4 pl-20 bg-gradient-to-r from-orange-500 to-slate-100 text-black flex justify-between items-center min-h-[180px] sm:h-44 overflow-visible"
            >
              {/* Floating Image */}
              <div className="absolute -top-8 max-w-xs left-2 w-32 md:w-32 lg:w-32 h-full z-20">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-contain -rotate-6"
                />
              </div>

              {/* Right Text */}
              <div className="flex flex-col items-end text-right z-10 ml-auto">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-sm text-black/80 mb-3">{category.subtitle}</p>
                <button className="flex items-center gap-1 text-sm border border-black rounded-full px-3 py-1 transition hover:bg-black hover:text-white">
                  See More <HiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
