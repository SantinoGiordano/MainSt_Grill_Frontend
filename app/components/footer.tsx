import Link from "next/link";
import React from "react";

const footer = () => {
  return (
    <>
      <div className="bg-gray-200 mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="p-10 flex-1 text-center justify-right">
            <p>Call After 3PM (413) 821-9881</p>
            <Link href="https://www.google.com/maps/dir//141+Main+St,+Agawam,+MA+01001/@42.0868178,-72.6236348,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e6e14953533dcf:0x7139b8644421c379!2m2!1d-72.6214461!2d42.0868178">
              CLICK HERE
            </Link>{" "}
            For Driving Directions
            <p>
              Free Parking / Outdoor Patio (Seasonal)/ Private Room Available
            </p>
            <p>Location: 141 Main Street Agawam MA 01001</p>
          </div>
          <div className="m-5 flex-1 flex justify-center items-center bg-gray-400 text-white py-6 rounded-md shadow">
            <form className="flex flex-col gap-3 w-full max-w-md px-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="p-2 rounded border bg-white border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="p-2 rounded border bg-white border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                />
              </div>
              <button
                type="submit"
                className="mt-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <footer className="text-center py-4 mt-8">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Main Street Grill. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            141 Main Street, Agawam, MA 01001
          </p>
        </footer>
      </div>
    </>
  );
};

export default footer;
