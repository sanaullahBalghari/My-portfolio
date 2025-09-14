import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaStar,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const statsData = [
  { label: "Year of Experience", value: 2 },
  { label: "Project Completed", value: 10 },
  { label: "Happy Client", value: 7 },
];

const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "TailwindCSS",
  "JavaScript",
  "React",
  "Python",
  "Django",
  "DRF",
  "Nodejs",
  "Nextjs",
  "Software Doucmentation",
];

// const clients = [
//   {
//     rating: 4,
//     description: "Excellent work, delivered on time and exceeded expectations.",
//     Name: "Sajid Ali",
//   },
//   {
//     rating: 3,
//     description: "Very professional and skilled. Will work again!",
//   },
//   {
//     rating: 4,
//     description: "Fantastic experience, highly recommend!",
//   },
// ];

// Counter Component
const Counter = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {typeof end === "number" && end === 100 ? "%" : "+"}
    </span>
  );
};

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/myCv.pdf"; // CV file must be in the public/ folder
    link.download = "My-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-18 p-6 md:p-10 lg:px-20 flex flex-col lg:flex-row gap-10 lg:overflow-y-auto   ">
      {/* Profile Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full lg:w-1/3 text-center  dark:bg-gray-900 dark:text-gray-300">
        <img
          src="/images/pic.jpeg"
          alt="Profile"
          className="w-full  mx-auto rounded-2xl object-cover h-[400px]"
        />
        <h2 className="text-2xl font-semibold mt-4 ">Sanaullah</h2>
        <p className="text-gray-500 ">Full Stack Developer</p>
        <div className="mt-4 space-y-2">
          <p className="flex items-center justify-center gap-2 text-sm">
            <FaWhatsapp /> +92 3498026152
          </p>
          <p className="flex items-center justify-center gap-2 text-sm">
            <FaEnvelope /> sanaullahakhonzada289@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2 text-sm">
            <FaMapMarkerAlt /> Gilgit Baltistan, Pakistan
          </p>
        </div>
        <button
          onClick={handleDownload}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
        >
          Download CV
        </button>
        <div className="flex justify-center gap-4 mt-4 text-xl text-gray-600 dark:text-cyan-400">
          <FaGithub className="hover:text-black cursor-pointer" />
          <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex-1 space-y-10">
        {/* Intro */}
        <div>
          <h1 className="text-3xl sm:text-3xl font-bold">
            Hi, This Is <span className="text-blue-600">Sanaullah</span> 👋
          </h1>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto py-1 text-justify   dark:text-gray-300">
            I am a Full Stack Developer with skills in both front-end and
            back-end development. On the front end, I use HTML, CSS, Bootstrap,
            Tailwind CSS, JavaScript, and React to create clean, responsive, and
            user-friendly websites. On the back end, I work with Django and
            Django REST Framework to build strong and secure APIs. I enjoy
            building complete web applications and always try to write clean and
            efficient code. I love learning new things and improving my
            development skills every day.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-xl shadow   dark:bg-gray-900 dark:text-gray-300 dark:border-cyan-500 border "
            >
              <h2 className="text-2xl font-bold">
                <Counter end={item.value} />
              </h2>
              <p className="text-sm text-gray-600 ">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm  dark:bg-gray-900 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Trusted Clients Carousel */}
       
      </div>
    </div>
  );
}
