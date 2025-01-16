"use client";
import Header from "../../../components/header";
import Preloader from "../../../components/preloader";
import { ArrowLeftIcon, LinkIcon } from "@heroicons/react/24/solid"; // Importing the "ArrowLeft" icon
import { useState } from "react";

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  link: string;
  developedIn?: string;
  developedUsing?: string;
  category?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Chemist Greenhouse",
    description: "An online platform to manage their products and services.",
    image: "/images/chemist.png",
    link: "https://chemistgreenhouse.com.au/",
    developedIn: "2024",
    developedUsing: "Php, Javascript, WordPress",
    category: "Web Application",
  },
  {
    title: "Alliance Health Care",
    description:
      "A health application focused on fitness tracking and wellness.",
    image: "/images/aha.png",
    link: "https://alliancehealthcare.com.au/",
    developedIn: "2024",
    developedUsing: "Php, Javascript, WordPress",
    category: "Web Application",
  },
  {
    title: "Maximum Build",
    description:
      "Founded in 2015, Maximum Build is an Australian family-owned building company serving Gold Coast and Brisbane areas, providing reliable and high-quality building services.",
    image: "/images/maximum.png",
    link: "https://www.maximumbuild.com.au/",
    developedIn: "2024",
    developedUsing: "Javascript, HTML, CSS",
    category: "Web Application",
  },
  {
    title: "The Chaphel Pharmacy",
    description: "A platform to provide services and booking functionalities.",
    image: "/images/thechaphel.png",
    link: "https://thechapelpharmacy.com.au/",
    developedIn: "2024",
    developedUsing: "Php, Javascript, WordPress",
    category: "Web Application",
  },
  {
    title: "Offsure Tours",
    description:
      "An online travel agency offering personalized tours and bookings.",
    image: "/images/offsuretours.png",
    link: "https://offsuretours.biz/",
    developedIn: "2023",
    developedUsing: "NextJS, Tailwind, Typescript",
    category: "Online Booking",
  },
  {
    title: "ScriptIt",
    description:
      "A platform for users to generate custom scripts for different use cases.",
    image: "/images/scriptit.png",
    link: "https://scriptit.com.au",
    developedIn: "2024",
    developedUsing: "Php, Javascript, WordPress",
    category: "Web Application and Mobile Application",
  },
];

const ProjectsPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <div className="bg-white dark:bg-darkbg xs:pb-20">
      <Header />
      <Preloader className="font-serif" />
      <div className="container mx-auto px-4 mt-12 mb-20 xs:mb-20 rounded-lg border border-opacity-18 p-8 bg-white dark:bg-darkbg">
        <h1 className="text-4xl xs:text-3xl xs:pb-6 font-bold text-center mb-2 mt-2 text-black dark:text-white font-sans">
          LATEST PROJECTS
        </h1>
        <div className="rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Top row projects */}
            {portfolioItems.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="relative group rounded-2xl shadow-lg overflow-hidden portfolio-overlay border-2"
                style={{ height: "100%", minHeight: "300px" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute hover:text-white dark:text-white inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white text-sm text-center mb-4">
                    {/* can do item.description here */}
                  </p>
                  <button
                    onClick={() => openModal(item)}
                    className="px-4 py-2 bg-black text-white border-2 border-white rounded-md hover:bg-transparent hover:text-white transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}

            {/* Middle row projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-8 w-full lg:col-span-3">
              {portfolioItems.slice(3, 5).map((item, index) => (
                <div
                  key={index + 3}
                  className="relative group rounded-2xl shadow-lg overflow-hidden portfolio-overlay flex-1 lg:h-[455px] h-[200px] sm:w-[450px] w-full border-2"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm text-center mb-4">
                      {/* can do item.description here */}
                    </p>
                    <button
                      onClick={() => openModal(item)}
                      className="px-4 py-2 bg-black text-white border-2 border-white rounded-md hover:bg-transparent hover:text-white transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom row project */}
            <div className="relative group rounded-2xl shadow-lg overflow-hidden portfolio-overlay lg:col-span-3 border-2">
              <img
                src={portfolioItems[5].image}
                alt={portfolioItems[5].title}
                className="w-full h-[200px] sm:h-[300px] lg:h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {portfolioItems[5].title}
                </h3>
                <p className="text-white text-sm text-center mb-4">
                  {/* can do item.description here */}
                </p>
                <button
                  onClick={() => openModal(portfolioItems[5])}
                  className="px-4 py-2 bg-black text-white border-2 border-white rounded-md hover:bg-transparent hover:text-white transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-black/30  z-50">
            <div className="bg-white dark:bg-darkbg rounded-lg p-6 w-full max-w-4xl border-2">
              {/* Image */}
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-96 object-cover mb-4 border-2 rounded-2xl"
              />
              {/* Title */}
              <h2 className="text-3xl font-bold mb-2">{selectedItem.title}</h2>
              {/* Link */}
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 mb-2 block flex items-center gap-2"
              >
                <LinkIcon className="w-5 h-5 animate-spin-slow" />{" "}
                {/* Link icon */}
                Visit Website
              </a>
              {/* Brief Description */}
              <p className="mb-4">{selectedItem.description}</p>
              {/* Development Info */}
              <div className="mb-4">
                <p>
                  <strong>Developed In:</strong> {selectedItem.developedIn}
                </p>
                <p>
                  <strong>Developed Using:</strong>{" "}
                  {selectedItem.developedUsing}
                </p>
                <p>
                  <strong>Category:</strong> {selectedItem.category}
                </p>
              </div>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-darkbg text-white rounded-md hover:bg-gray-800 transition flex items-center gap-2 border"
              >
                <ArrowLeftIcon className="w-5 h-5" /> {/* Arrow Left Icon */}
                Back to Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
