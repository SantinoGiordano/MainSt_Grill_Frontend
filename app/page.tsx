"use client";

import { useState } from "react";
import Nav from "./components/Nav";
import Image from "next/image";
import Link from "next/link";
import buttonsHomePage from "@/Data/buttonsHomePage";
export default function Home() {

// const [items, setItems] = useState([""])
  
  return (
    <>
      <div
        className="relative h-[75vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("/sandwitch.jpg")' }}
      >
        <Nav/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-gray-100 bg-opacity-50 p-6 rounded-md shadow-lg">
            <p className="text-2xl md:text-3xl font-bold text-white bg-red-950 px-6 py-4 rounded tracking-wide leading-relaxed">
              Open Monday - Saturday
            </p>
            <p className="text-xl md:text-2xl mt-2 tracking-wide leading-relaxed">
              10AM - 6PM
            </p>
            <p className="text-lg md:text-xl mt-1 tracking-wide leading-relaxed">
              Temporarily Closed Sundays
            </p>
          </div>
        </div>
      </div>
    <hr className="border-t-2 border-red-950 my-8 ml-10 mr-10"/>
    <div className="flex flex-wrap justify-center gap-4 mt-8 px-4 pt-10">
  {buttonsHomePage.length > 0 ? (
    buttonsHomePage.map((item, index) => (
      <Link 
        key={index}
        href={item.address}
        className="w-48 h-20 flex items-center justify-center bg-red-950 text-white text-xl px-6 py-3 rounded shadow hover:bg-red-800 transition duration-300 text-center"
      >
        {item.name}
      </Link>
    ))
  ) : (
    <p className="text-center text-gray-500">No buttons available.</p>
  )}
</div>

    </>
  );
}
