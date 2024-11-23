'use client'; 
import { FaFacebook, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'; // Facebook, LinkedIn, Email, Resume icons

const iconLinks = [
  { href: "/resume.pdf", icon: <FaFilePdf className="h-6 w-6" />, label: "Resume" },
  { href: "https://www.linkedin.com/in/vince-ramirez/", icon: <FaLinkedin className="h-6 w-6" />, label: "LinkedIn" },
  { href: "mailto:vincedev@gmail.com", icon: <FaEnvelope className="h-6 w-6" />, label: "Email" },
  { href: "https://www.facebook.com/vince.ramirez", target: "_blank", icon: <FaFacebook className="h-6 w-6" />, label: "Facebook" }, // Facebook icon
];

const Introduction = () => {
  return (
    <section className="min-h-screen py-12 px-6 bg-white dark:bg-darkbg flex justify-center">
      {/* Container to apply 920px width and align items at the top */}
      <div className="max-w-[var(--customwidth)] w-full flex justify-between items-start space-x-6">
        
        {/* Left Section (Name, Title, Location) */}
        <div className="flex flex-col justify-start space-y-4 text-start max-w-md">
    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white font-calistoga tracking-tighter">Vince Ramirez</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">Full Stack Web Developer</p>
          <p className="text-lg text-gray-600 dark:text-gray-400">📍 Mexico, Pampanga | PH</p>

          {/* Social Icons with added padding-top */}
          <div className="flex space-x-6 mt-6 justify-start pt-5">
            {/* Map through the iconLinks array */}
            {iconLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.target || "_self"}
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-300 hover:text-black duration-1000 flex items-center space-x-2 
                  ${link.label === "Resume" 
                    ? "border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
                  }`}
                aria-label={link.label}
              >
                {link.label === "Resume" ? (
                  <>
                    <span className="text-sm">Resume</span> {/* Text for Resume */}
                    <span>{link.icon}</span> {/* Icon for Resume */}
                  </>
                ) : (
                  link.icon // For other icons (LinkedIn, Email, Facebook, etc.)
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-start items-start">
          <img
            src="../images/vince-ramirez-img.png" // Replace with your image path
            alt="Vince Ramirez"
            className="rounded-xl w-48 h-[13.5rem] object-contain shadow-lg dark:bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
