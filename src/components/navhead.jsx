'use client';

import { useState } from 'react';
import Image from 'next/image';
// import { FaAngleDown } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaAngleDown } from 'react-icons/fa';

export default function TopNav() {
    const [showLang, setShowLang] = useState(false);
    const [showCurr, setShowCurr] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className="bg-orange-500  border-blue-50 w-full">
            <div className="container mx-auto flex justify-between items-center px-4 py-2 text-white text-sm">
                {/* Left - Language & Currency */}
                <div className="flex items-center gap-4">
                    {/* Social Media Icons */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-300 transition-colors"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-300 transition-colors"
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-300 transition-colors"
                        >
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className='text-center font-bold'>ENJOY FAST & FREE SHIPPING STOREWIDE!</h5>
                </div>

                {/* Right - Quick Links */}
                <div className="relative">
                    <button
                        onClick={() => setShowLinks(!showLinks)}
                        className="flex items-center gap-1 hover:text-yellow-400"
                    >
                        Quick Link <FaAngleDown />
                    </button>
                    {showLinks && (
                        <ul className="absolute right-0 mt-2 bg-white text-black shadow-md rounded z-10 min-w-[200px]">
                            <li><a href="/register" className="block px-4 py-2 hover:bg-gray-100">Registration</a></li>
                            <li><a href="/order" className="block px-4 py-2 hover:bg-gray-100">Track Order</a></li>
                            <li><a href="/contact" className="block px-4 py-2 hover:bg-gray-100">Store Location</a></li>
                            <li><a href="/wishlist" className="block px-4 py-2 hover:bg-gray-100">Wishlist</a></li>
                            <li><a href="/checkout" className="block px-4 py-2 hover:bg-gray-100">Checkout</a></li>
                            <li><a href="/blogs" className="block px-4 py-2 hover:bg-gray-100">Blogs</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}
