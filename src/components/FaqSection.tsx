'use client';
import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

// JavaScript Array format
const faqData = [
  {
    question: 'Is it safe to buy a refurbished laptop from FTDS Hardware?',
    answer: 'Yes. FTDS Hardware professionally tests and certifies every system before sale, and includes a 12-month warranty for added confidence when choosing a refurbished laptop for everyday use.'
  },
  {
    question: 'What is the difference between a refurbished and a second-hand laptop?',
    answer: 'A second-hand laptop is often sold in its existing condition, without checks or warranty. FTDS Hardware inspects and tests each refurbished laptop, completes necessary repairs and provides warranty support, so you can buy with clearer information and confidence.'
  },
  {
    question: 'How long does a refurbished laptop from FTDS Hardware last?',
    answer: 'With regular maintenance and careful handling, a certified refurbished laptop from FTDS Hardware may last around 3-5 years, depending on its condition, usage, configuration, daily workload and regular maintenance needs over time.'
  },
  {
    question: 'Does FTDS Hardware deliver outside Chennai?',
    answer: 'Yes. FTDS Hardware delivers refurbished laptops and desktops across South India, helping customers outside Chennai arrange delivery when ordering.'
  },
  {
    question: 'Can businesses order refurbished computers in bulk from FTDS Hardware?',
    answer: 'Yes. FTDS Hardware handles bulk and corporate orders for businesses and institutions, with configurations planned to suit their computing requirements.'
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