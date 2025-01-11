"use client";
import Header from "../../../components/header";

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const portfolioItems: PortfolioItem[] = [
  { title: "", description: "", image: "/images/chemist.png", link: "#" },
  { title: "", description: "", image: "/images/aha.png", link: "#" },
  { title: "", description: "", image: "/images/maximum.png", link: "#" },
  { title: "", description: "", image: "/images/thechaphel.png", link: "#" },
  { title: "", description: "", image: "/images/offsuretours.png", link: "#" },
  { title: "", description: "", image: "/images/scriptit.png", link: "#" },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-darkbg">
      <Header />
      <div className="container mx-auto px-4 mt-12 mb-20 xs:mb-20 rounded-lg border border-opacity-18 p-8 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl xs:text-2xl xs:pb-6 font-bold text-center mb-2 mt-2 text-black dark:text-white">
          MY PROJECTS
        </h1>
        <div className="rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Top row projects */}
            {portfolioItems.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="relative group rounded-2xl shadow-lg overflow-hidden portfolio-overlay"
                style={{ height: "100%", minHeight: "300px" }}
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

            {/* Middle row projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-8 w-full lg:col-span-3">
              {portfolioItems.slice(3, 5).map((item, index) => (
                <div
                  key={index + 3}
                  className="relative group rounded-2xl shadow-lg overflow-hidden portfolio-overlay flex-1 lg:h-[455px] h-[200px] sm:w-[450px] w-full"
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

            {/* Bottom row project */}
            <div className="relative group rounded-2xl shadow-lg overflow-hidden portfolio-overlay lg:col-span-3">
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
