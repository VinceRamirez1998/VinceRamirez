'use client';

import { useState } from 'react';

const TabList = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  const tabs = [
    { 
      name: 'Experience', 
      content: (
        <>
          <div className="relative pl-16 mb-6">
            {/* Timeline */}
            <div className="absolute left-0 top-0 w-1 bg-gray-300 h-full"></div>
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
                  <ul className="list-disc pl-5 mt-2">
                    <li>Leveraged Elementor to create custom, visually appealing, and responsive web pages, enhancing the overall aesthetic, usability, performance, and SEO of various websites.</li>
                    <li>Developed an end-to-end e-commerce platform, order management systems, and scheduling management website to streamline online transactions and enhance user experience.</li>
                    <li>Implemented Store Locator feature to help clients find the nearest business location and enhance customer engagement.</li>
                    <li>Utilized a full-stack development approach to ensure seamless integration of front-end and back-end functionalities, delivering a cohesive and intuitive user experience.</li>
                    <li>Collaborated with clients to understand their business requirements, provided technical expertise, and delivered tailored solutions to meet their specific needs.</li>
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
                  <ul className="list-disc pl-5 mt-2">
                    <li>Developed dynamic web applications using Laravel, PHP, and Tailwind CSS, ensuring robust functionality and responsive design.</li>
                    <li>Designed and implemented a Document Management System (DMS) to streamline document storage, retrieval, and management for clients.</li>
                    <li>Integrated third-party APIs to enhance application features and functionality, improving overall user experience.</li>
                    <li>Employed agile methodologies to efficiently manage project timelines and deliverables, ensuring client satisfaction and project success.</li>
                    <li>Collaborated closely with clients to analyze business requirements, propose technical solutions, and implement tailored web solutions that meet specific needs and objectives.</li>
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
                  <ul className="list-disc pl-5 mt-2">
                    <li>Integrated a custom authentication system, security, managed real-time databases, and hosted applications, ensuring reliability and scalability.</li>
                    <li>Utilized and enhanced code readability, best practices, applied a DRY approach, and ensured maintainability.</li>
                    <li>Implemented version control systems to manage code repositories, facilitating collaborative development and maintaining code integrity throughout the software lifecycle.</li>
                    <li>Actively participated in and contributed to internal project initiatives, ensuring timely project delivery.</li>
                    <li>Ensured UI designs are in line with current trends and maintained consistency and responsiveness across platforms.</li>
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
                  <ul className="list-disc pl-5 mt-2">
                    <li>Led the development team in creating a robust Recruitment Government Platform tailored for government agencies, integrating a Preliminary Employment Examination module to streamline the hiring process.</li>
                    <li>Ensured compliance with security standards and regulations, implementing robust authentication mechanisms and data encryption protocols to safeguard applicant information.</li>
                    <li>Provided technical leadership and guidance to the development team, fostering a collaborative environment and promoting best practices in software engineering and project management.</li>
                    <li>Architected and implemented core functionalities, including job listings, user registration, preliminary examination modules, and application management systems, ensuring scalability and efficiency.</li>
                    <li>Conducted regular code reviews, identified areas for optimization, and implemented performance enhancements to maintain code quality and ensure system reliability.</li>
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
      content: 'Here is the content for Education.' 
    },
    { 
      name: 'Skills', 
      content: 'Here is the content for Skills.' 
    },
  ];

  return (
    <section className="py-6 px-6 bg-white dark:bg-darkbg">
      <div className="min-h-screen flex justify-center">
        <div className="max-w-screen-xl w-customwidth mt-10">
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
