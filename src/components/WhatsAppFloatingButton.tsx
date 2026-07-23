"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatingButton({
  phone = "917277929292",
  message = `Hello! I am interested in your services.`,
}: {
  phone?: string;
  message?: string;
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-16 md:bottom-6 left-4 z-[100] group"
    >
      <div className="relative flex items-center">
        <div
          className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center 
          rounded-full bg-gradient-to-br from-[#25D366] to-[#027e1d] 
          backdrop-blur-xl border-2 border-[#25D366] 
          shadow-[0_0_20px_rgba(37,211,102,0.3)] 
          transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
        >
          <FaWhatsapp className="h-7 w-7 md:h-8 md:w-8 fill-white drop-shadow-md transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>
    </Link>
  );
}