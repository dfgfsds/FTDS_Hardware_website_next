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
                                        Why Buy from FTDS Hardware
                                    </h4>

                                    <p className="mt-4 md:mt-5 text-gray-600 text-base md:text-lg max-w-xl">
                                        FTDS Hardware has sold 10,000+ refurbished systems over 12+ years in
                                        business, maintaining a 98% customer satisfaction rate while serving students,
                                        professionals, and businesses across Chennai.
                                    </p>

                                    <div className="mt-8 md:mt-12 space-y-8 md:space-y-10">
                                        {[
                                            [
                                                "01",
                                                "Certified Quality & Warranty",
                                                "Every refurbished laptop and desktop is professionally tested and certified, with a 12-month service warranty for dependable quality and complete peace of mind.",
                                            ],
                                            [
                                                "02",
                                                "Best Value for Money",
                                                "Get dependable refurbished laptops and desktops at a significantly lower cost than new systems, making quality computing more accessible and affordable.",
                                            ],
                                            [
                                                "03",
                                                "Transparent Specifications",
                                                "Clear product configurations, specifications, and condition details are provided, so you know exactly what you are purchasing before making your decision.",
                                            ],
                                            [
                                                "04",
                                                "Trusted Brands & Wide Selection",
                                                "Choose from a wide range of refurbished systems from trusted brands, with options suitable for students, professionals, businesses, and enterprises.",
                                            ],
                                            [
                                                "05",
                                                "Eco-Friendly Technology",
                                                "Buying refurbished computers helps reduce electronic waste while supporting a more sustainable technology ecosystem through responsible device reuse.",
                                            ],
                                            [
                                                "06",
                                                "Reliable After-Sales Support",
                                                "Our experienced technical team provides prompt support and warranty assistance after your purchase, helping you get continued value from your refurbished system.",
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
                                            Trusted by Professionals &amp; Businesses
                                        </h5>
                                        <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                                            From students to enterprises, FTDS Hardware provides
                                            reliable refurbished IT solutions across Chennai, trusted by
                                            professionals and businesses for dependable computing needs.
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
