'use client';

import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/context/ProductsContext';
import { Pagination } from '@/components/Pagination';



const faqData = [
  {
    question: 'Are refurbished laptops reliable?',
    answer:
      " Yes. Every laptop is professionally inspected, tested, and certified. We replace faulty parts, update software, and run performance checks to ensure like-new reliability.",
  },
  {
    question: 'Do you offer a warranty?',
    answer:
      " Yes. All refurbished laptops include a 12-month service warranty covering hardware or performance issues under normal use, plus responsive after-sales support.",
  },
  {
    question: ' Which brands can I choose from?',
       answer:"  We stock a rotating selection of Dell refurbished laptops, HP refurbished laptops, Lenovo refurbished laptops, Acer refurbished laptops, and refurbished ASUS laptops, with options for work, study, and business.",

  },
  {
    question: 'Why should I buy refurbished laptops instead of new ones?',
    answer:
      " You save significantly (often up to 60%) while getting dependable performance. Refurbished also reduces e-waste, making it a smart and sustainable choice.",
  },
    {
    question: 'Where can I buy refurbished laptops in Chennai?',
    answer:
      "You can buy refurbished laptops in Chennai from FTDS Hardware, a trusted destination for certified and warranty-backed devices. Every laptop is carefully tested, upgraded if needed, and certified to perform like new — ensuring great value for students, professionals, and businesses.",
  },
 
];

export default function RepublicLaptopPage() {
  const topRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { products, isLoading } = useProducts();
  const ITEMS_PER_PAGE = 24;

  // ✅ Ensure products are loaded before filtering
  const allProducts = products?.data || [];

  // ✅ Filter for Republic laptops (case-insensitive)
  let filteredProducts = allProducts.filter((p: any) => {
    const title = typeof p?.title === 'string' ? p.title.toLowerCase() : '';
    const category = typeof p?.category === 'string' ? p.category.toLowerCase() : '';

    return (
      title.includes('republic') ||
      category.includes('republic') ||
      title.includes('laptop') ||
      category.includes('laptop')
    );
  });

  // ✅ If no matches found, show all products (fallback)
  if (filteredProducts.length === 0) {
    filteredProducts = allProducts;
  }

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // ✅ Debug check (optional)
  useEffect(() => {
    console.log('Total products:', allProducts.length);
    console.log('Filtered Republic laptops:', filteredProducts.length);
  }, [products]);

   const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };




  return (
    <div className="max-w-full mx-auto py-5 px-4 md:px-10">

     
      {/* ✅ Page Header */}
      <h1 className="text-2xl font-bold mb-2">Refurbished  Laptop in Chennai</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Refurbished Laptop in Chennai</p>

      <div ref={topRef} className="w-full">
        {/* ✅ Banner Image */}
        <img
          src="https://pclmu.com/wp-content/uploads/2021/03/inner-banner.jpg"
          alt="Republic Laptop Banner"
          className="w-full h-[250px] object-cover rounded-2xl mb-10"
        />

        {/* ✅ Result Info */}
        <div className="flex justify-between mb-4">
          <p className="text-sm">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* ✅ Product Grid */}
        <ProductCard
          isLoading={isLoading}
          products={paginatedItems}
          gridCols="grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />

        {/* ✅ Pagination */}
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

        {/* ✅ SEO Content */}
        <div className="mt-10 max-w-7xl mx-auto text-gray-900">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">Buy Certified Refurbished Laptops in Chennai – FTDS Hardware</h1>
          <p className="mb-4">
            Upgrade your computing experience with certified refurbished laptops from FTDS Hardware, your trusted destination for refurbished laptops in Chennai and across India. Each laptop is professionally tested, certified, and backed by a 12-month service warranty, ensuring dependable performance and long-term value.y.
          </p>


          <p className="mb-4">If you’re planning to buy refurbished laptops for study, work, or business, FTDS Hardware offers a wide range of systems that deliver top-tier performance at a fraction of the price of new ones. Every device undergoes a multi-point inspection to guarantee smooth operation and like-new reliability.</p>

          <div className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">Our Product Range</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Dell refurbished laptops</h3>
                <p className="text-gray-700">Built for lasting durability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">HP refurbished laptops</h3>
                <p className="text-gray-700">Combine efficiency and stability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Lenovo refurbished laptops</h3>
                <p className="text-gray-700">Ideal for productivity on the go.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Acer refurbished laptops</h3>
                <p className="text-gray-700">Balance performance and affordability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Refurbished ASUS laptops</h3>
                <p className="text-gray-700">Designed for everyday excellence.</p>
              </div>
            </div>
          </div>
          <p className='my-4'>

            Whether you’re a student, professional, or entrepreneur, you can confidently buy refurbished laptops from FTDS Hardware, knowing each system is carefully restored, tested, and ready to perform.</p>

          <p className='mb-4'>Experience premium quality at affordable prices with FTDS Hardware — where every refurbished laptop delivers performance, reliability, and true value.</p>
          
          <section className="py-12 ">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  {/* Heading */}
                  <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 mt-3">
                      Everything you need to know about <b>FTDS Hardware</b> and our services.
                    </p>
                  </div>
          
                  {/* FAQ List */}
                  <div className="space-y-6">
                    {faqData.map((faq, index) => (
                      <div
                        key={index}
                        className={`border border-gray-300 rounded-xl p-5 transition-all duration-300 bg-white shadow-sm hover:shadow-md ${
                          activeIndex === index ? 'border-orange-500 bg-orange-50' : ''
                        }`}
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <h5
                            className={`text-lg font-semibold ${
                              activeIndex === index
                                ? 'text-orange-600'
                                : 'text-gray-900 hover:text-orange-500'
                            }`}
                          >
                            {faq.question}
                          </h5>
                          {activeIndex === index ? (
                            <HiMinusSm className="text-orange-500 text-2xl transition-all" />
                          ) : (
                            <HiPlusSm className="text-gray-600 text-2xl transition-all" />
                          )}
                        </button>
          
                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                          }`}
                        >
                          <p className="text-gray-700 text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
        </div>
      </div>
    </div>
  );
}
