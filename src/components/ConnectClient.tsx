'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Laptop,
  Monitor,
  Printer,
  Keyboard,
  Building2,
  GraduationCap,
  MapPin,
  Clock,
  Phone,
  Mail,
  Star,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Sparkles,
  Users,
  Briefcase,
  Home,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGlobe
} from 'react-icons/fa';
import { FaXTwitter, FaThreads } from 'react-icons/fa6';

export default function ConnectClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@ftds_hardware',
      url: 'https://www.instagram.com/ftds_hardware/',
      icon: FaInstagram,
      color: 'from-pink-500 via-purple-500 to-orange-500',
      iconBg: 'bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 text-white',
      textColor: 'group-hover:text-pink-600',
      description: 'Follow for daily tech updates, refurbished laptop showcase & behind the scenes.',
    },
    {
      name: 'WhatsApp',
      handle: '+91 7277929292',
      url: 'https://wa.me/7277929292',
      icon: FaWhatsapp,
      color: 'from-emerald-500 to-green-600',
      iconBg: 'bg-green-600 text-white',
      textColor: 'group-hover:text-green-600',
      description: 'Instant customer support, product stock inquiries & quick quotes.',
    },
    {
      name: 'YouTube',
      handle: '@ftdshardware',
      url: 'https://www.youtube.com/@ftdshardware',
      icon: FaYoutube,
      color: 'from-red-600 to-rose-700',
      iconBg: 'bg-red-600 text-white',
      textColor: 'group-hover:text-red-600',
      description: 'Watch detailed product reviews, laptop unboxings & hardware guides.',
    },
    {
      name: 'Google Maps',
      handle: 'Chennai Showroom',
      url: 'https://maps.app.goo.gl/sU25vbuUk88m61HF7',
      icon: FaMapMarkerAlt,
      color: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-blue-600 text-white',
      textColor: 'group-hover:text-blue-600',
      description: 'Locate our T. Nagar showroom & get instant driving directions.',
    },
    {
      name: 'Facebook',
      handle: 'ftdshardware',
      url: 'https://www.facebook.com/ftdshardware',
      icon: FaFacebookF,
      color: 'from-blue-600 to-cyan-600',
      iconBg: 'bg-blue-600 text-white',
      textColor: 'group-hover:text-blue-600',
      description: 'Connect with our Facebook community for customer reviews & announcements.',
    },
    // {
    //   name: 'LinkedIn',
    //   handle: 'FT Digital Solutions',
    //   url: 'https://www.linkedin.com/company/ft-digital-solutions/',
    //   icon: FaLinkedinIn,
    //   color: 'from-blue-700 to-sky-700',
    //   iconBg: 'bg-blue-700 text-white',
    //   textColor: 'group-hover:text-blue-700',
    //   description: 'Corporate IT solutions, B2B procurement & partnership news.',
    // },
    {
      name: 'Threads',
      handle: '@ftds_hardware',
      url: 'https://www.threads.com/@ftds_hardware',
      icon: FaThreads,
      color: 'from-slate-800 to-slate-950',
      iconBg: 'bg-slate-900 text-white',
      textColor: 'group-hover:text-slate-900',
      description: 'Join real-time tech discussions & quick updates on social threads.',
    },
    {
      name: 'X (Twitter)',
      handle: '@ftds_hardware',
      url: 'https://x.com/ftds_hardware',
      icon: FaXTwitter,
      color: 'from-slate-900 to-slate-700',
      iconBg: 'bg-slate-950 text-white',
      textColor: 'group-hover:text-slate-900',
      description: 'Stay updated with quick announcements & technology tips.',
    },
    {
      name: 'Website',
      handle: 'www.ftds.in',
      url: 'https://www.ftds.in/',
      icon: FaGlobe,
      color: 'from-orange-500 to-amber-600',
      iconBg: 'bg-orange-500 text-white',
      textColor: 'group-hover:text-orange-600',
      description: 'Explore full hardware catalog, exclusive online deals & orders.',
    },
  ];

  const featuredServices = [
    {
      title: 'Shop Refurbished Laptops',
      description: 'Certified Dell, HP, Lenovo & Apple laptops with 12-month service warranty.',
      icon: Laptop,
      href: '/categories?search=laptop',
      badge: 'Popular',
    },
    {
      title: 'Buy Refurbished Desktops',
      description: 'High-performance CPU towers, All-in-Ones & commercial desktop workstations.',
      icon: Monitor,
      href: '/categories?search=desktop',
      badge: 'Best Value',
    },
    {
      title: 'Explore Printers & Solutions',
      description: 'Multi-function laser, inkjet & heavy-duty commercial printers.',
      icon: Printer,
      href: '/categories?search=printer',
      badge: 'Essential',
    },
    {
      title: 'Shop Computer Accessories',
      description: 'Keyboards, mice, monitors, SSD storage, RAM & essential peripherals.',
      icon: Keyboard,
      href: '/categories?search=accessories',
      badge: 'Accessories',
    },
    {
      title: 'Bulk Corporate IT Solutions',
      description: 'Custom B2B hardware packages, office setups & bulk laptop deals.',
      icon: Building2,
      href: 'https://wa.me/7277929292?text=Hi%20FTDS%20Hardware,%20I%20am%20interested%20in%20Bulk%20Corporate%20IT%20Solutions',
      badge: 'Enterprise',
      external: true,
    },
    {
      title: 'Student & Business Deals',
      description: 'Exclusive discounted bundles tailored for students, startups & professionals.',
      icon: GraduationCap,
      href: '/categories',
      badge: 'Special Offer',
    },
  ];

  const targetAudiences = [
    { name: 'Students', icon: GraduationCap },
    { name: 'Working Professionals', icon: Briefcase },
    { name: 'Businesses', icon: Building2 },
    { name: 'Startups', icon: Sparkles },
    { name: 'Corporate Offices', icon: Building2 },
    { name: 'Remote Workers', icon: Home },
    { name: 'Educational Institutions', icon: GraduationCap },
    { name: 'IT Teams', icon: Laptop },
    { name: 'SMEs', icon: Users },
    { name: 'Home Users', icon: Home },
  ];

  const businessHours = [
    { day: 'Monday', hours: '09:00 AM – 09:00 PM' },
    { day: 'Tuesday', hours: '09:00 AM – 09:00 PM' },
    { day: 'Wednesday', hours: '09:00 AM – 09:00 PM' },
    { day: 'Thursday', hours: '09:00 AM – 09:00 PM' },
    { day: 'Friday', hours: '09:00 AM – 09:00 PM' },
    { day: 'Saturday', hours: '09:00 AM – 09:00 PM' },
    { day: 'Sunday', hours: '09:00 AM – 09:00 PM' },
  ];

  const faqItems = [
    {
      question: 'What is FTDS Hardware?',
      answer:
        'FTDS Hardware is a trusted supplier of certified refurbished laptops, desktops, printers, monitors, and computer accessories in Chennai. We provide affordable, quality-tested IT hardware with warranty support for students, professionals, startups, businesses, and educational institutions.',
    },
    {
      question: 'Where is FTDS Hardware located?',
      answer:
        'FTDS Hardware is located at: New No.46, Old No.45, 1st Floor (North Side), Giri Road, T. Nagar, Chennai – 600017, Tamil Nadu, India.',
    },
    {
      question: 'Does FTDS Hardware provide warranty on refurbished products?',
      answer:
        'Yes. Most refurbished laptops, desktops, and other IT products from FTDS Hardware include a 12-month service warranty, ensuring quality, reliability, and peace of mind for every customer.',
    },
    {
      question: 'Can I contact FTDS Hardware through WhatsApp?',
      answer:
        'Yes. Customer support is available on WhatsApp at +91 7277929292 during business hours for product enquiries, pricing, and technical assistance.',
    },
    {
      question: 'What products and services does FTDS Hardware provide?',
      answerList: [
        'Certified Refurbished Laptops',
        'Refurbished Desktops',
        'Refurbished Printers',
        'Refurbished Monitors',
        'Computer Components',
        'Keyboard & Mouse',
        'IT Accessories',
        'Corporate Bulk Orders',
        'Student Laptop Solutions',
        'Business IT Solutions',
        'Technical Support',
        'Warranty-Backed Refurbished Products',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-orange-500 selection:text-white">
      {/* Background Subtle Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-orange-200/30 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 rounded-full bg-amber-200/30 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-20">

        {/* HERO SECTION */}
        <section className="text-center space-y-6 pt-4 w-full max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-semibold tracking-wide uppercase shadow-xs">
            <ShieldCheck size={16} className="text-orange-600" />
            Official FTDS Connect Hub
          </div>

          <h1 className="w-full max-w-4xl mx-auto text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-snug">
            FTDS Hardware – Certified Refurbished Laptops, Desktops, Printers &amp; IT Hardware in Chennai
          </h1>

          {/* Hero Content Separate Card Container */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md shadow-orange-500/5 border-t-4 border-t-orange-500 space-y-5 text-center max-w-3xl mx-auto transition-all">
            <div className="text-sm sm:text-base text-slate-600 space-y-3 leading-relaxed font-normal">
              <p className="font-semibold text-orange-600 text-base sm:text-lg">
                Welcome to the official FTDS Hardware Connect page.
              </p>
              <p>
                Whether you&apos;re looking for certified refurbished laptops, refurbished desktops, printers, computer accessories, business IT solutions, or affordable technology for your home, office, or educational institution, this page connects you with all of FTDS Hardware&apos;s official platforms in one convenient place.
              </p>
              <p className="text-slate-500 text-sm">
                Join thousands of satisfied customers who trust FTDS Hardware for quality-tested refurbished IT products, expert technical support, warranty-backed devices, and exceptional customer service. Stay connected through our website, social media channels, WhatsApp support, and visit our showroom in Chennai to explore the latest refurbished laptops, desktops, printers, monitors, and computer accessories.
              </p>
            </div>

            {/* Quick CTA Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 border-t border-slate-100">
              <a
                href="https://wa.me/7277929292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-md shadow-green-600/20"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/sU25vbuUk88m61HF7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-md shadow-orange-600/20"
              >
                <MapPin size={18} />
                Visit Chennai Showroom
              </a>
              <a
                href="tel:+917277929292"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm border border-slate-200 font-semibold shadow-xs transition-all"
              >
                <Phone size={16} className="text-orange-600" />
                +91 7277929292
              </a>
            </div>
          </div>
        </section>


        {/* CONNECT WITH FTDS HARDWARE (SOCIAL LINKS GRID) */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Connect With FTDS Hardware
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Stay connected through our official social media handles, website, map location, and direct messaging channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`} />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl shadow-xs ${item.iconBg}`}>
                        <Icon size={24} />
                      </div>
                      <ExternalLink size={18} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors flex items-center gap-2">
                        {item.name}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 mt-0.5">{item.handle}</p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-orange-600 group-hover:text-orange-700">
                    <span>Visit {item.name}</span>
                    <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>


        {/* FEATURED SERVICES */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              Explore Offerings
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Featured Services &amp; Product Offerings
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              High-quality certified refurbished hardware tailored for every budget, workflow, and organizational requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 group-hover:bg-orange-600 group-hover:text-white transition-all">
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    {service.external ? (
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        Enquire Corporate Bulk <ExternalLink size={16} />
                      </a>
                    ) : (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        Explore Category <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* LEAVE A GOOGLE REVIEW */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-100/50 border border-amber-200 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
              <Star size={14} className="fill-amber-500 text-amber-500" />
              Share Your Feedback
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Leave a Google Review
            </h2>

            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-amber-400 text-amber-500" />
              ))}
              <span className="text-slate-900 font-bold ml-2 text-base">5.0 Star Rated Experience</span>
            </div>

            <div className="space-y-3 text-slate-700 text-base leading-relaxed">
              <p className="font-semibold text-slate-900 text-lg">
                Your feedback helps us continue providing reliable and affordable IT solutions.
              </p>
              <p>
                If you&apos;ve purchased a refurbished laptop, desktop, printer, monitor, or computer accessories from FTDS Hardware, we&apos;d love to hear about your experience.
              </p>
              <p className="text-slate-600 text-sm">
                Your review helps students, professionals, businesses, startups, and organizations discover trusted refurbished IT products, quality service, and dependable technical support.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/sU25vbuUk88m61HF7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold transition-all shadow-md shadow-amber-500/20 transform hover:-translate-y-0.5"
              >
                <Star size={20} className="fill-slate-950" />
                Write a Review on Google
              </a>
            </div>
          </div>
        </section>



        {/* VISIT OUR STORE & BUSINESS HOURS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Store Location Info */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider">
                <MapPin size={14} /> Chennai Showroom
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Visit Our Store
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Experience premium refurbished IT hardware and personalized customer support at our Chennai showroom.
              </p>

              <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200/80 space-y-2">
                <h3 className="text-lg font-bold text-orange-600">FTDS Hardware</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  New No.46, Old No.45<br />
                  1st Floor (North Side)<br />
                  Giri Road, T. Nagar<br />
                  Chennai – 600017, Tamil Nadu, India
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Mail className="text-orange-600 shrink-0" size={20} />
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-semibold">Email Us</div>
                    <a href="mailto:ftdigitalsolution777@gmail.com" className="text-xs sm:text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors break-all">
                      ftdigitalsolution777@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Phone className="text-orange-600 shrink-0" size={20} />
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-semibold">Support Line</div>
                    <a href="tel:+917277929292" className="text-xs sm:text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors">
                      +91-7277929292
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/sU25vbuUk88m61HF7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all shadow-lg shadow-orange-600/20"
              >
                <MapPin size={18} />
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Business Hours Table */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <Clock size={14} /> Open 7 Days a Week
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Business Hours
              </h2>
              <p className="text-slate-600 text-sm">
                Our T. Nagar showroom and customer support team operate every day to serve your tech needs.
              </p>

              <div className="divide-y divide-slate-100 border-t border-b border-slate-100 my-4">
                {businessHours.map((bh, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-800">{bh.day}</span>
                    <span className="font-mono text-orange-600 font-bold">{bh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center gap-3 text-xs text-orange-800 font-medium">
              <CheckCircle2 size={20} className="shrink-0 text-orange-600" />
              <span>Walk-ins welcome anytime during store opening hours!</span>
            </div>
          </div>

        </section>





        {/* WHO CAN BENEFIT FROM FTDS HARDWARE? */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Who Can Benefit From FTDS Hardware?
            </h2>
            <p className="text-slate-600 text-base max-w-3xl mx-auto">
              Our products and services are designed for customers looking for reliable, affordable, and certified refurbished IT solutions.
            </p>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {targetAudiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-orange-400 text-center space-y-2 group transition-all shadow-xs hover:shadow-sm"
                >
                  <div className="w-10 h-10 mx-auto rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                    {audience.name}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Whether you&apos;re purchasing a certified refurbished laptop, upgrading your office with reliable desktops, equipping your business with cost-effective IT hardware, or looking for quality refurbished computers and accessories, FTDS Hardware provides thoroughly tested products, expert guidance, competitive pricing, warranty-backed solutions, and dependable technical support to help you choose the right technology for your needs.
            </p>
          </div>
        </section>


        {/* CALL TO ACTION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white text-center space-y-6 shadow-xl shadow-orange-600/15 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Upgrade Your Technology with FTDS Hardware Today
            </h2>
            <p className="text-orange-50 text-base sm:text-lg leading-relaxed font-medium">
              Follow FTDS Hardware across our official social media channels and become part of our growing community of satisfied customers.
            </p>
            <p className="text-orange-100 text-sm sm:text-base">
              Stay updated with the latest refurbished laptop offers, desktop deals, printer solutions, exclusive discounts, product launches, and technology tips.
            </p>
            <p className="text-white font-bold text-base pt-2">
              We look forward to helping you find reliable, affordable, and high-quality refurbished IT products backed by warranty and trusted customer support.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/categories"
                className="px-8 py-4 rounded-xl bg-white text-orange-700 font-extrabold text-base hover:bg-orange-50 transition-all shadow-md transform hover:-translate-y-0.5"
              >
                Browse Product Catalog
              </Link>
              <a
                href="https://wa.me/7277929292"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-slate-900 text-white font-extrabold text-base hover:bg-slate-950 transition-all shadow-md flex items-center gap-2"
              >
                <FaWhatsapp size={20} className="text-green-400" />
                Contact Sales Team
              </a>
            </div>
          </div>
        </section>


        {/* FAQ (AEO OPTIMIZED) */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider">
              AEO &amp; Search Optimized FAQs
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQ)
            </h3>
            <p className="text-slate-600 text-base">
              Quick answers about FTDS Hardware, warranty policies, locations, and IT services.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-slate-900 hover:text-orange-600 transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="p-2 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-700 text-base leading-relaxed border-t border-slate-100 pt-4 space-y-3">
                      {faq.answer && <p>{faq.answer}</p>}

                      {faq.answerList && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                          {faq.answerList.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                              <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
