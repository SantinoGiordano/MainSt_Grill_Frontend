import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className=" text-center h-[100vh] flex items-center justify-center pt-10 p-10  md:p-0">
        <div className=" text-center h-[100vh] flex items-center justify-center">
          <div className="bg-red-950 flex flex-col items-center justify-center p-10 rounded-lg shadow-lg hover:ease-in-out hover:scale-105 transition-transform">
            <Link
              className="text-2xl font-bold text-white transition-colors"
              href={"/141MainStreetMenu.pdf"}
            >
              Click Here to Check Out Our Menu
              <Image
                loading="lazy"
                alt="Siverware"
                className="mx-auto my-4"
                src="/siverware.jpg"
                height={250}
                width={250}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
