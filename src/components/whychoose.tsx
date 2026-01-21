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
              FTDS Hardware offers professionally tested refurbished computers in Chennai for customers who want dependable performance without paying the price of new systems. Our focus is on providing Refurbished Computers in Chennai that are suitable for real-world usage, whether for work, learning, or business operations.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              Every system is carefully sourced, inspected, and prepared to meet consistent quality standards. Instead of short-term fixes, we prioritise long-term reliability, transparent specifications, and customer trust. This approach makes refurbished systems a practical choice for individuals and organisations looking for value-driven technology.
            </p>





          </div>

        </div>

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-5 mb-6">
            Our Refurbished Computer Range

          </h2>

          <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl  p-6 md:p-10 mt-4 lg:p-12">

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              Our range of Refurbished Computers in Chennai includes various types and performance levels to meet different user needs. Those who need portable options can select lightweight systems suitable for everyday tasks, while users who require reliable, long-lasting setups can choose workstation-style systems designed for continuous operation.

            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              FTDS Hardware allows customers to select systems based on their practical requirements rather than technical specifications. Whether you need a compact system or a stationary workstation, our range provides flexibility without compromising performance.
            </p>



          </div>
        </div>



        <HomeSeoSection />
      </section>


    </>
  )

}
