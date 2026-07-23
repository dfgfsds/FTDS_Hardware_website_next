'use client';

import { useState } from 'react';
import { FaTag } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

interface FilterSidebarProps {
  categories: any[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function FilterSidebar({
  categories,
  selectedCategory,
  onSelectCategory,
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 👇 common handler
  const handleSelect = (category: string | null) => {
    onSelectCategory(category);
    setIsOpen(false); // 🔥 click pannina udane close
  };

  return (
    <aside className="w-full md:w-72 bg-white h-fit rounded-2xl shadow-md p-4 md:p-6 border border-gray-200 md:sticky md:top-4">

      {/* Mobile Toggle */}
      <div className="flex justify-between items-center md:hidden mb-4">
        <p
          className="font-bold text-lg text-gray-800 flex items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)} // 🔥 title click open/close
        >
          <FaTag className="text-orange-500" />
          Filter by Category
        </p>

        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
        </button>
      </div>

      {/* Desktop Header */}
      <p className="hidden md:flex font-bold text-lg text-gray-800 mb-4 items-center gap-2">
        <FaTag className="text-orange-500" />
        Filter by Category
      </p>

      {/* Category List */}
      <ul
        className={`space-y-3 transition-all duration-300 ${isOpen ? 'block' : 'hidden'
          } md:block`}
      >
        <li
          className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition border ${selectedCategory === null
              ? 'bg-orange-600 text-white border-orange-600 shadow'
              : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50 hover:border-orange-300'
            }`}
          onClick={() => handleSelect(null)} // ✅ close after click
        >
          All Products
        </li>

        {categories?.map((category) => (
          <li
            key={category?.id}
            className={`capitalize cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition border ${selectedCategory === category?.id
                ? 'bg-orange-600 text-white border-orange-600 shadow'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50 hover:border-orange-300'
              }`}
            onClick={() => handleSelect(category?.id)} // ✅ close after click
          >
            {category?.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
