"use client";

import { useState } from "react";

const TabList = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  const tabs = [
    {
      name: "Experience",
      content: (
        <>
          <div className="relative pl-16 xs:pl-12 mb-6 p-10">
            {/* Timeline */}
            <div className="absolute left-11 top-0 w-1 border border-solid border-gray-300 h-full"></div>

            <div className="flex flex-col space-y-8">
              {/* Experience 1 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] xs:left-[-25px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/AHA_Logo.jpg"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16 pl-5 lg:pl-10">
                  <h3 className="text-lg font-medium font-semibold">
                    Alliance Health Care
                  </h3>
                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    Full Stack Web Developer
                  </p>
                  <p className="lg:text-sm xs:text-techstacks font-sans font-medium">
                    E-commerce, WordPress, Elementor, PHP, Javascript, HTML
                    &amp; CSS
                  </p>

                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    Clark, PH | June 2024 &ndash; Dec 2024
                  </p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="text-xs pb-1">
                      Developed an end&ndash;to&ndash;end e&ndash;commerce
                      platform and order management systems.
                    </li>
                    <li className="text-xs pb-1">
                      Used Elementor to design custom, responsive web pages,
                      improving aesthetics, usability, performance, and SEO.
                    </li>
                    <li className="text-xs pb-1">
                      Implemented a Store Locator feature to help customers find
                      the nearest location, boosting engagement.
                    </li>
                    <li className="text-xs pb-1">
                      Integrated a Monday.com API form mutation.
                    </li>
                    <li className="text-xs pb-1">
                      Collaborated with clients to understand their needs and
                      deliver tailored solutions.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] xs:left-[-25px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/vr_logo.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16 pl-5 lg:pl-10">
                  <h3 className="text-lg font-medium font-semibold ">
                    Freelance Web Developer
                  </h3>
                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    Full Stack Web Developer &ndash; DMS &amp; BIW
                  </p>
                  <p className="lg:text-sm xs:text-techstacks font-sans font-medium">
                    Laravel, PHP, Tailwind, Javascript, CSS, Vercel &amp;
                    Microsoft 365
                  </p>
                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    Mexico, PH | Mar 2022 &ndash; May 2024
                  </p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="text-xs pb-1">
                      Created a DMS &ndash; Document Management System for
                      efficient document storage and retrieval.
                    </li>
                    <li className="text-xs pb-1">
                      Created a BIW &ndash; Business Informative Website to
                      boost user engagement and provide business insights.
                    </li>
                    <li className="text-xs pb-1">
                      Added functionality to EMS &ndash; Employee Management
                      System including a payslip feature and night shift
                      time&ndash;in&ndash;time&ndash;out functionality for the
                      employee attendance and currently handling the overall
                      maintenance of the web system.
                    </li>
                    <li className="text-xs pb-1">
                      Developed dynamic web apps with Laravel, PHP, and Tailwind
                      CSS for robust functionality and responsive design.
                    </li>
                    <li className="text-xs pb-1">
                      Integrated third&ndash;party APIs such us Monday.com and
                      Google to enhance features and user experience.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] xs:left-[-25px]  top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/offsuretogether_logo.jpg"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16 pl-5 lg:pl-10">
                  <h3 className="text-lg font-medium font-semibold">
                    Offsure Outsourcing Global Inc.
                  </h3>
                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    Full Stack Web Developer &ndash; Internship
                  </p>
                  <p className="lg:text-sm xs:text-techstacks font-sans font-medium">
                    React, NextJS, Firebase, Figma, Jira, Git &amp; Vercel
                  </p>
                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    Clark, PH | Feb 2024 &ndash; May 2024
                  </p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="text-xs pb-1">
                      Managed firebase real&ndash;time databases, and hosted
                      applications.
                    </li>
                    <li className="text-xs pb-1">
                      Utilized and enhanced code readability, best practices,
                      applied a DRY approach, and ensured maintainability.
                    </li>
                    <li className="text-xs pb-1">
                      Enhanced custom system payroll services, attendance, and
                      refactored the company&apos;s system.
                    </li>
                    <li className="text-xs pb-1">
                      Actively participated in and contributed to internal
                      project initiatives, ensuring timely project delivery.
                    </li>
                    <li className="text-xs pb-1">
                      Ensured UI designs are in line with current trends and
                      maintained consistency and responsiveness across
                      platforms.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] xs:left-[-25px]  top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/dhvsu.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <div className="flex-1 ml-16 pl-5 lg:pl-10">
                  <h3 className="text-lg font-medium font-semibold">
                    Capstone Project
                  </h3>
                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    Lead Programmer &ndash; Recruitment Government Platform
                  </p>
                  <p className="lg:text-sm xs:text-techstacks font-sans font-medium">
                    Filament, Laravel, PHP, SQL &amp; Github
                  </p>
                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    Bacolor, PH | Aug 2022 &ndash; Dec 2023
                  </p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="text-xs pb-1">
                      Led development of a Recruitment Government Platform for
                      agencies, integrating a Preliminary Employment
                      Examination.
                    </li>
                    <li className="text-xs pb-1">
                      Ensured security compliance with authentication and data
                      encryption protocols to protect applicant information.
                    </li>
                    <li className="text-xs pb-1">
                      Provided technical leadership, promoting collaboration and
                      best practices in software engineering and project
                      management.
                    </li>
                    <li className="text-xs pb-1">
                      Architected core features, including job listings, admin
                      panel, and examination feature for scalability and
                      efficiency.
                    </li>
                    <li className="text-xs pb-1">
                      Conducted code reviews, optimized performance, code
                      refactoring and maintained system reliability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Education",
      content: (
        <>
          <div className="relative pl-16 xs:pl-12 mb-6 p-10">
            {/* Timeline */}
            <div className="absolute left-11 top-0 w-1 border border-solid border-gray-300 h-full"></div>

            <div className="flex flex-col space-y-8">
              {/* Experience 1 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] xs:left-[-25px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/dhvsu.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 ml-16 pl-5 lg:pl-10">
                  <h3 className="text-lg font-medium font-semibold">
                    Don Honorio Ventura State University
                  </h3>
                  <p className="lg:text-sm xs:text-techstacks font-sans font-medium">
                    Information Technology
                  </p>
                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    Bacolor, PH (2020 &ndash; 2024)
                  </p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="text-xs pb-1">
                      Acquired Top 10 Highest Average Among all the Students{" "}
                      <br /> of the College of Computing Studies (2020 &ndash;
                      2021)
                    </li>
                    <li className="text-xs pb-1">
                      Acquired Class Top 1 in the Academic Years (2020 & 2021)
                    </li>{" "}
                    {/* Corrected dash */}
                    <li className="text-xs pb-1">
                      Consistent President&apos;s Lister &amp; Dean&apos;s
                      Lister (2020 &ndash; 2024)
                    </li>{" "}
                    {/* Fixed apostrophes */}
                    <li className="text-xs pb-1">With Latin Honors (2024)</li>
                    <li className="text-xs pb-1">
                      Most Outstanding Student (2023 &ndash; 2024)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] xs:left-[-25px]  top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/udemy.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16 pl-5 lg:pl-10">
                  <h3 className="text-lg font-medium font-semibold">
                    Certification
                  </h3>
                  <p className="lg:text-sm xs:text-techstacks font-sans font-medium">
                    Udemy
                  </p>
                  <p className="text-gray-500 lg:text-xs font-sans xs:text-customsize">
                    2024
                  </p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="text-xs pb-1">Search Engine Optimization</li>
                    <li className="text-xs pb-1">Vanilla PHP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Skills",
      content: (
        <>
          <div className="relative pl-16 mb-6 p-10">
            {/* Timeline */}
            <div className="absolute left-11 top-0 w-1 border border-solid border-gray-300 h-full"></div>

            <div className="flex flex-col space-y-8">
              {/* Skills 1 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/api.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold pt-2 pl-5">
                    API Development & Testing Tool
                  </h3>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm flex items-center">
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/postman.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain "
                      />
                      <span>Postman</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills 2 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/web-programming.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold pt-2 pl-5">
                    Programming & Scripting Languages
                  </h3>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/js.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Javascript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/typescript.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Typescript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/c++.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>C++</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/php.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>PHP</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/sql.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>SQL</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/html.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Html</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/css.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>CSS</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills 3 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/framework.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold pt-2 pl-5">
                    Frontend Library & Frameworks
                  </h3>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/tailwind.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Tailwind</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/laravel.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Laravel</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/bootstrap.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Bootstrap</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/next.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Next JS</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/react.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>React</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills 4 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/versioncontrol.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold pt-2 pl-5">
                    Version Control & Project Management
                  </h3>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/jira.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Jira</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/git.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Git</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/github.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Github</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/bitbucket.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Bitbucket</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/monday.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Monday.com</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills 5 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/webhost.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold pt-2 pl-5">
                    Deployment & Web Hosting
                  </h3>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/vercel.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Vercel</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/hostinger.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Hostinger</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/godaddy.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Godaddy</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills 6 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/webbuilder.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold pt-2 pl-5">
                    Web Builder & Admin Panel Builder{" "}
                  </h3>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/wordpress.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Wordpress</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/filament.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Filament</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills 7 */}
              <div className="relative flex items-start space-x-4">
                <div className="absolute left-[-40px] top-0 w-12 h-12">
                  {/* Logo Image */}
                  <img
                    src="/images/designtools.png"
                    alt="Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 ml-16">
                  <h3 className="text-lg font-medium font-semibold pt-2 pl-5">
                    Design Tools
                  </h3>
                  <ul className="list-disc pl-5 mt-2 font-sans text-sm">
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/figma.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Figma</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/adobexd.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Adobe XD</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <img
                        src="/images/photoshop.png"
                        alt="Logo"
                        className="w-5 h-4 object-contain"
                      />
                      <span>Photoshop</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <section className="py-6 px-6 bg-white dark:bg-darkbg">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-customwidth mt-10 border border-solid border-gray-300 rounded-lg">
          {/* Tab Buttons */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex-1 py-2 px-4 text-center font-medium text-sm sm:text-base border-b-2 
                  ${
                    activeTab === tab.name
                      ? "border-gray-500 text-gray-500"
                      : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-500 hover:border-gray-300"
                  }
                `}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            className={`rounded-lg bg-white text-gray-700 ${
              activeTab ? "dark:bg-darkbg dark:text-gray-300" : ""
            }`}
          >
            {tabs.map(
              (tab) =>
                activeTab === tab.name && (
                  <div
                    key={tab.name}
                    className="text-gray-700 dark:text-gray-300"
                  >
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
