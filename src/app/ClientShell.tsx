"use client";

import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "../components/Header";
import Navbar from "../components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ScrollToTop from "@/components/ScrollToTop";
import Loading from "@/components/Loading";

import { VendorProvider } from "@/context/VendorContext";
import { CategoriesProvider } from "@/context/CategoriesContext";
import { ProductsProvider } from "@/context/ProductsContext";
import { UserProvider } from "@/context/UserContext";
import { CartItemProvider } from "@/context/CartItemContext";
import { PolicyProvider } from "@/context/PolicyContext";

import { Suspense } from "react";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  // Use a stable QueryClient
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const goingDown = current > lastScrollY.current;
            // Hide when scrolling down past 100px, show when scrolling up
          if (goingDown && current > 100 && showHeader) {
            setShowHeader(false);
          } else if (!goingDown && !showHeader) {
            setShowHeader(true);
          }
          lastScrollY.current = current;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showHeader]);

  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClientRef.current}>
        <VendorProvider>
          <PolicyProvider>
            <CategoriesProvider>
              <ProductsProvider>
                <UserProvider>
                  <CartItemProvider>
                    <div
                    //   className={`fixed w-full z-[999] transition-transform duration-300 ${
                    //     showHeader ? "translate-y-0" : "-translate-y-full"
                    //   }`}
                    >
                      <Navbar />
                    </div>
                    {/* Add padding to account for fixed header height */}
                    <main className="">{children}</main>
                    <Footer />
                    <BottomNav />
                    <ScrollToTop />
                  </CartItemProvider>
                </UserProvider>
              </ProductsProvider>
            </CategoriesProvider>
          </PolicyProvider>
        </VendorProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
