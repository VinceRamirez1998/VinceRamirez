"use client"; // Ensure this is a client-side component

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"; // Import Heroicons

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    console.log(`Dark mode toggled: ${!isDarkMode}`);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log(`Saved theme: ${savedTheme}`);
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <header className="bg-white dark:bg-darkbg text-gray-500 dark:text-white py-6 font-sans">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0 lg:px-0 w-full md:w-customwidth">
        <button
          className="block lg:hidden p-2 text-gray-500 dark:text-white xs:mr-6"
          onClick={() => window.history.back()}
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </button>

        <nav className="lg:block">
          <ul className="flex space-x-6 justify-start">
            <li>
              <Link
                href="/"
                className="hover:text-black dark:hover:text-gray-300 dark:text-white flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 mr-2 hidden lg:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                <span className="hidden lg:block">Dashboard</span>
              </Link>
            </li>
          </ul>
        </nav>

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
