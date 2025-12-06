'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AiFillHome,
  AiOutlinePlayCircle,
  AiOutlineAppstore,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

const navItems = [
  { name: 'Home', icon: AiFillHome, href: '/' },
// { name: 'Play', icon: AiOutlinePlayCircle, href: '/play' },
  { name: 'Shop', icon: AiOutlineAppstore, href: '/shop' },
  { name: 'Account', icon: AiOutlineUser, href: '/profile' },
  { name: 'Cart', icon: AiOutlineShoppingCart, href: '/cart' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ name, icon: Icon, href }) => {
          const isActive = pathname === href;
          return (
            <Link key={name} href={href} className="flex flex-col items-center text-xs">
              <Icon className={`text-2xl ${isActive ? 'text-orange-600' : 'text-gray-600'}`} />
              <span className={isActive ? 'text-orange-600 font-medium' : 'text-gray-600'}>
                {name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
