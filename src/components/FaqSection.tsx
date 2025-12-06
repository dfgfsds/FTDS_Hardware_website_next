'use client';
import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const faqData = [
  {
    question: 'Are your refurbished products reliable?',
    answer:
      "Absolutely. Each device sold by FTDS Hardware passes through a comprehensive 25-point quality check, including hardware, battery, and software performance. Only units that meet our quality standards are certified for sale.",
  },
  {
    question: 'Do your products come with a warranty?',
    answer:
      "Yes. All refurbished laptops and desktops from FTDS Hardware include a 12-month service warranty covering hardware and performance issues under normal use. We provide reliable after-sales support to keep your system running smoothly.",
  },
  {
    question: 'What if I need support after purchase?',
    answer:
      "FTDS Hardware provides after-sales support for issues covered under warranty. You can contact our support team via phone, email, or visit our Chennai store for assistance.",
  },
  {
    question: 'Do you sell only in Chennai?',
    answer:
      "No — FTDS Hardware proudly serves customers across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh. We provide fast, reliable delivery to all major cities including Chennai, Coimbatore, Madurai, Kochi, Bengaluru, Mysuru, Hyderabad, and Vijayawada.",
  },
    {
    question: 'How long does delivery take?',
    answer:
      "We dispatch orders daily from Chennai, delivering within 1–3 days in Tamil Nadu and 3–5 days in nearby states. Delivery time may vary based on stock and courier availability.",
  },
  {
    question: 'Can I visit your store in person?',
    answer:
      "Yes, customers in Chennai can visit our physical location to explore products directly, test systems, and get personalized assistance. Contact our team for directions and working hours.",
  },
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
