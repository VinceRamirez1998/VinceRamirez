// src/app/page.tsx
'use client'
import Link from 'next/link'; // Import the Link component
import './globals.css';
import Preloader from '../../components/preloader';

export default function Home() {
  return (
    <>
      <Preloader className="font-serif" />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto animate-shuffle">
          {/* Resume Box */}
          <Link href="/resume">
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-gray-100">
              <h2 className="text-3xl font-semibold text-gray-900 mb-3">RESUME</h2>
              <p className="text-lg text-gray-600 text-center">View my resume and professional background.</p>
              <button className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">
                View Resume
              </button>
            </div>
          </Link>

          {/* Projects Box */}
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-gray-100">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">PROJECTS</h2>
            <p className="text-lg text-gray-600 text-center">Check out my personal and professional projects.</p>
            <button className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">
              View Projects
            </button>
          </div>

          {/* PC Specs Box */}
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-gray-100">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">PC SPECS</h2>
            <p className="text-lg text-gray-600 text-center">See the specs of my personal computer setup.</p>
            <button className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">
              View Specs
            </button>
          </div>

          {/* Contact Me Box */}
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-gray-100 sm:col-span-2 md:col-span-3">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">CONTACT ME</h2>
            <p className="text-lg text-gray-600 text-center">Get in touch for collaboration or inquiries.</p>
            <button className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
