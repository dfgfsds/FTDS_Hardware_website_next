{/* ===================== READ MORE SECTION ===================== */ }
import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Briefcase, Building2, Zap } from "lucide-react";

export default function HomeSeoSection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Your existing code above... */}

            {/* Collapsible Info Section */}
            <div className="bg-gray-50 py-12 px-4 md:px-12 lg:px-20">
                <div className="max-w-7xl">


                    {/* HIDDEN CONTENT */}
                    <div
                        className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[5000px] mt-6" : "max-h-0"
                            }`}
                    >

                        <section className="bg-gray-50 py-8 md:py-12">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                                <div className="text-center mb-8 md:mb-12">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                        At <span className="text-orange-500">FTDS Hardware</span> we’ve Tailored For Your Requirements
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
                                            Find the right refurbished IT hardware based on how you plan to use it. Choose from <b>certified refurbished laptops and desktops</b>, high-quality monitors, and a wide range of computer hardware and accessories — all tested, reliable, and priced to fit every requirement.
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
                                            Explore refurbished systems from <b>trusted global brands</b> like HP, Lenovo, Dell, Acer, and ASUS. We stock genuine branded laptops and desktops known for performance, durability, and long-term reliability, along with other premium IT brands.
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
                                            Browse <b>affordable refurbished laptops and desktops</b> tailored to your budget. Whether you’re looking for laptops under ₹20,000, ₹30,000, or ₹40,000, or refurbished desktops under ₹20,000 and ₹30,000, we make quality computing accessible without overspending.
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
                                        Why Buy from <span className="text-orange-500">FTDS Hardware</span>
                                    </h2>

                                    <p className="mt-4 md:mt-5 text-gray-600 text-base md:text-lg max-w-xl">
                                        Enterprise-grade refurbished IT hardware with certified quality,
                                        transparent pricing, and long-term reliability.
                                    </p>

                                    <div className="mt-8 md:mt-12 space-y-8 md:space-y-10">

                                        {[
                                            ["01", "Certified Quality & Warranty",
                                                "Every refurbished laptop and desktop is rigorously tested, quality-checked, and certified for reliable performance — backed by a 12-month service warranty."],
                                            ["02", "Best Value Pricing",
                                                "Get high-performance refurbished laptops and desktops at up to 60% lower cost than new systems — without compromising on quality. "],
                                            ["03", "Complete Transparency",
                                                " We provide clear and accurate specifications, configurations, and accessory details, so you know exactly what you’re buying before checkout. "],
                                            ["04", "Trusted Brands & Wide Selection", "Choose from leading brands like Dell, HP, Lenovo, Acer, and ASUS, with options suitable for students, professionals, businesses, and enterprises."],
                                            ["05", "Eco-Friendly Technology", "By choosing refurbished IT hardware, you help reduce e-waste and support a more sustainable and responsible technology ecosystem "],
                                            ["06", "Reliable After-Sales Support", "Our experienced technical team offers prompt service support and warranty assistance, ensuring peace of mind even after your purchase."]
                                        ].map(([num, title, desc]) => (
                                            <div key={num} className="flex gap-4 md:gap-6 items-start">
                                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-sm md:text-base">
                                                    {num}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                                        {title}
                                                    </h3>
                                                    <h4 className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
                                                        {desc}
                                                    </h4>
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

                                <h2 className="text-center mb-10 md:mb-14">
                                    <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800">
                                        Laptops & Desktops for Every Requirement
                                    </span>
                                </h2>

                                <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-4">

                                    {/* Card 1 */}
                                    <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-300 to-gray-300">
                                        <div className="h-full rounded-2xl bg-white backdrop-blur-xl p-6 md:p-8
          shadow-md hover:shadow-2xl transition-all duration-300
          group-hover:-translate-y-2">
                                            <GraduationCap size={34} className="mb-3 md:mb-4 text-gray-800" />
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                                Students & Online Learning
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                              Affordable refurbished laptops ideal for online classes, assignments, browsing, and daily academic use — reliable performance without stretching your budget.
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
                                                Working Professionals
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                               High-performance refurbished laptops and desktops suitable for office work, multitasking, software tools, and remote work setups.
                                            
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
                                                Businesses & Startups
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Scalable refurbished desktop and laptop solutions for teams, offices, and startups — consistent performance, bulk availability, and cost efficiency.
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
                                                Developers & Power Users
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                               Advanced refurbished systems with higher RAM, SSD storage, and powerful processors designed for programming, data handling, and demanding workloads.
                                            
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
