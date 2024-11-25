'use client';

import { useState } from 'react';

const TabList = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  const tabs = [
    { 
      name: 'Experience', 
      content: (
        <>
          <div className="relative pl-16 mb-6 p-10">
            {/* Timeline */}
            <div className="absolute left-11 top-0 w-1 border border-solid border-gray-300 h-full"></div>

            <div className="flex flex-col space-y-8">
              {/* Experience 1 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold">Alliance Health Care</h3>
                  <p className="text-sm">Full Stack Web Developer - E-commerce, WordPress, Elementor</p>
                  <p className="text-gray-500 text-sm">Mexico, Pampanga | June 2024 - Current</p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li>Leveraged Elementor to create custom, visually appealing, and responsive web pages.</li>
                    <li>Developed an end-to-end e-commerce platform to streamline online transactions.</li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold">Freelance Web Developer</h3>
                  <p className="text-sm">Full Stack Web Developer - DMS: Laravel, PHP, Tailwind</p>
                  <p className="text-gray-500 text-sm">Clark, Pampanga | March 2022 - May 2024</p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li>Developed dynamic web applications using Laravel, PHP, and Tailwind CSS.</li>
                    <li>Designed and implemented a Document Management System (DMS) to streamline document storage and retrieval.</li>
                  </ul>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold">Offsure Outsourcing Global Inc.</h3>
                  <p className="text-sm">Full Stack Web Developer - Internship - AMS</p>
                  <p className="text-gray-500 text-sm">Clark, Pampanga | Feb 2024 - May 2024</p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li>Integrated custom authentication, managed real-time databases, and hosted applications.</li>
                    <li>Implemented version control systems to manage code repositories.</li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold">Capstone Project</h3>
                  <p className="text-sm">Lead Programmer - Recruitment Government Platform</p>
                  <p className="text-gray-500 text-sm">Mexico, Pampanga | Aug 2022 - Dec 2023</p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li>Led the development of a Recruitment Government Platform, streamlining the hiring process.</li>
                    <li>Ensured compliance with security standards and implemented encryption protocols.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
    { 
      name: 'Education', 
      content: (
        <div className="relative pl-16 mb-6 p-10">
          {/* Timeline */}
          <div className="absolute left-11 top-0 w-1 border border-solid border-gray-300 h-full"></div>

          <div className="flex flex-col space-y-8">
            {/* Education Section */}
            <div className="relative flex items-start space-x-4">
              <div className="absolute left-[-40px] top-0 w-12 h-12">
                {/* Logo Image */}
                <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium font-semibold">Don Honorio Ventura State University</h3>
                <p className="text-sm">Bachelor of Science in Information Technology</p>
                <p className="text-gray-500 text-sm">Bacolor, Pampanga | 2020 - 2024</p>

                <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                  <li>Top 10 Highest Average 2020-2021</li>
                  <li>Dean's Lister and President Lister 2020-2024</li>
                </ul>

                <h4 className="mt-4 text-lg font-medium font-semibold">Certifications</h4>
                <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                  <li>Search Engine Optimization Udemy - March 2024</li>
                  <li>Vanilla PHP Udemy - May 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      name: 'Skills', 
      content: 'Here is the content for Skills.' 
    },
  ];

  return (
    <section className="py-6 px-6 bg-white dark:bg-darkbg">
      <div className="min-h-screen flex justify-center">
        <div className="max-w-screen-xl w-customwidth mt-10 border border-solid border-gray-300 rounded-lg">
          {/* Tab Buttons */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex-1 py-2 px-4 text-center font-medium text-sm sm:text-base border-b-2 
                  ${activeTab === tab.name
                    ? 'border-gray-500 text-gray-500'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-500 hover:border-gray-300'
                  }
                `}>
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`rounded-lg bg-white text-gray-700 ${activeTab ? 'dark:bg-darkbg dark:text-gray-300' : ''}`}>
            {tabs.map(
              (tab) =>
                activeTab === tab.name && (
                  <div key={tab.name} className="text-gray-700 dark:text-gray-300">
                    {tab.content}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabList;
