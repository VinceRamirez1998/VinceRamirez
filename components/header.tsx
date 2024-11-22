'use client'; // Ensure this is a client component

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const Header = () => {
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <header className="bg-white dark:bg-darkbg text-gray-500 dark:text-white py-4">
      <div className="container mx-auto flex justify-between items-center w-customwidth">
       

        {/* Navigation Links */}
        <nav className="flex-grow">
          <ul className="flex space-x-6 justify-start">
            <li>
              <Link href="/" className="hover:text-black">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black">About</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-black">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">Contact</Link>
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
