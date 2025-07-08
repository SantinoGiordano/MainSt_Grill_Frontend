import Head from "next/head";
import React from "react";
import Image from "next/image";
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
        <title>Contact Us - 141 Main Street</title>
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

        <div className="flex flex-col md:flex-row w-full p-6 md:gap-[5px]">
          {/* Left Side */}
          <div className="flex-1 flex flex-col gap-6 p-4 items-center justify-center">
            <div className="bg-red-950 text-white p-6 rounded-lg shadow-lg w-full max-w-xl">
              <div
                className="text-5xl mb-4"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                Located At:
                <hr className="mt-4"/>
              </div>
              <div className="text-xl">
                141 Main Street, Agawam
                <br /> MA 01001
                <br /> We are open Monday to Saturday
                <br /> 10 AM to 6 PM.
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-xl">
              <Image
                src="/staffPhoto.avif"
                alt="photo of the restaurant staff"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col gap-6 p-4 items-center justify-center">
            <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-xl">
              <iframe
                title="Google Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.280784770657!2d-72.62365!3d42.08682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e9d1df0d635b%3A0x123456789abcdef!2s141%20Main%20St%2C%20Agawam%2C%20MA%2001001!5e0!3m2!1sen!2sus!4v1689100000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px]"
              ></iframe>
            </div>
            <div className="bg-red-950 text-white p-6 rounded-lg shadow-lg w-full max-w-xl">
              <div
                className="text-5xl mb-4"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                Contact Us:
                <hr className="mt-4"/>
              </div>
              <div className="text-xl">
                Do you have a question or need some help? Have a problem - or
                want to tell us about a GREAT experience? You are very important
                to us & we want to hear from you!!
                <br />
                <br />
                <strong>(413) 821-9881</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
