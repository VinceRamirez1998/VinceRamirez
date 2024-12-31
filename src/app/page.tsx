// src/app/page.tsx
"use client";
import Link from "next/link"; // Import the Link component
import "./globals.css";
import Preloader from "../../components/preloader";

export default function Home() {
  return (
    <>
      <Preloader className="font-serif" />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto animate-shuffle xs:p-4 xs:gap-4 lg:gap-8">
          {/* Resume Box */}
          <Link href="/resume">
            <div className="flex flex-col items-center justify-between bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-gray-100 h-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                RESUME
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
                View my resume and professional background.
              </p>
              <button className="mt-4 bg-gray-800 text-white py-2 px-4 xs:px-3 sm:py-2 sm:px-6 md:py-3 md:px-8 text-sm sm:text-base md:text-lg rounded-full hover:bg-gray-700 transition duration-300 xs:text-xs">
                View Resume
              </button>
            </div>
          </Link>

          {/* Projects Box */}
          <div className="flex flex-col items-center justify-between bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-gray-100 h-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              PROJECTS
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
              Check out my personal and professional projects.
            </p>
            <button className="mt-4 bg-gray-800 text-white py-2 px-4 xs:px-3 sm:py-2 sm:px-6 md:py-3 md:px-8 text-sm sm:text-base md:text-lg rounded-full hover:bg-gray-700 transition duration-300 xs:text-xs ">
              View Projects
            </button>
          </div>

          {/* PC Specs Box */}
          <div className="flex flex-col items-center justify-between bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-gray-100 h-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              PC SPECS
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
              See the specs of my personal computer setup.
            </p>
            <button className="mt-4 bg-gray-800 text-white py-2 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 text-sm sm:text-base md:text-lg rounded-full hover:bg-gray-700 transition duration-300 xs:text-xs">
              View Specs
            </button>
          </div>

          {/* Contact Me Box */}
          <Link href="/contact">
            <div className="flex flex-col items-center justify-between bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-gray-100 sm:col-span-2 md:col-span-3 h-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                CONTACT
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
                Get in touch for collaboration or inquiries.
              </p>
              <button className="mt-4 bg-gray-800 text-white py-2 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 text-sm sm:text-base md:text-lg rounded-full hover:bg-gray-700 transition duration-300 xs:text-xs">
                Get In Touch
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
