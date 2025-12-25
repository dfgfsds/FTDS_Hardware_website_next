'use client';
import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const faqData = [
  {
    question: 'What are refurbished laptops and desktops?',
    answer:
      "Refurbished laptops and desktops are pre-owned systems that are professionally tested, repaired if required, and certified to ensure reliable performance and usability.",
  },
  {
    question: 'Which brands of refurbished laptops do you sell?',
    answer:
      "We offer refurbished laptops and desktops from trusted brands including Dell, HP, Lenovo, Acer, and ASUS, along with other premium manufacturers.",
  },
  {
    question: 'Do refurbished laptops come with a warranty?',
    answer:
      "Yes. All refurbished laptops and desktops are backed by a 12-month service warranty, providing confidence and peace of mind after purchase.",
  },
  {
    question: 'Are refurbished laptops from FTDS Hardware reliable?',
    answer:
      "Yes. Every refurbished laptop and desktop sold by FTDS Hardware undergoes a rigorous multi-point inspection and testing process to ensure consistent performance.",
  },
    {
    question: 'Who can use refurbished laptops?',
    answer:
      "Refurbished laptops are suitable for students, professionals, startups, businesses, and institutions, depending on configuration and usage requirements.",
  },
  {
    question: 'Do you ship refurbished laptops outside Chennai',
    answer:
      "Yes. FTDS Hardware provides shipping across South India and all over India, ensuring safe and reliable delivery.",
  },
];

export default function  FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
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
  );
}
