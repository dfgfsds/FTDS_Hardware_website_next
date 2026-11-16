"use client";
{/* ===================== READ MORE SECTION ===================== */ }
import { useState } from "react";
import Image from "next/image";

export default function HomeSeoSection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Collapsible Info Section */}
            <div className="py-12 px-4 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* HIDDEN CONTENT */}
                    <div
                        className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[5000px] mt-6" : "max-h-0"
                            }`}
                    >
                        <section className="bg-white py-8 md:py-12">
                            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                                {/* LEFT CONTENT */}
                                <div>
                                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                        Why Choose FTDS Hardware for Refurbished Laptops in Chennai
                                    </h4>

                                    <p className="mt-4 md:mt-5 text-gray-600 text-base md:text-lg max-w-xl">
                                        FTDS Hardware has supplied 10,000+ refurbished systems over 12+ years, earning a 98% customer satisfaction rate while supporting students, professionals and businesses across Chennai.
                                    </p>

                                    <div className="mt-8 md:mt-12 space-y-8 md:space-y-10">
                                        {[
                                            [
                                                "01",
                                                "Certified Quality & Warranty",
                                                "Each refurbished laptop and desktop undergoes testing and certification before sale, and includes a 12-month service warranty for confidence after purchase.",
                                            ],
                                            [
                                                "02",
                                                "Value for Your Budget",
                                                "Choose refurbished laptops and desktops at a lower cost than new systems, making practical computing more accessible without stretching your budget.",
                                            ],
                                            [
                                                "03",
                                                "Clear Product Specifications",
                                                "Review product configurations, specifications and condition details before buying, so you understand what each system offers and can make an informed choice.",
                                            ],
                                            [
                                                "04",
                                                "Trusted Brands & More Choices",
                                                "Explore refurbished systems from trusted brands, with options for students, professionals, businesses and enterprises with different computing requirements.",
                                            ],
                                            [
                                                "05",
                                                "A More Sustainable Choice",
                                                "Choosing refurbished computers helps limit electronic waste and extends device life, supporting responsible reuse and a sustainable technology ecosystem overall.",
                                            ],
                                            [
                                                "06",
                                                "Ongoing After-Sales Support",
                                                "Our technical team provides prompt assistance and warranty support after purchase, helping you resolve concerns and continue using your refurbished system with confidence.",
                                            ],
                                        ].map(([num, title, desc]) => (
                                            <div key={num} className="flex gap-4 md:gap-6 items-start">
                                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-sm md:text-base">
                                                    {num}
                                                </div>
                                                <div>
                                                    <h5 className="text-lg md:text-xl font-semibold text-gray-900">
                                                        {title}
                                                    </h5>
                                                    <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
                                                        {desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className="relative mt-10 lg:mt-0">
                                    <Image
                                        src="/assets/lap.webp"
                                        alt="Laptop"
                                        width={500}
                                        height={300}
                                        className="w-full h-auto rounded-2xl"
                                    />

                                    <div className="relative bg-gray-100 rounded-3xl p-6 md:p-10 text-gray-800 shadow-xl mt-6">
                                        <h5 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                                            Trusted for Refurbished IT Solutions
                                        </h5>
                                        <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                                            FTDS Hardware serves students, professionals and enterprises with refurbished IT solutions across Chennai for everyday work, business tasks and varied computing needs.
                                        </p>

                                        <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
                                            <div>
                                                <p className="text-xl md:text-3xl font-bold">10K+</p>
                                                <p className="text-xs md:text-sm text-gray-700">Systems Sold</p>
                                            </div>
                                            <div>
                                                <p className="text-xl md:text-3xl font-bold">12+</p>
                                                <p className="text-xs md:text-sm text-gray-700">Years Experience</p>
                                            </div>
                                            <div>
                                                <p className="text-xl md:text-3xl font-bold">98%</p>
                                                <p className="text-xs md:text-sm text-gray-700">Customer Satisfaction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* READ MORE / LESS BUTTON */}
                    <div className="mt-3 text-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition"
                        >
                            {open ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
