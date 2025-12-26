'use client';
import Link from 'next/link';
import { Phone } from "lucide-react";
import Visa from '../../public/assets/visa.svg'
import Paypal from '../../public/assets/paypal.svg'
import MasterCard from '../../public/assets/mastercard.svg'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaYoutube, FaInstagram , FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {

  return (
    <footer className="bg-[#f8f5f5] text-slate-500 mt-10 pt-10 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Information */}
          <div>
            <h5 className="font-medium text-slate-800 mb-5">Information</h5>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/about" className="hover:text-orange-500 transition-all">About Us</Link></li>
              <li><Link href="/privacy_policy" className="hover:text-orange-500 transition-all">Privacy Policy</Link></li>
              <li><Link href="/delivery_policy" className="hover:text-orange-500 transition-all">Delivery Policy</Link></li>
              <li><Link href="/refund_and_cancellation_policy" className="hover:text-orange-500 transition-all">Refund & Cancellation Policy</Link></li>
              <li><Link href="/shipping_policy" className="hover:text-orange-500 transition-all">Shipping Policy</Link></li>
              <li><Link href="/terms_and_conditions" className="hover:text-orange-500 transition-all">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h5 className="font-medium text-slate-800 mb-5">My Account</h5>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/profile" className="hover:text-orange-500 transition-all">My Account</a></li>
              <li><a href="/profile" className="hover:text-orange-500 transition-all">Order History</a></li>
              <li><a href="/profile" className="hover:text-orange-500 transition-all">Wish List</a></li>
              {/* <li><a href="#" className="hover:text-orange-500 transition-all">Newsletter</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-all">Returns</a></li> */}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h5 className="font-medium text-slate-800 mb-5">Store Information</h5>
            <ul className="space-y-3 text-gray-700">
              {/* Address */}
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-lg mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Giri+Road+T+Nagar+Chennai+600017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600  font-bold transition"
                >
                  New no.46, Old no.45,<br />
                  1st Floor (North side),<br />
                  Giri Road, T.Nagar,<br />
                  Chennai – 600017
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <a
                  href="tel:+917277929292"
                  className=" hover:text-blue-600 font-bold transition"
                >
                  +91-7277929292
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <a
                  href="mailto:ftdigitalsolution777@gmail.com"
                  className="hover:text-blue-600 font-bold transition"
                >
                  ftdigitalsolution777@gmail.com
                </a>
              </li>
            </ul>

          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-medium text-slate-800 mb-5">Stay Updated with FTDS Hardware</h5>
            <p className="text-gray-700 mb-4">
              Subscribe to our mailing list and get the latest updates on Refurbished laptops, exclusive offers, and special deals from FTDS Hardware Shop.
            </p>

            <form className="relative">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full h-10 px-4 pr-14 rounded text-black"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-10 px-4 bg-orange-500 text-white rounded-r hover:bg-orange-600 text-xs"
              >
                Subscribe
              </button>
            </form>
            <div className="flex justify-center md:justify-start gap-4 py-6 text-gray-500 text-lg">
              <a href="https://www.facebook.com/ftdshardware" target="_blank" className="bg-gray-200 border border-gray-400 rounded-full p-3 flex items-center justify-center hover:bg-gray-300 hover:text-red-600 transition"><FaFacebookF /></a>

              <a href="https://www.youtube.com/@ftdshardware" target="_blank" className="bg-gray-200 border border-gray-400 rounded-full p-3 flex items-center justify-center hover:bg-gray-300 hover:text-red-600 transition"><FaYoutube /></a>

              <a href="https://www.instagram.com/p/DK6HiCwBZSm/?utm_source=ig_web_copy_link" target="_blank" className="bg-gray-200 border border-gray-400 rounded-full p-3 flex items-center justify-center hover:bg-gray-300 hover:text-red-600 transition"><FaInstagram /></a>
              <a
                href="https://x.com/ftdshardware"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 border border-gray-400 rounded-full p-3 flex items-center justify-center hover:bg-gray-300 hover:text-red-600 transition"
              >
                <FaXTwitter   />
              </a>

            </div>
          </div>
        </div>

        {/* Social Links / Payment / Apps */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-8 gap-4 md:gap-8 text-center md:text-left">

          {/* Social Links */}
          <div>
            <p className="text-slate-800 mb-4 text-sm font-semibold"> &copy; 2025 <Link target='_blank' href='https://ftdigitalsolutions.in'>Ft Digital Solutions ( Agency ).</Link> All rights Reserved</p>

          </div>

          {/* App Download (Uncomment if needed) */}
          {/* 
      <div>
        <h3 className="text-slate-800 mb-4 text-base font-semibold">Download Apps</h3>
        <div className="flex justify-center gap-4">
          <img src="/apps/app1.png" alt="app1" className="h-10" />
          <img src="/apps/app2.png" alt="app2" className="h-10" />
          <img src="/apps/app3.png" alt="app3" className="h-10" />
        </div>
      </div>
      */}

          {/* Payment Methods */}
          <div >

            <div className="flex justify-center  mb-20 md:mb-4 md:justify-start gap-3  transition-all flex-wrap">
              <img
                src='/assets/visa.svg'
                alt="visa"
                className="h-12 object-contain"
              />
              <img
                src='/assets/mastercard.svg'
                alt="mastercard"
                className="h-12 object-contain"
              />
              <img
                src='/assets/paypal.svg'
                alt="paypal"
                className="h-12 object-contain"
              />

            </div>
          </div>
        </div>

      </div>
      <Link
        href="tel:+917277929292"
        className="fixed bottom-32 md:bottom-24 right-4 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-xl border-2 border-blue-400 transition-transform duration-300  hover:scale-110 hover:shadow-2xl"
        aria-label="Call Us"
      >
        {/* Pulsing Ring */}
        {/* <span className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500 opacity-75 animate-ping"></span> */}

        {/* Call Icon */}
        <Phone size={22} className="sm:size-[26px] relative z-10" />
      </Link>


      {/* Footer Bottom */}
      {/* <div className="mt-8 border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        <p>
          &copy; 2025 FTDS Hardware | All rights Reserved | Designed by <Link target='_blank' href='https://ftdigitalsolutions.in'>Ft Digital Solutions</Link>
        </p>
      </div> */}
    </footer>
  );
}
