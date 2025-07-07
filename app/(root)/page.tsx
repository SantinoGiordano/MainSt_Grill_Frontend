"use client";

import Link from "next/link";
import buttonsHomePage from "@/Data/buttonsHomePage";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Main Street Grill</title>
        <meta
          name="description"
          content="Main Street Grill in Agawam, MA. Open Monday-Saturday."
        ></meta>
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
      <div
        className="relative h-[75vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("/centerStringSandwitch.jpg")' }}
      >
        <div
          style={{ fontFamily: "Playfair Display, serif" }}
          className="absolute inset-0 flex items-center justify-center fontFamily-playfair"
        >
          <div className="flex flex-col items-center justify-center bg-red-950 bg-opacity-50 p-6 rounded-md shadow-lg">
            <p className="text-2xl md:text-3xl font-bold text-black bg-white px-6 py-4 rounded tracking-wide leading-relaxed">
              Open Monday - Saturday
            </p>
            <p className="text-white text-xl md:text-2xl mt-2 tracking-wide leading-relaxed">
              10AM - 6PM
            </p>
            <p className="text-lg text-white md:text-xl mt-1 tracking-wide leading-relaxed">
              Temporarily Closed Sundays
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-red-950 my-8 ml-10 mr-10" />
      <div className="flex flex-wrap justify-center gap-4 mt-8 px-4 pt-10">
        {buttonsHomePage.length > 0 ? (
          buttonsHomePage.map((item, index) => (
            <Link
              key={index}
              href={item.address}
               aria-label={`Navigate to ${item.name}`}
              className="shadow-2xl w-48 h-20 flex items-center justify-center bg-red-950 text-white text-xl px-6 py-3 rounded  hover:bg-red-800 transition duration-300 text-center"
            >
              {item.name}
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No buttons available.</p>
        )}
      </div>
      <div className="p-10"></div>
    </>
  );
}
