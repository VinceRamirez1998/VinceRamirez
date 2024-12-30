"use client";
import { FaFacebook, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa"; // Facebook, LinkedIn, Email, Resume icons

const iconLinks = [
  {
    href: "/resume/Resume - Benedict Vincent Ramirez.pdf",
    icon: <FaFilePdf className="h-6 w-6" />,
    label: "Resume",
    download: true,
  },
  {
    href: "https://www.linkedin.com/in/lets-build-the-future/",
    icon: <FaLinkedin className="h-6 w-6" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:it.benedictramirez247@gmail.com",
    icon: <FaEnvelope className="h-6 w-6" />,
    label: "Email",
  },
  {
    href: "https://www.facebook.com/BenedictVincentRamirez",
    target: "_blank",
    icon: <FaFacebook className="h-6 w-6" />,
    label: "Facebook",
  },
];

const Introduction = () => {
  return (
    <section className="pt-16 py-6 px-6 bg-white dark:bg-darkbg flex justify-center">
      <div className="max-w-screen-xl w-customwidth flex flex-col lg:flex-row-reverse justify-between items-start space-y-6 lg:space-y-0 ">
        {/* Right Section (Image) */}
        <div className="flex justify-center lg:justify-end items-start lg:items-center">
          <img
            src="../images/vince-ramirez-img.png" // Replace with your image path
            alt="Vince Ramirez"
            className="rounded-xl w-48 h-[13.5rem] sm:h-[14rem] md:h-[15rem] lg:h-[16rem] object-contain shadow-lg dark:bg-white"
          />
        </div>

        {/* Left Section (Name, Title, Location) */}
        <div className="flex flex-col justify-start space-y-4 text-start max-w-md">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white font-calistoga tracking-tighter tracking-[1px]">
            Vince Ramirez
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-400 font-sans">
            Full Stack Web Developer
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400 font-sans">
            Mexico, Pampanga 📍 | PH
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6 justify-start pt-5">
            {/* Map through the iconLinks array */}
            {iconLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.target || "_self"}
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-300 hover:text-black duration-1000 flex items-center space-x-2 
                  ${
                    link.label === "Resume"
                      ? "border border-gray-400 rounded-lg px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 hover:text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl p-2"
                  }`}
                aria-label={link.label}
                download={
                  link.download
                    ? "Resume - Benedict Vincent Ramirez.pdf"
                    : undefined
                }
              >
                {link.label === "Resume" ? (
                  <>
                    <span className="text-sm">Resume</span>{" "}
                    {/* Text for Resume */}
                    <span>{link.icon}</span> {/* Icon for Resume */}
                  </>
                ) : (
                  link.icon // For other icons (LinkedIn, Email, Facebook, etc.)
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
