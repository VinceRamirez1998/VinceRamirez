'use client'; // Ensure this is a client component

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Header = () => {
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark'); // Disable dark mode
      localStorage.setItem('theme', 'light'); // Save to localStorage
    } else {
      document.documentElement.classList.add('dark'); // Enable dark mode
      localStorage.setItem('theme', 'dark'); // Save to localStorage
    }
  };

  // Check for dark mode preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <header className="bg-white dark:bg-darkbg text-gray-500 dark:text-white py-6 font-sans">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0 lg:px-0w-full md:w-customwidth ">

  

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden p-2 text-gray-500 dark:text-white "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className={`h-6 w-6  ${isMenuOpen ? 'hidden' : 'block'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          {/* Close Icon */}
          <svg
            className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex space-x-6 justify-start">
            <li>
              <Link href="/resume" className="hover:text-black dark:hover:text-white dark:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black dark:hover:text-white dark:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black dark:hover:text-white dark:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Button with Icons */}
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
