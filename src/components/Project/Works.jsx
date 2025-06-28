import React, { useState } from "react";

const works = [
  {
    title: "WordAltas-country-explorer",
    description:
      "WordAtlas is a React app showing country data(name,facts..)from a public API",
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/username/portfolio",
    live: "https://gentle-pika-1c7d97.netlify.app/",
    image: "/images/world.jpg",
  },
  {
    title: "E-commerce Store",
    description: "Feature-rich e-commerce store.",
    tech: ["HTML & CSS", "Bootstrap", "Django"],
    github: "https://github.com/sanaullahBalghari/Eco-shopping-store-website",
    live: "",
    image: "/images/ecom.jpg",
  },
  {
    title: "DjangoRecipes",
    description:
      "A Django-based recipe website where users can add, delete, and update recipes easily.",
    tech: ["HTML&CSS", "Bootstrap", "Django"],
    github: "https://github.com/sanaullahBalghari/Django-Res-Recepie-project",
    live: "",
    image: "/images/recipe.webp",
  },

  {
    title: "Ecom-salajeet-store ",
    description:
      "A complete, responsive, dynamic e-commerce site for Blaghari Himalayan Salajeet & Dry Fruits.",
    tech: ["HTML/CSS", "Bootstrap", "Django", "js"],
    github: "https://github.com/username/weather-app",
    live: "https://github.com/sanaullahBalghari/Ecom-salajeet-store",
    image: "/images/Powder.webp",
  },
  {
    title: "Weather App",
    description: "Real-time weather app using OpenWeatherMap API.",
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/username/weather-app",
    live: "https://github.com/sanaullahBalghari/Weather-Forecast-App-in-React",
    image: "/images/weather app.jpg",
  },
  {
    title: "Blog Platform",
    description:
      "Featch Blog data using Api and also enalbe to post custom Blog",
    tech: ["HTML&CSS", "React.js", "js"],
    github: "https://github.com/sanaullahBalghari/Blog-web-in-React",
    live: "",
    image: "/images/Best-Blog.png",
  },
];

const Works = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - cardsPerPage, 0));
  };

  const handleNext = () => {
    if (startIndex + cardsPerPage < works.length) {
      setStartIndex((prev) => prev + cardsPerPage);
    }
  };

  const visibleWorks = works.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section id="works" className="py-24 bg-white  dark:bg-gray-900 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 ">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-300">
            My Works
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="rounded-2xl hover:bg-gray-300 transition"
            >
              <span className="text-3xl font-semibold">←</span>
            </button>
            <button
              onClick={handleNext}
              className="rounded-2xl hover:bg-gray-300 transition "
            >
              <span className="text-3xl font-semibold">→</span>
            </button>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6   ">
          {visibleWorks.map((work, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-300  dark:bg-gray-900  "
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-36 object-cover rounded-t-lg"
              />
              <div className="p-4 ">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 dark:text-gray-300">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2 dark:text-gray-300">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {work.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-2">
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                  {work.live && (
                    <a
                      href={work.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden bg-white-900 shadow-lg whitespace-nowrap border-t  dark:border-cyan-500 border py-5 ">
          <div className="animate-marquee text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
            <span className="mx-6">
              🚀 Let’s work together # Development # Sanaullah @khonzada
            </span>
            <span className="mx-6">🚀 Let’s work together</span>
            <span className="mx-6"># Development</span>
            <span className="mx-6"># Sanaullah @khonzada</span>
            <span className="mx-6">
              # sanaullahakhonzada289@gmail.com #03498026152
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
