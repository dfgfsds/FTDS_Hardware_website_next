"use client";
import Image from "next/image";
import { GraduationCap, Briefcase, Building2, Zap } from "lucide-react";
import HomeSeoSection from "./homeSeoSection";



export default function WhyChoose() {
  return (
    <>
  

    <section className="py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What <span className="text-orange-500">We Do</span>
        </h2>
            {/* Content Card */}
    <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 md:p-10 mt-4 lg:p-12">

      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
        FTDS Hardware is a trusted provider of <b>certified refurbished laptops and refurbished desktops in Chennai</b>,
        offering high-performance computing solutions at affordable prices. We specialize in delivering thoroughly tested
        and professionally refurbished laptops and computers that meet strict quality standards.
      </p>

      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
        Each device goes through a rigorous multi-point inspection and testing process to ensure reliable, like-new
        performance. Our focus on genuine products, transparent specifications, and dependable service has made FTDS
        Hardware a preferred choice for individuals and businesses across Tamil Nadu.
      </p>

      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        From <b>budget-friendly refurbished laptops in Chennai</b> to premium branded systems, we offer a wide selection
        from leading manufacturers such as <b>Dell, HP, Lenovo, Acer, and ASUS.</b> Our inventory supports diverse
        requirements — including some of the <b>best refurbished desktops in Chennai</b> for office and commercial use.
      </p>

      {/* Decorative blur */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-40"></div>
    </div>
      </div>

    
<HomeSeoSection/>  
    </section>


    </>
  )

}
