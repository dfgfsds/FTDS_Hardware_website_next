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

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Refurbished Laptops in Chennai – Certified & Affordable

          </h1>

          <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl  p-6 md:p-10 mt-4 lg:p-12">

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              FTDS Hardware offers reliable and affordable refurbished laptops in Chennai, serving students, professionals, and businesses with certified systems that deliver consistent performance at a fraction of the cost of new computers. Every laptop is carefully inspected, tested, and certified to ensure long-term usability and value.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              For customers searching for a<Link href="/categories/refurbished-laptops"> used laptop in Chennai</Link> or 2nd hand laptops in Chennai, FTDS Hardware provides a safer and more dependable alternative. Unlike regular second-hand systems, our refurbished laptops are professionally tested, restored where required, and backed by warranty and technical support.
            </p>





          </div>

        </div>

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-5 mb-6">
            Refurbished Desktops in Chennai – Certified & Affordable

          </h2>

          <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl  p-6 md:p-10 mt-4 lg:p-12">

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              We also offer best refurbished desktops for businesses, offices, and institutions that require stable workstation setups.


            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              Our inventory includes refurbished laptops from leading brands such as Dell, HP, Lenovo, Acer, and ASUS — suitable for students, professionals, startups, and enterprises.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">Customers choose FTDS Hardware when they want to <Link href="/categories/refurbished-desktops">buy refurbished desktops</Link> that offer reliable performance, clear specifications, and long-term value.</p>




          </div>
        </div>



        <HomeSeoSection />
      </section>


    </>
  )

}
