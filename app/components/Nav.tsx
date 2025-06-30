import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center bg-gray-200 p-4">
        <span className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
          <Image
            src="/logo.avif"
            alt="Main Street Grill Logo"
            width={150}
            height={150}
            className="rounded-full w-24 h-24 sm:w-36 sm:h-36 object-cover"
            draggable={false}
          />

          <div className="mt-4 sm:mt-0 sm:ml-5 text-3xl sm:text-5xl font-extrabold text-center sm:text-left bg-clip-text text-red-900 drop-shadow-lg">
            141 Main Street
          </div>
        </span>
      </div>
    </>
  );
};

export default Nav;
