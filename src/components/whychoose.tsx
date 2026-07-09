"use client";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase, Building2, Zap } from "lucide-react";
import HomeSeoSection from "./homeSeoSection";



export default function WhyChoose() {
  return (
    <>


      <section className="py-12 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Quality Refurbished Computers Without Compromise

          </h2>

          <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl  p-6 md:p-10 mt-4 lg:p-12">

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              FTDS Hardware sells refurbished computers in Chennai that are professionally
              tested, certified, and backed by a 12-month warranty — giving you dependable
              performance at a fraction of the cost of a new system.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              Every laptop and desktop we sell goes through sourcing, multi-point inspection,
              and quality preparation before it reaches you. We focus on long-term reliability
              and transparent specifications rather than short-term fixes, which is why
              students, professionals, and businesses across Chennai choose FTDS Hardware
              for refurbished IT hardware.
            </p>





          </div>

        </div>

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-5 mb-6">
            Our Refurbished Computer Range

          </h2>

          <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl  p-6 md:p-10 mt-4 lg:p-12">

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              FTDS Hardware&apos;s range of refurbished computers in Chennai covers portable
              laptops for everyday use and workstation-grade desktops for continuous,
              heavy-duty operation.

            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              Whether you need a lightweight laptop for study or remote work, or a
              reliable desktop for office and business use, you can choose by usage,
              brand, or budget — not just technical specs.
            </p>



          </div>
        </div>

        {/* New Section 3: Shop by Your Needs / Brand / Budget */}
        <div className="max-w-7xl mx-auto text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Shop by Your Needs / Brand / Budget
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1: Shop by Use */}
            <div className="relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Shop by Use
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Choose a refurbished laptop or desktop based on daily learning, office work,
                business operations, or advanced computing — every system is tested for
                dependable performance at its price point.
              </p>
            </div>

            {/* Card 2: Shop by Brand */}
            <div className="relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Shop by Brand
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                FTDS Hardware stocks refurbished Dell, HP, Lenovo, Acer, and ASUS systems —
                brands known for durability and long-term usability.
              </p>
            </div>

            {/* Card 3: Shop by Budget */}
            <div className="relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Shop by Budget
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Compare our certified refurbished computers against ordinary second-hand
                computers in Chennai — same or lower price, but with tested quality and
                warranty support included.
              </p>
            </div>
          </div>
        </div>

        <HomeSeoSection />
      </section>


    </>
  )

}
