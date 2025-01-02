import React from "react";

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    image: "/images/bitbucket.png",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    image: "/images/bitbucket.png",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    image: "/images/bitbucket.png",
    link: "#",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg shadow-lg overflow-hidden portfolio-overlay"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
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
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
