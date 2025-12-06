"use client";

import Link from "next/link";

export default function WhatsAppFloatingButton({
  phone = "9172779 29292",
  message = "Welcome to FTDS Hardware – How can we help you today?",
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
        {/* WhatsApp Button */}
        <div className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center 
                        rounded-full bg-gradient-to-br from-[#25D366] to-[#027e1d] 
                        backdrop-blur-xl border-2 border-[#25D366] 
                        shadow-[0_0_20px_rgba(37,211,102,0.3)] 
                        transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-7 w-7 md:h-8 md:w-8 fill-white drop-shadow-md transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M19.11 17.02c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.19.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.05-.22-.53-.45-.46-.62-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.93 4.67 4.11 2.73 1.18 2.73.78 3.23.74.5-.04 1.6-.65 1.83-1.28.23-.64.23-1.18.16-1.28-.07-.11-.23-.16-.5-.29z" />
            <path d="M15.99 4.01C9.93 4.01 5 8.94 5 14.99c0 2.37.75 4.56 2.02 6.36L6 28l6.83-1.79c1.72.94 3.7 1.48 5.82 1.48 6.06 0 11-4.93 11-10.99s-4.94-10.69-10.66-10.69zm.02 19.57c-1.98 0-3.81-.58-5.34-1.56l-.38-.24-4.06 1.07 1.09-3.96-.25-.39A8.92 8.92 0 0 1 7.1 15c0-4.95 4.02-8.97 8.97-8.97 4.95 0 8.97 4.02 8.97 8.97s-4.04 9.55-9.03 9.55z" />
          </svg>

          {/* Glow ring */}
          {/* <span className="absolute inset-0 rounded-full animate-ping border-2 border-[#25D366]/40" /> */}
        </div>

        {/* Tooltip (Desktop Hover Only) */}
        {/* <span className="ml-3 hidden rounded-lg bg-[#25D366] px-3 py-1 text-sm font-medium text-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 md:block">
          Chat with us
        </span> */}
      </div>
    </Link>
  );
}
