"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <nav
  className="bg-gray-100 px-6 py-4 shadow-md relative"
  style={{
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
  }}
>

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.avif"
            alt="Main Street Grill Logo"
            width={150}
            height={150}
            className="m-rounded-full w-16 h-16 lg:w-24 lg:h-24 object-cover"
            draggable={false}
          />
          <div className="text-2xl lg:text-4xl font-bold text-red-900 drop-shadow-md">
            141 Main Street
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {["Home", "Menu", "Weekly Specials", "Catering", "Events", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href="/"
                className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
              >
                {item}
              </Link>
            )
          )}
          <Link
            href="https://order.online/store/main-street-deli-restaurant-&-catering-agawam-25125723/?hideModal=true&pickup=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
          >
            Order Online
          </Link>
        </div>

        {/* Burger icon on smaller than lg */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 hover:text-red-600 focus:outline-none"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Dropdown Links on mobile & tablet */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4 items-center">
          {["Home", "Menu", "Weekly Specials", "Catering", "Events", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href="/"
                className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}
          <Link
            href="https://order.online/store/main-street-deli-restaurant-&-catering-agawam-25125723/?hideModal=true&pickup=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Order Online
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

{/* <Link
  href="https://order.online/store/main-street-deli-restaurant-&-catering-agawam-25125723/?hideModal=true&pickup=true"
  target="_blank"
  rel="noopener noreferrer"
>
  Order Online
</Link>; */}
