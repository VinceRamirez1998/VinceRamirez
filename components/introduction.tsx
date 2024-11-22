// components/Introduction.tsx

// Import the specific icons from react-icons
import { FaFacebook, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'; // Facebook, LinkedIn, Email, Resume icons

const iconLinks = [
  { href: "/resume.pdf", icon: <FaFilePdf className="h-6 w-6" />, label: "Resume" },
  { href: "https://www.linkedin.com/in/vince-ramirez/", icon: <FaLinkedin className="h-6 w-6" />, label: "LinkedIn" },
  { href: "mailto:vincedev@gmail.com", icon: <FaEnvelope className="h-6 w-6" />, label: "Email" },
  { href: "https://www.facebook.com/vince.ramirez", target: "_blank", icon: <FaFacebook className="h-6 w-6" />, label: "Facebook" }, // Facebook icon
];

const Introduction = () => {
  return (
    <section className="py-12 px-6 bg-white dark:bg-darkbg min-h-screen flex justify-center">
      {/* Container to apply 920px width and center the content */}
   <div className="max-w-[var(--customwidth)] w-full flex justify-between space-x-6">
        {/* Left Section (Name, Title, Location) */}
        <div className="flex flex-col justify-start space-y-4 text-start max-w-md">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Vince Ramirez</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">Full Stack Web Developer</p>
          <p className="text-lg text-gray-600 dark:text-gray-400">📍 Mexico, Pampanga | PH</p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6 justify-start">
            {/* Map through the iconLinks array */}
            {iconLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.target || "_self"}
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-start items-start">
          <img
            src="../images/vince-ramirez.png" // Replace with your image path
            alt="Vince Ramirez"
            className=" rounded-xl w-48 h-48 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
