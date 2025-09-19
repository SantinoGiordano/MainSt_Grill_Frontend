"use client";

import Link from "next/link";
import buttonsHomePage from "@/Data/buttonsHomePage";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>141 Main Grill</title>
        <meta
          name="description"
          content="Main Street Grill in Agawam, MA. Open Monday-Saturday."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>

      <div className="bg-gray-50 min-h-screen flex flex-col">
        {/* HERO SECTION */}
        <div className="relative w-full h-[60vh] md:h-[80vh]">
          <Image
            src="/centerStringSandwitch.jpg"
            alt="Center String Sandwich"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center fontFamily-playfair px-6">
              <p className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                Welcome to 141 Main Grill
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-lg md:text-xl text-gray-100">
                  Open Monday - Saturday · 10AM - 6PM
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  Sundays Closed at 3
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center py-12 px-6">
          <h2 className="text-2xl md:text-3xl font-bold fontFamily-playfair text-gray-800 mb-8">
            Explore Our Grill
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
            {buttonsHomePage.length > 0 ? (
              buttonsHomePage.map((item, index) => (
                <Link
                  key={index}
                  href={item.address}
                  aria-label={`Navigate to ${item.name}`}
                  className="shadow-lg bg-red-950 text-white text-lg font-semibold py-6 rounded-xl flex items-center justify-center hover:bg-red-800 hover:scale-105 transform transition duration-300"
                >
                  {item.name}
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No buttons available.
              </p>
            )}
          </div>
        </div>

        {/* FOOTER SPACER */}
        <div className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} 141 Main Grill · All Rights Reserved
        </div>
      </div>
    </>
  );
}
