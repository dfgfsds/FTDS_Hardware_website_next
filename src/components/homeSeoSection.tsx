{/* ===================== READ MORE SECTION ===================== */ }
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase, Building2, Zap } from "lucide-react";

export default function HomeSeoSection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Your existing code above... */}

            {/* Collapsible Info Section */}
            <div className="py-12 px-4 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">


                    {/* HIDDEN CONTENT */}
                    <div
                        className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[5000px] mt-6" : "max-h-0"
                            }`}
                    >

                        <section className="bg-gray-50 py-8 md:py-12">

                            <div className="max-w-7xl mx-auto text-center">

                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                    <span className="">What We </span>Do
                                </h2>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mt-4">Certified Refurbished Computing Solutions You Can Trust</h3>

                                <div className="relative  p-6 md:p-10  lg:p-12">

                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
                                        FTDS Hardware is a Chennai-based provider of certified refurbished laptop computers and desktops designed to meet everyday and professional computing needs. Every system we sell goes through a structured multi-point testing process to ensure performance, stability, and reliability.
                                    </p>

                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
                                        We focus on transparency, genuine components, and dependable after-sales service. This approach has helped us become a trusted choice for refurbished computers in Chennai, serving customers across Tamil Nadu and beyond.
                                    </p>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
                                        Our inventory includes a wide range of refurbished laptops and desktops from leading brands such as Dell, HP, Lenovo, Acer, and ASUS — suitable for home users, offices, startups, and institutions.


                                    </p>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
                                        Customers choose FTDS Hardware when they want to buy refurbished laptops in Chennai and desktops that offer reliable performance, transparent specifications, and long-term value.</p>


                                </div>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                                <div className="text-center mb-8 md:mb-12">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                        At <span className="">FTDS Hardware</span> we’ve Tailored For Your Requirements
                                    </h2>
                                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-4xl mx-auto">
                                        Our collection is carefully curated to deliver the best refurbished desktops and best refurbished laptops in Chennai.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                                    {/* Card 1 */}
                                    <div className="bg-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all p-6 md:p-8">
                                        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-4 md:mb-6 mx-auto md:mx-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M9.75 17h4.5m-9 0h13.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H5.25A1.5 1.5 0 003.75 6v9.5A1.5 1.5 0 005.25 17z" />
                                            </svg>
                                        </div>

                                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 text-center md:text-left">
                                            Shop by Your Needs
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                                          Choose refurbished laptops and desktops based on how you plan to use them. Whether it’s for daily learning, office work, business operations, or advanced computing, our certified systems are tested to deliver dependable performance at every level.
                                       
                                        </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all p-6 md:p-8">
                                        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-4 md:mb-6 mx-auto md:mx-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M12 3l2.09 4.26L18.5 8l-3.25 3.17L16 15.5l-4-2.1-4 2.1.75-4.33L5.5 8l4.41-.74L12 3z" />
                                            </svg>
                                        </div>

                                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 text-center md:text-left">
                                            Shop by Brand
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                                           Explore refurbished systems from globally trusted brands including Dell, HP, Lenovo, Acer, and ASUS. Our branded refurbished laptops and desktops are known for durability, performance, and long-term usability.
                                      
                                        </p>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all p-6 md:p-8">
                                        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-4 md:mb-6 mx-auto md:mx-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2m4-3h-4a2 2 0 100 4h4v-4z" />
                                            </svg>
                                        </div>

                                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 text-center md:text-left">
                                            Shop by Budget
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                                           Find affordable refurbished laptops in Chennai that fit your budget without compromising quality. Whether you are comparing refurbished systems with <Link href="/shop" >used laptops in Chennai </Link>or exploring alternatives to <Link href="/shop" >2nd hand laptops</Link>, our certified laptops offer better value, reliability, and warranty support.
                                        
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </section>


                        <section className="bg-white py-8 md:py-12">
                            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                                {/* LEFT CONTENT */}
                                <div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                        Why Buy from <span className="">FTDS Hardware</span>
                                    </h2>

                                    <p className="mt-4 md:mt-5 text-gray-600 text-base md:text-lg max-w-xl">
                                        Enterprise-grade refurbished IT hardware with certified quality,
                                        transparent pricing, and long-term reliability.
                                    </p>

                                    <div className="mt-8 md:mt-12 space-y-8 md:space-y-10">

                                        {[
                                            ["01", "Certified Quality & Warranty",
                                                "Every refurbished laptop and desktop is professionally tested and certified, backed by a 12-month service warranty for complete peace of mind."],
                                            ["02", "Best Value for Money",
                                                "Get dependable refurbished laptops and desktops at significantly lower cost compared to new systems, making quality computing more accessible. "],
                                            ["03", "Transparent Specifications",
                                                " Clear product configurations, specifications, and condition details are provided so you know exactly what you’re purchasing. "],
                                            ["04", "Trusted Brands & Wide Selection", "Choose from a wide range of refurbished systems suitable for students, professionals, businesses, and enterprises."],
                                            ["05", "Eco-Friendly Technology", "Buying refurbished computers helps reduce electronic waste and supports a more sustainable technology ecosystem. "],
                                            ["06", "Reliable After-Sales Support", "Our experienced technical team provides prompt support and warranty assistance even after your purchase."]
                                        ].map(([num, title, desc]) => (
                                            <div key={num} className="flex gap-4 md:gap-6 items-start">
                                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-sm md:text-base">
                                                    {num}
                                                </div>
                                                <div>
                                                    <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                                                        {title}
                                                    </h2>
                                                    <h3 className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
                                                        {desc}
                                                    </h3>
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
                                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                                            Trusted by Professionals & Businesses
                                        </h3>
                                        <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                                            From students to enterprises, FTDS Hardware delivers
                                            reliable refurbished IT solutions across Chennai.
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


                        <section className="relative py-8 md:py-12 px-4 sm:px-6 bg-white overflow-hidden">
                            <div className="relative max-w-7xl mx-auto">

                                <h2 className="text-center mb-10 md:mb-14 block text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800">
                                  
                                        Laptops & Desktops for Every Requirement
                                
                                </h2>

                                <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-4">

                                    {/* Card 1 */}
                                    <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-300 to-gray-300">
                                        <div className="h-full rounded-2xl bg-white backdrop-blur-xl p-6 md:p-8
          shadow-md hover:shadow-2xl transition-all duration-300
          group-hover:-translate-y-2">
                                            <GraduationCap size={34} className="mb-3 md:mb-4 text-gray-800" />
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                                For Students & Online Learning
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                               Budget-friendly refurbished laptops suitable for classes, assignments, browsing, and daily academic use.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-300 to-gray-300">
                                        <div className="h-full rounded-2xl bg-white backdrop-blur-xl p-6 md:p-8
          shadow-md hover:shadow-2xl transition-all duration-300
          group-hover:-translate-y-2">
                                            <Briefcase size={34} className="mb-3 md:mb-4 text-gray-800" />
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                                For Working Professionals

                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                              Refurbished laptops and desktops designed for office work, multitasking, and remote setups.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-300 to-gray-300">
                                        <div className="h-full rounded-2xl bg-white backdrop-blur-xl p-6 md:p-8
          shadow-md hover:shadow-2xl transition-all duration-300
          group-hover:-translate-y-2">
                                            <Building2 size={34} className="mb-3 md:mb-4 text-gray-800" />
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                              For Businesses & Startups
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                               Cost-effective refurbished computing solutions with bulk availability for teams and offices.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-300 to-gray-300">
                                        <div className="h-full rounded-2xl bg-white backdrop-blur-xl p-6 md:p-8
          shadow-md hover:shadow-2xl transition-all duration-300
          group-hover:-translate-y-2">
                                            <Zap size={34} className="mb-3 md:mb-4 text-gray-800" />
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                               For Developers & Power Users
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                              Higher-configuration refurbished systems with SSD storage and enhanced RAM for demanding workloads.
                                            </p>
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
