'use client';

import { useCartItem } from '@/context/CartItemContext';
import { useProducts } from '@/context/ProductsContext';
import { useUser } from '@/context/UserContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import {
  HiOutlineUser,
  HiOutlineSearch,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineShoppingCart,
  HiChevronDown,
} from 'react-icons/hi';
import { slugConvert } from '../../lib/utils';

export default function Navbar() {
  const { products } = useProducts();
  const finalProducts = products.data
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter()
  const { cartItem } = useCartItem();
  const { user, setUser } = useUser();
  const pathname = usePathname(); // current URL path
  const userName = user?.data?.name || "";
  const dropdownRef = useRef(null);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [results, setResults] = useState({
    products: [],
    related: [],
  });


  // const finalProducts = products?.data;

  useEffect(() => {
    // Close dropdown when clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => setIsDropdownOpen(!isDropdownOpen);


  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.clear();
      localStorage.removeItem("email");
      localStorage.removeItem("userName");
    }
    window.location.reload()
    handleDropdownClick()
    router.push('/');
  };

  useEffect(() => {
    if (!isOpen) return;

    const tid = setTimeout(() => {
      if (query.trim().length > 2) {
        fetchSearchResults(query.trim());
      } else {
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(tid);
  }, [query, isOpen]);

  // fetchSearchResults
  const fetchSearchResults = (term) => {
    if (!products?.data) return;

    const lower = term.toLowerCase();
    const activeProducts = finalProducts?.filter((p) => {
      return String(p?.status).toLowerCase() === "true";
    });

    const titleMatches = activeProducts.filter((p) =>
      p.name?.toLowerCase().includes(lower)
    );

    const related = activeProducts
      .filter(
        (p) =>
          !titleMatches.includes(p) &&
          (p.description?.toLowerCase().includes(lower) ||
            p.category_name?.toLowerCase().includes(lower))
      )
      .slice(0, 5);

    setResults({ products: titleMatches, related: related });
    setShowDropdown(true);
  };

  const isActive = (href) =>
    pathname === href
      ? "text-orange-500 font-semibold border-b-2 border-orange-500"
      : "hover:text-orange-500 transition";

  return (
    <header className="border-b border-gray-200 bg-white z-50 relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between border border-orange-400 rounded-2xl mx-4 mt-4 md:mx-10 px-4 md:px-10 py-4 md:py-2">
        {/* Logo */}
        <div onClick={() => router.push('/')} className="relative w-[130px] h-[50px] sm:w-[150px] sm:h-[65px] cursor-pointer">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 130px, 150px"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 text-base font-medium">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/shop" className={isActive("/shop")}>
            Shop
          </Link>
          <Link href="/categories" className={isActive("/categories")}>
            Categories
          </Link>
          <Link href="/about" className={isActive("/about")}>
            About Us
          </Link>
          <Link href="/contact" className={isActive("/contact")}>
            Contact Us
          </Link>
          <Link href="/blog" className={isActive("/blog")}>
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-orange-700 z-50"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <HiOutlineMenu />
        </button>

        {/* Desktop Contact Info */}
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
          <span>24-hour response</span>
          <span className="font-semibold text-gray-700">| +91-7277929292</span>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${isMobileMenuOpen ? 'bg-black/40' : 'pointer-events-none opacity-0'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4">
          <Image src="/FT-DS-hardware-logo.webp" alt="logo" width={100} height={40} />
          <button
            className="text-2xl text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <HiOutlineX />
          </button>
        </div>


        {/* Mobile Nav Items */}
        <div className="flex flex-col p-4 gap-4 text-gray-700 font-medium">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/")}>
            Home
          </Link>
          <Link href="/categories" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/categories")}>
            Categories
          </Link>
          <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/shop")}>
            Shop
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/about")}>
            About Us
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/contact")}>
            Contact Us
          </Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/blog")}>
            Blog
          </Link>
        </div>

        {/* Mobile Account & Cart */}
        {/* <div className="flex md:hidden flex-col gap-4 px-4 mt-4 border-t pt-4">
          <span className="text-gray-700 font-semibold">My Account</span>

          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
          >
            <HiOutlineUser className="text-lg" />
            Login
          </Link>

          <Link
            href="/profile"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
          >
            <HiOutlineUser className="text-lg" />
            Profile
          </Link>

          <Link
            href="/forgot-password"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
          >
            <HiOutlineUser className="text-lg" />
            Forgot Password
          </Link>

          <Link
            href="/cart"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-between text-gray-700 hover:text-orange-500"
          >
            <div className="flex items-center gap-2">
              <HiOutlineShoppingCart className="text-lg" />
              Cart
            </div>
            {
              cartItem?.data?.length > 0 &&
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{cartItem?.data?.length}</span>
            }
          </Link>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-4 mx-4 md:mx-10 px-0 md:px-2 py-2">
        {/* Left Controls */}
        <div className="w-full md:w-3/4 flex flex-col sm:flex-row flex-wrap items-center gap-3">
          {/* Categories & Calendar - hidden on mobile */}
          <div className="hidden sm:flex items-center gap-3">
            <button onClick={() => router.push('/categories')} className="flex items-center gap-2 px-4 py-2 text-sm border border-orange-400 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white transition">
              Categories
            </button>

            <button className="p-3 border border-orange-500 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white transition">
              <FaRegCalendarAlt />
            </button>
          </div>

          {/* Search Input */}
          <div className="w-full  md:w-[500px] flex items-center border rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-700">
            <HiOutlineSearch className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search something here..."
              className="flex-1 bg-transparent outline-none"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true); // <-- important: open search
              }}
            />

          </div>


        </div>

        {/* Right Controls (Desktop only) */}
        <div className="w-full md:w-1/4 hidden md:flex justify-end items-center gap-4 relative">
          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            {userName ? <button
              onClick={handleDropdownClick}
              className="flex items-center px-4 py-2 text-sm border border-orange-400 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              <HiOutlineUser className="mr-1" />
              {userName ? userName.split(" ")[0] : <Link onClick={() => setIsDropdownOpen(false)} href="/login">Login</Link>}
              <HiChevronDown className="ml-1" />
            </button>
              :
              <button
                onClick={() => router.push('/login')}
                className="flex items-center px-4 py-2 text-sm border border-orange-400 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                Login
              </button>
            }


            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow z-20 text-sm">
                {userName ? (
                  <>
                    <Link href="/profile?tab=AccountInfo" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-orange-100 text-gray-700">
                      Profile
                    </Link>
                    <Link href="/profile?tab=Address" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-orange-100 text-gray-700">
                      Address
                    </Link>
                    <Link href="/profile?tab=Orders" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-orange-100 text-gray-700">
                      Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white text-gray-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  // <Link href="/login" className="block px-4 py-2 hover:bg-orange-100 text-gray-700">
                  //   Login
                  // </Link>
                  null
                )}
              </div>
            )}
          </div>

          {/* Cart Button */}
          <button onClick={() => router.push('/cart')} className="relative px-4 py-3 text-orange-500 border border-orange-400 rounded-md hover:bg-orange-500 hover:text-white transition">
            <HiOutlineShoppingCart className="text-lg" />
            {
              cartItem?.data?.length > 0 &&
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItem?.data?.length}
              </span>
            }
          </button>
        </div>
      </div>

      {isOpen && showDropdown && (
        <div
          className="absolute top-full left-0 right-0 md:left-[220px] md:right-auto z-50 bg-white border shadow-md rounded-md 
               max-h-[300px] w-full md:max-w-[500px] overflow-y-auto text-sm animate-in fade-in slide-in-from-top-2"
          role="listbox"
        >
          {results.products.length > 0 ? (
            <>
              <p className="px-4 py-2 font-bold text-gray-500 border-b">PRODUCTS</p>

              {results.products.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setShowDropdown(false);
                    setQuery('');
                    setIsOpen(false);
                    router.push(`/product/${slugConvert(item?.name)}`);
                  }}
                  className="flex gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  role="option"
                >
                  {item.image_urls?.[0] && (
                    <Image
                      src={item.image_urls[0]}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded object-cover"
                    />
                  )}

                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-red-700">₹{Number(item.price)}</p>
                  </div>
                </div>
              ))}

              {/* RELATED PRODUCTS */}
              {results.related.length > 0 && (
                <>
                  <p className="px-4 py-2 font-bold text-gray-500 border-b">RELATED</p>

                  {results.related.map((item, i) => (
                    <div
                      key={`r-${i}`}
                      onClick={() => {
                        setShowDropdown(false);
                        setQuery('');
                        setIsOpen(false);
                        router.push(`/product/${slugConvert(item?.name)}`);
                      }}
                      className="flex gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      role="option"
                    >
                      {item.image_urls?.[0] && (
                        <Image
                          src={item.image_urls[0]}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded object-cover"
                        />
                      )}

                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-red-700">₹{Number(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          ) : (
            <div className="px-4 py-6 text-center text-gray-500">
              No products found
              {query && (
                <>
                  &nbsp;for&nbsp;
                  <span className="font-semibold">“{query}”</span>.
                </>
              )}
              <br />
              Please try another keyword.
            </div>
          )}
        </div>
      )}

    </header>
  );
}
