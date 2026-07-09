// 'use client';
// import { useState } from 'react';
// import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

// const faqData = [
//   {
//     question: 'What are refurbished computers?',
//     answer:
//       "Refurbished computers are pre-owned systems that have been professionally tested, restored, and verified for reliable use.",
//   },
//   {
//     question: 'Does FTDS hardware offer warranty on refurbished systems?',
//     answer:
//       "Yes. Our refurbished computers come with one year warranty support for peace of mind",
//   },
//   {
//     question: 'Do you supply refurbished systems in bulk?',
//     answer:
//       "Yes. We cater to bulk buyers, businesses, and institutions with consistent system configurations.",
//   },
//   {
//     question: 'How do I choose the right refurbished computer?',
//     answer:
//       "Our team at FTDS hardware helps you select a system based on your usage requirements, budget, and performance needs.",
//   },
//     {
//     question: 'Are refurbished computers from FTDS Hardware reliable?',
//     answer:
//       "Yes. Every refurbished computer sold by FTDS Hardware undergoes a rigorous multi-point inspection and testing process to ensure consistent performance. Which makes us the best sellers of Refurbished Computers in Chennai ",
//   },
//    {
//     question: 'Which brands of refurbished computers do you sell?',
//     answer:
//       "We stock a rotating selection of Dell refurbished computers , HP refurbished computers , Lenovo refurbished computers , Acer refurbished computers , and ASUS refurbished computers",
//   },

// ];

// export default function  FaqSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const toggleAccordion = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-12 ">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mb-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-600 mt-3">
//             Everything you need to know about <b>FTDS Hardware</b> and our services.
//           </p>
//         </div>

//         {/* FAQ List */}
//         <div className="space-y-6">
//           {faqData.map((faq, index) => (
//             <div
//               key={index}
//               className={`border border-gray-300 rounded-xl p-5 transition-all duration-300 bg-white shadow-sm hover:shadow-md ${
//                 activeIndex === index ? 'border-orange-500 bg-orange-50' : ''
//               }`}
//             >
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="w-full flex items-center justify-between text-left"
//               >
//                 <h5
//                   className={`text-lg font-semibold ${
//                     activeIndex === index
//                       ? 'text-orange-600'
//                       : 'text-gray-900 hover:text-orange-500'
//                   }`}
//                 >
//                   {faq.question}
//                 </h5>
//                 {activeIndex === index ? (
//                   <HiMinusSm className="text-orange-500 text-2xl transition-all" />
//                 ) : (
//                   <HiPlusSm className="text-gray-600 text-2xl transition-all" />
//                 )}
//               </button>

//               <div
//                 className={`overflow-hidden transition-all duration-500 ${
//                   activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
//                 }`}
//               >
//                 <p className="text-gray-700 text-base leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const faqData = [
  // {
  //   question: 'What are refurbished computers?',
  //   answer:
  //     "Refurbished computers are pre-owned systems that have been professionally tested, restored, and verified for reliable use.",
  // },
  // {
  //   question: 'Does FTDS hardware offer warranty on refurbished systems?',
  //   answer:
  //     "Yes. Our refurbished computers come with one year warranty support for peace of mind",
  // },
  // {
  //   question: 'Do you supply refurbished systems in bulk?',
  //   answer:
  //     "Yes. We cater to bulk buyers, businesses, and institutions with consistent system configurations.",
  // },
  // {
  //   question: 'How do I choose the right refurbished computer?',
  //   answer:
  //     "Our team at FTDS hardware helps you select a system based on your usage requirements, budget, and performance needs.",
  // },
  // {
  //   question: 'Are refurbished computers from FTDS Hardware reliable?',
  //   answer:
  //     "Yes. Every refurbished computer sold by FTDS Hardware undergoes a rigorous multi-point inspection and testing process to ensure consistent performance. Which makes us the best sellers of Refurbished Computers in Chennai ",
  // },
  // {
  //   question: 'Which brands of refurbished computers do you sell?',
  //   answer:
  //     "We stock a rotating selection of Dell refurbished computers , HP refurbished computers , Lenovo refurbished computers , Acer refurbished computers , and ASUS refurbished computers",
  // },
  {
    question: 'Is it safe to buy a refurbished laptop from FTDS Hardware?',
    answer:
      "Yes. Every system sold by FTDS Hardware is professionally tested, certified, and covered by a 12-month warranty, so it's a safe alternative to buying new.",
  },
  {
    question: 'What is the difference between a refurbished and a second-hand laptop?',
    answer:
      "A second-hand laptop is sold as-is with no guarantee of condition. A refurbished laptop from FTDS Hardware is inspected, tested, repaired where needed, and backed by warranty — giving you verified reliability.",
  },
  {
    question: 'How long does a refurbished laptop from FTDS Hardware last?',
    answer:
      "With proper use, a certified refurbished laptop from FTDS Hardware typically performs reliably for 3-5 years, similar to a new system of the same specification.",
  },
  {
    question: 'Does FTDS Hardware deliver outside Chennai?',
    answer:
      "Yes. FTDS Hardware ships refurbished laptops and desktops across South India.",
  },
  {
    question: 'Can businesses order refurbished computers in bulk from FTDS Hardware?',
    answer:
      "Yes. FTDS Hardware supplies bulk and corporate orders with consistent configurations for businesses and institutions.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
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
                className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
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