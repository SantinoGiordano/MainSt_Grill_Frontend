import React from "react";
import Image from "next/image";

const Events = () => {
  return (
    <>
      <div className=" w-screen">
        <div
          className="relative h-[40vh] md:h-[60vh] lg:h-[75vh] bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url("/eventBanners.jpg")' }}
        ></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
          <div className=" p-10 text-center text-3xl font-semibold tracking-wide text-red-800">
            Events at Main Street Grill
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-center mt-4">
            Join us for our special events and gatherings! We host a variety of
            events throughout the year, including live music nights, themed
            dinners, and community celebrations. Check back often for updates on
            our upcoming events.
          </p>

          <div className="flex justify-center mt-8">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg group">
              <Image
                width={500}
                height={300}
                draggable={false}
                loading="lazy"
                src="/eventroom.avif"
                alt="Event at Main Street Grill"
                className="w-full rounded-lg shadow-lg"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-50" />
              {/* Centered button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition z-10">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
