"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - 10
        ) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
        }
      }, 3500);
    };

    const stopAutoScroll = () => clearInterval(scrollInterval);

    startAutoScroll();

    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    return () => {
      stopAutoScroll();
      slider.removeEventListener("mouseenter", stopAutoScroll);
      slider.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-medium">
            Trusted Choice for Refurbished Computers in Chennai
          </p>
        </div>

        {/* Auto Scroll Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
                     [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="snap-start min-w-[90%] sm:min-w-[48%] lg:min-w-[32%]
                         bg-white rounded-3xl shadow-lg p-8 border border-gray-100
                         hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                  <span className="block text-sm text-gray-500 font-normal">
                    {item.role}
                  </span>
                </h4>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google Review"
                  className="h-6"
                />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-sm text-gray-500">(Google Review)</span>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* DATA */
const reviews = [
  {
    name: "Sudarsan",
    role: "Operations Manager – Chennai",
    review:
      "I was searching for refurbished computers in Chennai and found FTDS Hardware. The system quality was excellent and pricing was transparent.",
  },
  {
    name: "Anand K",
    role: "Small Business Owner",
    review:
      "FTDS Hardware helped me understand the difference between second hand and refurbished systems. Very professional.",
  },
  {
    name: "Shiva",
    role: "Startup Founder",
    review:
      "The refurbished computer arrived well-packed and worked perfectly right out of the box.",
  },
  {
    name: "Anu Kumar",
    role: "IT Administrator",
    review:
      "Consistent configurations and responsive after-sales support. Highly recommended.",
  },
  {
    name: "Pranitha",
    role: "Freelance Designer",
    review:
      "Great value for money without compromising performance or reliability.",
  },
];
