"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.avif"
            alt="Main Street Grill Logo"
            width={150}
            height={150}
            className="rounded-full w-16 h-16 lg:w-24 lg:h-24 object-cover"
            draggable={false}
          />
          <div className="text-2xl lg:text-4xl font-bold text-red-900 drop-shadow-md">
            141 Main Street
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {["Home", "Menu", "Weekly Specials", "Catering", "Events", "Contact"].map((item) => (
            <Link
              key={item}
              href="/"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
            >
              {item}
            </Link>
          ))}
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
          {["Home", "Menu", "Weekly Specials", "Catering", "Events", "Contact"].map((item) => (
            <Link
              key={item}
              href="/"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
