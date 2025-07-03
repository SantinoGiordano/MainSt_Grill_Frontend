"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Head from "next/head";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav
        className="bg-gray-200 w-screen px-6 py-4 shadow-md  absolute z-100"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.avif"
              alt="Main Street Grill Logo"
              width={150}
              height={150}
              className="m-2 rounded-full w-16 h-16 lg:w-24 lg:h-24 object-cover"
              draggable={false}
            />
            <div
              className="text-2xl lg:text-4xl font-bold text-red-900 drop-shadow-md"
              style={{ fontFamily: "" }}
           >
              141 Main Street
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
            >
              Menu
            </Link>
            <Link
              href="/weekly-special"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
            >
              Weekly Specail
            </Link>
            <Link
              href="/catering"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
            >
              Catering
            </Link>
            <Link
              href="/event"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
            >
              Contact
            </Link>

            <Link
              href="https://order.online/store/main-street-deli-restaurant-&-catering-agawam-25125723/?hideModal=true&pickup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
            >
              Order Online
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-red-600 focus:outline-none"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="p-10 lg:hidden mt-4 flex flex-col gap-4 items-center">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors "
            >
              Menu
            </Link>
            <Link
              href="/weekly-special"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors "
            >
              Weekly Specail
            </Link>
            <Link
              href="/catering"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors "
            >
              Catering
            </Link>
            <Link
              href="/event"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors "
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors "
            >
              Contact
            </Link>
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
    </>
  );
};

export default Nav;
