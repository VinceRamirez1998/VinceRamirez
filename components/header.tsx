'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark'); // Add 'dark' class to <html> for dark mode
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from <html> for light mode
    }
  }, []);
    

  return (
    <header className="bg-white dark:bg-darkbg text-gray-500 dark:text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-0 max-w-screen-lg">
        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-bold text-gray-700 dark:text-white">
            MyLogo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden text-gray-700 dark:text-white p-2"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-white dark:bg-darkbg lg:static lg:flex lg:w-auto lg:items-center lg:space-x-6 
          ${isMenuOpen ? 'block' : 'hidden'} lg:block transition-all`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-6 py-4 lg:py-0">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
