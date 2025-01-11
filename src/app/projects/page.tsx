"use client";
import Header from "../../../components/header";

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "",
    description: "",
    image: "/images/chemist.png",
    link: "#",
  },
  {
    title: "",
    description: "",
    image: "/images/aha.png",
    link: "#",
  },
  {
    title: "",
    description: "",
    image: "/images/maximum.png",
    link: "#",
  },
  {
    title: "",
    description: "",
    image: "/images/thechaphel.png",
    link: "#",
  },
  {
    title: "",
    description: "",
    image: "/images/offsuretours.png",
    link: "#",
  },
  {
    title: "",
    description: "",
    image: "/images/scriptit.png",
    link: "#",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg:white dark:bg-black">
      <Header /> {/* Include Header component */}
      <div
        className="
          container mx-auto px-4 mt-12 mb-20 rounded-lg border border-opacity-18 p-8 bg:white dark:bg-gray-800
        "
      >
        <h1 className="text-4xl font-bold text-center mb-2 mt-2 dark:text-white">
          MY PROJECTS
        </h1>
        <div className="p-8 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projects 1, 2, and 3 in the top row */}
            {portfolioItems.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="relative group rounded-2xl shadow-lg overflow-hidden portfolio-overlay"
                style={{ height: "660px" }} // Fixed height for top 3 projects
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
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="px-4 py-2 bg-black text-white border-2 border-white rounded-md hover:bg-transparent hover:text-white transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}

            {/* Projects 4 and 5 in the middle row, each taking 50% of the width */}
            <div className="flex gap-8 w-full lg:col-span-3">
              {portfolioItems.slice(3, 5).map((item, index) => (
                <div
                  key={index + 3}
                  className="relative group rounded-2xl shadow-lg overflow-hidden portfolio-overlay"
                  style={{ width: "50%", height: "460px" }} // Consistent height for each of these
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
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="px-4 py-2 bg-black text-white border-2 border-white rounded-md hover:bg-transparent hover:text-white transition"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Project 6 in the bottom row, full width */}
            <div className="relative group rounded-2xl shadow-lg overflow-hidden portfolio-overlay lg:col-span-3">
              <img
                src={portfolioItems[5].image}
                alt={portfolioItems[5].title}
                className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {portfolioItems[5].title}
                </h3>
                <p className="text-white text-sm text-center mb-4">
                  {portfolioItems[5].description}
                </p>
                <a
                  href={portfolioItems[5].link}
                  className="px-4 py-2 bg-black text-white border-2 border-white rounded-md hover:bg-transparent hover:text-white transition"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
