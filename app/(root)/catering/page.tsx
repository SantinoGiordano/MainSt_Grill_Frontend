import Link from "next/link";
import Image from "next/image";

export default function Catering() {
  return (
    <>
      <div>
        {/* Hero Banner */}
        <div
          className="relative h-[75vh] bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url("/sandwitch.jpg")' }}
        ></div>

        {/* Catering Services Heading */}
        <div className="p-10 text-center text-3xl font-semibold tracking-wide text-red-800">
          Browse Our Catering Services
          <hr className="my-6 mx-auto w-1/4 border-t-4 border-red-900 rounded-full" />
        </div>

        {/* Catering Images and Link */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center p-4 gap-6">
          <div className="w-full max-w-md h-80 flex items-center justify-center">
            <Image
              loading="lazy"
              draggable={false}
              src="/cateringImg.jpg"
              alt="Catering"
              width={320}
              height={320}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full max-w-md h-80 flex items-center justify-center">
            <div className="bg-black flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:ease-in-out hover:scale-105 transition-transform w-full h-full">
              <Link
                className="text-2xl font-bold text-white hover:text-pink-200 transition-colors mb-4"
                href={"/CateringMenu.pdf"}
              >
                Click Here to Check Out Our Catering Menu
              </Link>
              <Image
                loading="lazy"
                draggable={false}
                alt="Catering Menu"
                className="w-40 h-40 object-cover rounded"
                src="/cateringMenuImg.avif"
                height={160}
                width={160}
              />
            </div>
          </div>
        </div>

        {/* Heritage Room Heading */}
        <div className="p-10 text-center text-3xl font-semibold tracking-wide text-red-800">
          Rent the Heritage Room
          <hr className="my-6 mx-auto w-1/4 border-t-4 border-red-900 rounded-full" />
        </div>

        {/* Heritage Room Section 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center p-4 gap-6">
          <div className="w-full max-w-md h-80 flex items-center justify-center bg-white rounded-lg shadow-lg p-6 overflow-auto">
            <p className="text-justify text-lg md:text-xl leading-relaxed">
              Experience the charm of our Heritage Room, a beautifully designed
              space featuring a cozy fireplace and a warm, inviting atmosphere.
              Ideal for private events, this room comfortably accommodates up to
              40 guests, making it perfect for celebrations, business meetings,
              or special gatherings.
            </p>
          </div>
          <div className="w-full max-w-md h-80 flex items-center justify-center">
            <Image
              alt="Heritage Room"
              src={"/eventRoom.avif"}
              width={500}
              height={500}
              draggable={false}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Heritage Room Section 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center p-4 gap-6">
          <div className="w-full max-w-md h-80 flex items-center justify-center">
            <Image
              alt="Heritage Room Fireplace"
              src={"/eventHallFireplace.avif"}
              width={500}
              height={500}
              draggable={false}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full max-w-md h-80 flex items-center justify-center bg-white rounded-lg shadow-lg p-6 overflow-auto">
            <p className="text-justify text-lg md:text-xl leading-relaxed">
              The fee for reserving our Heritage Room varies based on the day,
              time, and size of your event. Fees may be adjusted or waived
              depending on the details of your booking, such as event duration,
              catering arrangements, or guest count. We are happy to work with
              you to accommodate your event needs. For specific pricing and
              conditions, please contact us directly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
