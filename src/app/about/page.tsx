

import Image from 'next/image';
import Link from "next/link";
import { FaHandsHelping, FaSeedling } from 'react-icons/fa';
import { GiCircuitry, GiLightBulb } from 'react-icons/gi';
import TrendingTabs from "../../components/tabsSection";
import aboutImg from "../../../public/assets/about/banner.webp";
import aboutsub1 from "../../../public/assets/about/3.webp";
import aboutsub from "../../../public/assets/about/1.webp";
import aboutlogo from "../../../public/assets/about/2.webp";


// app/about/page.tsx

export async function generateMetadata() {
   const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.ftds.in/about#aboutpage",
        url: "https://www.ftds.in/about",
        name: "About Us – FTDS",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.ftds.in/#website",
        },
        about: {
          "@type": "Organization",
          "@id": "https://www.ftds.in/#organization",
          name: "FTDS",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.ftds.in/about#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ftds.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: "https://www.ftds.in/about",
          },
        ],
      },
    ],
  };


  return {
    title: " About FTDS Hardware | Trusted Refurbished Computer Store in Chennai",
    description:
      " Learn about FTDS Hardware, a trusted refurbished computer store in Chennai delivering quality-tested systems, transparent specs, and customer support.",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.ftds.in/about",
    },
    openGraph: {
      title: " About FTDS Hardware | Trusted Refurbished Computer Store in Chennai",
      description:
        " Learn about FTDS Hardware, a trusted refurbished computer store in Chennai delivering quality-tested systems, transparent specs, and customer support.",
      url: "https://www.ftds.in/about",
      siteName: "FTDS Hardware",
      type: "website",
    },
    twitter: { card: "summary_large_image" },

    // ⭐ SSR Script inside <head>
    other: {
      "application/ld+json": JSON.stringify(aboutSchema),
    },
  };
}



