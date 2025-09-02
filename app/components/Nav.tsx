"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  const navLinks: [string, string, boolean?][] = [
    ["Home", "/"],
    ["Menu", "/menu"],
    ["Weekly Special", "/weeklySpecial"],
    ["Catering", "/catering"],
    ["Events", "/event"],
    ["Contact", "/contact"],
    [
      "Order Online",
      "https://order.online/store/main-street-deli-restaurant-&-catering-agawam-25125723/?hideModal=true&pickup=true",
      true,
    ],
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>

      <nav
        className="bg-gray-200 w-screen px-6 py-4 shadow-md absolute z-100"
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
            <div className="text-2xl lg:text-4xl font-bold text-red-900 drop-shadow-md">
              141 Main Street
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(([label, href, external]) =>
              external ? (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
                >
                  {label}
                </Link>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600"
                >
                  {label}
                </Link>
              )
            )}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-red-600 focus:outline-none"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden flex flex-col items-center gap-4 mt-4"
            >
              {navLinks.map(([label, href, external]) =>
                external ? (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    className=" text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                  
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Nav;
