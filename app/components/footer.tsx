import Link from "next/link";
import React from "react";

const footer = () => {
  return (
    <>
      <div className="bg-gray-200 mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="p-10 flex-1">
            <p>Call After 3PM (413) 821-9881</p>
            <p>
              <Link href="https://www.google.com/maps/dir//141+Main+St,+Agawam,+MA+01001/@42.0868178,-72.6236348,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e6e14953533dcf:0x7139b8644421c379!2m2!1d-72.6214461!2d42.0868178">
                CLICK HERE
              </Link>{" "}
              For Driving Directions
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center bg-black text-white py-4">
            test
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