export default function AboutPage() {

  const values = [
    {
      title: 'Quality',
      desc: 'We ensure every device is tested and reliable.',
    },
    {
      title: 'Sustainability',
      desc: 'We reduce e-waste by restoring and reusing tech.',
    },
    {
      title: 'Affordability',
      desc: 'We offer cost-effective solutions without compromising on performance.',
    },
  ];
  return (
    <>



      <div className=" bg-[#fcfcfc]">
        {/* Hero Section */}
        <section className="relative">
          {/* Image Section */}
          <div className="relative w-[95%] h-[600px] mx-auto my-5 rounded-2xl overflow-hidden flex justify-end sm:justify-center">
            <div className="relative w-full sm:w-full md:w-full h-full">
              <Image
                src={aboutImg}
                alt="FTDS Hardware"
                fill
                className="object-cover w-full h-full sm:object-center object-right"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 md:bg-opacity-70"></div>
            </div>
          </div>

          {/* Desktop Text Overlay */}
          <div className="absolute inset-0 hidden sm:flex items-center justify-center text-center px-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                About Us – FTDS Hardware
              </h2>
              <p className="text-white text-sm sm:text-base max-w-3xl mx-auto">
                Welcome to FTDS Hardware, your trusted source for certified refurbished laptops and desktops in South India. Based in Chennai, we provide high-quality, warranty-backed IT hardware from top brands like Dell, HP, Lenovo, Acer, and ASUS — ensuring powerful performance, reliability, and affordability for individuals, businesses, and institutions.
              </p>
            </div>
          </div>

          {/* Mobile Text Below Image */}
          <div className="block sm:hidden text-center px-4 py-12">
            <h2 className="text-2xl font-bold text-gray-800  mb-3">
              About Us – FTDS Hardware
            </h2>
            <p className="text-gray-800 text-sm">
              Welcome to FTDS Hardware, your trusted source for certified refurbished laptops and desktops in South India. Based in Chennai, we provide high-quality, warranty-backed IT hardware from top brands like Dell, HP, Lenovo, Acer, and ASUS — ensuring powerful performance, reliability, and affordability for individuals, businesses, and institutions.
            </p>
          </div>
        </section>


        {/* About Section */}
        <section className="max-w-7xl mx-auto pb-12 px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Right Image Content (shown first on mobile) */}
            <div className="order-1 md:order-2 grid grid-cols-2 sm:grid-cols-2 gap-6">
              {/* Image 1 */}
              <div className="relative w-full h-64 sm:h-[350px] rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={aboutsub1}
                  alt="Store"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Image 2 — now visible on all screens */}
              <div className="relative w-full h-64 sm:h-[350px]  sm:mt-20 rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={aboutsub}
                  alt="Showroom"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 sm:object-center object-right"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>


            {/* Left Text Content */}
            <div className="order-2 md:order-1">
              <h1 className="text-2xl md:text-4xl text-gray-800  font-bold md:mt-8  mb-3">
                About Our Company – Quality <Link
                  href="/categories/refurbished-laptops"> Refurbished Laptops & Desktops</Link> You Can Trust
              </h1>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                At FTDS Hardware, we specialize in providing premium refurbished IT solutions that combine performance, quality, and value. Every laptop and desktop we sell goes through a thorough multi-point inspection and testing process, ensuring like-new performance and long-lasting durability.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-2">
                With a presence across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh, we proudly serve students, professionals, startups, and corporates seeking dependable, cost-effective computing options. Our products are backed by a 12-month service warranty and supported by a dedicated technical team to keep your systems running smoothly.</p>
              <p className="text-gray-700 text-base leading-relaxed mb-2">By choosing FTDS Hardware, you’re not just saving money — you’re also helping reduce electronic waste and promoting sustainable technology practices. Our focus on transparency, genuine products, and customer satisfaction makes us one of South India’s most trusted refurbished IT hardware providers.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="max-w-7xl mx-auto pb-12 px-4 ">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Logo Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={aboutlogo}
                alt="Company Logo"
                width={490}
                height={464}
                className="rounded-xl w-full h-auto max-w-xs md:max-w-xl"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2">
              {/* Our Mission */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-3xl">
                To make high-performance computing affordable and sustainable by providing top-quality refurbished laptops and desktops that deliver reliability, value, and long-term satisfaction — while promoting eco-friendly technology use across South India.
              </p>

              {/* Our Vision */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-3xl">
                To be South India’s most trusted and customer-centric refurbished IT brand, empowering individuals and businesses with affordable, certified, and sustainable computing solutions that inspire confidence, performance, and environmental responsibility.

              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-[#fcfcfc]">
          <TrendingTabs />
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div> */}
        </section>
        {/* Testimonial Section */}
        <section className="py-12 bg-[#fcfcfc] px-6 md:px-20">
          {/* Quote Box */}
          <div className="bg-[#f0f4f9] w-full md:w-4/5 mx-auto p-6 sm:p-10 rounded-xl mb-12 shadow-sm">
            <p className="text-gray-900 font-medium text-lg sm:text-xl leading-relaxed italic relative">
              <span className="text-5xl text-orange-500 absolute -top-4 -left-4 select-none">“</span>
              FTDS Hardware was started with the purpose of making high-quality technology accessible
              <br className="hidden sm:block" />
              and long-lasting. We think that everyone should be able to use trustworthy devices, and we strive every day to make that happen
            </p>
          </div>

          {/* Chairman Info */}
          {/* <div className="text-left md:w-4/5 mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131313] mb-1">
          A.K. Faisal
        </h3>
        <p className="uppercase text-sm sm:text-base text-gray-600 font-semibold tracking-wide mb-3">
          Chairman
        </p>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          He is one of the leading businessmen in the UAE. Currently, he is the Corporate Executive Director of{' '}
          <span className="font-semibold text-black">Malabar Gold and Diamonds</span>, and also one of the
          founders of Malabar Group, playing a vital part in its development since its founding in 1993.
        </p>
      </div> */}
        </section>
      </div>
    </>

  );
}
