import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Code2, Server, Lightbulb } from "lucide-react";

const ShortAbout = () => {
  return (
    <section className="  px-4 md:px-20 text-gray-900 dark:text-teal-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Icons */}
        <div
          className="grid md:grid-cols-3 gap-8 text-center mb-16 "
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <div>
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full border border-blue-400">
              <Code2 className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
            <p className="text-sm text-gray-700  dark:text-gray-300">
              Writing well-structured, maintainable code using modern frameworks
              and best practices in both frontend and backend development.
            </p>
          </div>
          <div>
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full border border-green-400">
              <Server className="text-green-500 " />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Scalable Architecture
            </h3>
            <p className="text-sm text-gray-700  dark:text-gray-300">
              Building robust and scalable backend systems that handle high
              traffic and provide seamless user experiences.
            </p>
          </div>
          <div>
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full border border-yellow-400">
              <Lightbulb className="text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Creative Solutions</h3>
            <p className="text-sm text-gray-700  dark:text-gray-300">
              Bringing innovative ideas to life through thoughtful UI/UX design
              and technical expertise across the full development stack.
            </p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="md:flex items-center gap-10">
          {/* Image and Stats */}
          <div
            className="relative mb-10 md:mb-0"
            data-aos="zoom-out-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <img
              src="/images/pic.jpeg"
              alt="Team Working"
              className="rounded-xl w-full max-w-md h-[430px] "
            />
            <div className="absolute top-4 left-4 bg-white shadow-md px-2 py-1 rounded-lg">
              <p className="text-green-600 text-lg font-bold">
                2{" "}
                <span className="text-sm font-normal text-gray-600 ">
                  Years of Success
                </span>
              </p>
            </div>
            <div className="absolute bottom-4 right-4 bg-white shadow-md px-3 py-1 rounded-lg">
              <p className="text-yellow-600 text-lg font-bold">
                10+{" "}
                <span className="text-sm font-normal text-gray-600">
                  Total Projects
                </span>
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div
            className="flex-1 text-justify"
            data-aos="zoom-out-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <h4 className="text-red-500  dark:text-indigo-500 font-medium mb-2">
              I'm a Software Engineer & Full Stack Developer
            </h4>
            {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">I Can Design Anything You Want</h2> */}
            <p className=" text-gray-700  dark:text-gray-300 mb-4">
              Hello there! I’m a software engineer and full stack developer,
              passionate and dedicated to my craft. I specialize in designing
              and building scalable, user-friendly applications that solve
              real-world problems.
            </p>
            <p className="text-gray-700   dark:text-gray-300 mb-6">
              With 2 years of experience in web development, I’ve honed the
              skills needed to deliver high-quality digital products. From
              front-end interfaces to back-end logic, I enjoy every step of the
              development lifecycle — from brainstorming and planning to coding
              and deployment.
            </p>
            <Link to="/about">
              <button className="bg-gray-500 hover:bg-gray-900 text-white px-6 py-2 rounded-full">
                More About
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
