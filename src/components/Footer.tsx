'use client';
import Link from 'next/link';
import { Phone, ArrowRight, ChevronRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 mt-16 pt-16 pb-8 border-t-4 border-orange-500 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[100%] rounded-full bg-orange-600/5 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[80%] rounded-full bg-blue-600/5 blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Information */}
          <div>
            <h5 className="font-bold text-white mb-6 tracking-wide uppercase text-sm border-b border-slate-800 pb-3">Information</h5>
            <ul className="space-y-3">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Privacy Policy', link: '/privacy_policy' },
                { name: 'Delivery Policy', link: '/delivery_policy' },
                { name: 'Refund & Cancellation Policy', link: '/refund_and_cancellation_policy' },
                { name: 'Shipping Policy', link: '/shipping_policy' },
                { name: 'Terms & Conditions', link: '/terms_and_conditions' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.link} className="group flex items-center gap-2 hover:text-orange-500 transition-colors">
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-orange-500 transition-transform group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h5 className="font-bold text-white mb-6 tracking-wide uppercase text-sm border-b border-slate-800 pb-3">My Account</h5>
            <ul className="space-y-3">
              {[
                { name: 'My Account', link: '/profile' },
                { name: 'Order History', link: '/profile' },
                { name: 'Wish List', link: '/profile' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.link} className="group flex items-center gap-2 hover:text-orange-500 transition-colors">
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-orange-500 transition-transform group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h5 className="font-bold text-white mb-6 tracking-wide uppercase text-sm border-b border-slate-800 pb-3">Store Information</h5>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50 text-orange-500 shrink-0">
                  <FaMapMarkerAlt className="text-base" />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Giri+Road+T+Nagar+Chennai+600017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors text-sm leading-relaxed"
                >
                  New no.46, Old no.45,<br />
                  1st Floor (North side),<br />
                  Giri Road, T.Nagar,<br />
                  Chennai – 600017
                </a>
              </li>

              <li className="flex items-center gap-4">
                <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50 text-orange-500 shrink-0">
                  <FaPhoneAlt className="text-base" />
                </div>
                <a
                  href="tel:+917277929292"
                  className="hover:text-orange-400 transition-colors font-medium text-sm"
                >
                  +91-7277929292
                </a>
              </li>

              <li className="flex items-center gap-4">
                <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50 text-orange-500 shrink-0">
                  <FaEnvelope className="text-base" />
                </div>
                <a
                  href="mailto:ftdigitalsolution777@gmail.com"
                  className="hover:text-orange-400 transition-colors font-medium text-sm break-all"
                >
                  ftdigitalsolution777@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-bold text-white mb-6 tracking-wide uppercase text-sm border-b border-slate-800 pb-3">Stay Updated</h5>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Subscribe to our mailing list and get the latest updates on refurbished laptops, exclusive offers, and special deals.
            </p>

            <form className="relative flex items-center mb-8 bg-slate-900 rounded-lg overflow-hidden border border-slate-700 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500/50 transition-all shadow-inner">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full h-12 px-4 py-2 text-sm text-white bg-transparent outline-none placeholder-slate-500"
                required
              />
              <button
                type="submit"
                className="h-full px-5 py-3 bg-orange-600 text-white hover:bg-orange-500 transition-colors flex items-center justify-center shrink-0"
              >
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="flex gap-3">
              <a href="https://www.facebook.com/ftdshardware" target="_blank" rel="noopener noreferrer" className="bg-slate-800 border border-slate-700 text-slate-300 rounded-lg p-3 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all shadow-sm">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.youtube.com/@ftdshardware" target="_blank" rel="noopener noreferrer" className="bg-slate-800 border border-slate-700 text-slate-300 rounded-lg p-3 hover:bg-red-600 hover:text-white hover:border-red-600 hover:-translate-y-1 transition-all shadow-sm">
                <FaYoutube size={18} />
              </a>
              <a href="https://www.instagram.com/ftds_hardware" target="_blank" rel="noopener noreferrer" className="bg-slate-800 border border-slate-700 text-slate-300 rounded-lg p-3 hover:bg-pink-600 hover:text-white hover:border-pink-600 hover:-translate-y-1 transition-all shadow-sm">
                <FaInstagram size={18} />
              </a>
              <a href="https://x.com/ftdshardware" target="_blank" rel="noopener noreferrer" className="bg-slate-800 border border-slate-700 text-slate-300 rounded-lg p-3 hover:bg-black hover:text-white hover:border-black hover:-translate-y-1 transition-all shadow-sm">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Links / Payment */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8 gap-6 text-center md:text-left">
          {/* Copyright */}
          <div className="pb-4 md:pb-0">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} <a target='_blank' rel="noopener noreferrer" href='https://ftdigitalsolutions.in' className="font-semibold text-slate-300 hover:text-orange-500 transition-colors">FT Digital Solutions</a>. All rights reserved.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center items-center gap-3 pb-24 md:pb-0">
            <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center w-16 h-10 hover:-translate-y-1 transition-transform">
              <Image src='/assets/visa.svg' alt="Visa" className="h-full w-full object-contain" width={40} height={24} />
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center w-16 h-10 hover:-translate-y-1 transition-transform">
              <Image src='/assets/mastercard.svg' alt="Mastercard" className="h-full w-full object-contain" width={40} height={24} />
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center w-16 h-10 hover:-translate-y-1 transition-transform">
              <Image src='/assets/paypal.svg' alt="PayPal" className="h-full w-full object-contain" width={40} height={24} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Phone Button */}
      <Link
        href="tel:+917277929292"
        className="fixed bottom-[4.5rem] md:bottom-24 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border-2 border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
        aria-label="Call Us"
      >
        <Phone size={24} className="relative z-10 animate-[pulse_2s_ease-in-out_infinite]" />
      </Link>
    </footer>
  );
}
