import Head from "next/head";
import React from "react";
import { Dancing_Script } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - 141 Main Street </title>
        <meta
          name="description"
          content="Get in touch with Main Street Grill for inquiries, reservations, and feedback. We're here to serve you!"
        />
      </Head>
      <div>
        <div
          className="relative h-[75vh] bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url("/dinningroom.avif")' }}
        ></div>

        <div className="flex flex-col md:flex-row w-full bg-gray-200 p-6">
          <div className="md:w-1/2 w-full flex items-center justify-center p-4">
            <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <div
                className="text-5xl mb-4"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                Located At:
              </div>
              <div className="text-xl">
                141 Main Street, Agawam
                <br /> MA 01001
                <br /> we are open Monday to Saturday
                <br /> 10 AM to 6 PM.
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full h-80 md:h-auto p-4 flex items-center justify-center">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.280784770657!2d-72.62365!3d42.08682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e9d1df0d635b%3A0x123456789abcdef!2s141%20Main%20St%2C%20Agawam%2C%20MA%2001001!5e0!3m2!1sen!2sus!4v1689100000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
