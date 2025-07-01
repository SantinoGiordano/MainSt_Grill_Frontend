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
          </div>
          <div className="m-5 max-w-3/5 flex-1 flex justify-center items-center bg-black text-white py-4">
            <form>
              Email:<br></br>
              <input
                required
                type="email"
                placeholder="Enter your email for updates"
                className="p-2 bg-white text-black rounded-l-md w-64 md:w-80"
              />
              Name:
              <input
                className="p-2 bg-white text-black rounded-l-md w-64 md:w-80"
                type="text"
                placeholder="Enter your name"
                required
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors"></button>
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
