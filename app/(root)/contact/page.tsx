import Head from "next/head";
import React from "react";




export default function contact() {
  return (
    <>
      <Head>
        <title>Contact Us - 141 Main Street </title>
        <meta
          name="description"
          content="Get in touch with Main Street Grill for inquiries, reservations, and feedback. We're here to serve you!"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <div
          className="relative h-[75vh] bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url("/dinningroom.avif")' }}
        >
          {/* bg of dining room */}
        </div>
        <div
          id="contentWrapper"
          className=" bg-black text-white flex flex-col items-center justify-center p-10"
        >
          <span className="">
            <div
              className="text-6xl"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Located At:
            </div>
            <div className="text-2xl">
              141 Main Street, Agawam
              <br /> MA 01001
              <br /> we are open Monday to Saturday
              <br /> 10 AM to 6 PM.
            </div>
            {/* {embedGoogleMap()} */}
          </span>
        </div>
      </div>
    </>
  );
}
