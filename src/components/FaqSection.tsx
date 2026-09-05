'use client';
import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

// JavaScript Array format
const faqData = [
  {
    question: 'Is it safe to buy a refurbished laptop from FTDS Hardware?',
    answer: 'Yes. Every system sold by FTDS Hardware is professionally tested, certified, and covered by a 12-month warranty, making it a safe and reliable alternative to buying new.'
  },
  {
    question: 'What is the difference between a refurbished and a second-hand laptop?',
    answer: 'A second-hand laptop is usually sold as-is, with no guarantee of its condition. A refurbished laptop from FTDS Hardware is inspected, tested, repaired where needed, and backed by warranty, giving you verified reliability and greater peace of mind.'
  },
  {
    question: 'How long does a refurbished laptop from FTDS Hardware last?',
    answer: 'With proper use and care, a certified refurbished laptop from FTDS Hardware can typically perform reliably for 3-5 years, offering a lifespan similar to a new system with the same specification.'
  },
  {
    question: 'Does FTDS Hardware deliver outside Chennai?',
    answer: 'Yes. FTDS Hardware ships refurbished laptops and desktops across South India, making it convenient to access quality refurbished systems beyond Chennai.'
  },
  {
    question: 'Can businesses order refurbished computers in bulk from FTDS Hardware?',
    answer: 'Yes. FTDS Hardware supplies bulk and corporate orders with consistent configurations, making it a reliable choice for businesses and institutions.'
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 mt-3">
            Everything you need to know about <b>FTDS Hardware</b> and our services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData?.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded-xl p-5 transition-all duration-300 bg-white shadow-sm hover:shadow-md ${activeIndex === index ? 'border-orange-500 bg-orange-50' : ''
                }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h5
                  className={`text-lg font-semibold ${activeIndex === index
                    ? 'text-orange-600'
                    : 'text-gray-900 hover:text-orange-500'
                    }`}
                >
                  {faq?.question}
                </h5>
                {activeIndex === index ? (
                  <HiMinusSm className="text-orange-500 text-2xl transition-all" />
                ) : (
                  <HiPlusSm className="text-gray-600 text-2xl transition-all" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-60 mt-3' : 'max-h-0'
                  }`}
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  {faq?.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}