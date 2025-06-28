import React from "react";
import ShortAbout from "./Shortabout";
import emailjs from "emailjs-com";
import { Link, NavLink } from "react-router-dom";
import AnimatedText from "./AnimatedText";
const Herosection = () => {
  const services = [
    {
      title: "Web Development",
      icon: "/images/web-dev.webp",
    },
    {
      title: "API's Development",
      icon: "/images/api-2.webp",
    },
    {
      title: "Web Design",
      icon: "/images/web-design.png",
    },
    {
      title: "Graphic Design",
      icon: "/images/grapic.png",
    },
  ];
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_68pc8mj", // Your Service ID
        "template_q3nuhlk", // Your Template ID (replace with your actual template ID)
        e.target,
        "DQinYqnN4w9xKtqlW" // Your Public Key (replace with your actual public key)
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="overflow-x-hidden">
      <>
        <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 py-5 max-w-7xl mx-auto ">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2 lg:pt-20">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 dark:text-gray-300">
              Hi, I'm{" "}
              <span className=" text-indigo-600 dark:text-indigo-600 ">
                <AnimatedText />
              </span>
            </h1>
            <h3 className="text-xl sm:text-3xl font-bold text-gray-800 dark:text-cyan-400 mb-6">
              <span className="text-indigo-500">Trust Me</span> I'm software
              Engineer
            </h3>
            <p className="text-lg text-gray-700  dark:text-gray-300 mb-8">
              I build clean, modern websites and web apps with a focus on
              performance and user experience.
            </p>
            <Link
              to="/works"
              className="inline-block bg-indigo-600 text-white dark:text-cyan-400  px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              View My Work
            </Link>
          </div>

          {/* Image */}
          <div
            className="pt-[10px] sm:pt-[10px] md:w-1/2 lg:pt-24  "
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <img
              src="/images/pic.jpeg"
              alt="Profile"
              className="max-w-sm mx-auto rounded-3xl shadow-lg h-96 w-full"
            />
          </div>
        </section>
        <ShortAbout />
        {/* Services Section */}
        <div className="bg-white-900 shadow rounded-2xl p-6 md:p-10 mt-10 mx-10 dark:bg-gray-900 transition-colors duration-300 ">
          <div className="flex justify-between items-center mb-6 ">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 ">
              Services I Offered
            </h2>
            <a
              href="/services"
              className="text-blue-600 hover:underline text-sm md:text-base font-medium flex items-center"
            >
              See All Services
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100  rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:scale-[1.05] transition duration-400  dark:bg-gray-900 dark:border-cyan-500 border duration-300 "
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-20 h-20 mb-3"
                />
                <p className="text-lg font-medium text-gray-700  dark:text-gray-100 ">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="min-h-screen flex flex-col items-center justify-start p-4 mt-24">
          <div className="bg-white rounded-[2rem] shadow-xl w-full max-w-6xl overflow-hidden flex flex-col lg:flex-row mb-10  dark:bg-gray-900 dark:border-cyan-500 border dark:text-white">
            {/* Left: Form */}
            <div className="w-full lg:w-1/2 p-10 ">
              <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                Let's talk
              </h2>
              <p className="mb-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg   dark:text-gray-300 ">
                To request a quote or want to meet up for coffee, contact us
                directly or fill out the form and we will get back to you
                promptly.
              </p>
              {/* Added onSubmit handler here */}
              <form className="space-y-4 " onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name" // added name attribute for EmailJS
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500  dark:bg-gray-900 dark:border-cyan-500 border  dark:text-gray-100  "
                  required
                />
                <input
                  type="email"
                  name="email" // added name attribute for EmailJS
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500  dark:bg-gray-900 dark:border-cyan-500 border"
                  required
                />
                <textarea
                  name="message" // added name attribute for EmailJS
                  placeholder="Type something if you want..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500  dark:bg-gray-900 dark:border-cyan-500 border"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition  dark:bg-gray-900 dark:border-cyan-500 border"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="w-full lg:w-1/2 bg-white relative p-10 flex flex-col items-start justify-center  dark:bg-gray-900 ">
              <div
                className="w-full flex justify-center mb-6"
                data-aos="zoom-out"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="false"
              >
                <img
                  src="/images/contact.jpg"
                  alt="Envelope Icon"
                  className="w-72 h-56 rounded-xl "
                />
              </div>
              <div className="space-y-2 text-gray-600 max-w-2xl mx-auto text-base md:text-md  dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  Software Technolgoy Park Kotli Aj&k
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 
                1.12.37 2.33.57 3.57.57.55 0 1 .45 
                1 1v3.5c0 .55-.45 1-1 
                1C9.39 22 2 14.61 2 
                5c0-.55.45-1 1-1H6.5c.55 
                0 1 .45 1 1 0 1.24.2 2.45.57 
                3.57.11.35.03.74-.24 
                1.02l-2.2 2.2z"
                    />
                  </svg>
                  +92498026152
                </div>
                <div className="flex items-center gap-2  ">
                  <svg
                    className="w-4 h-4 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 4H4c-1.1 0-2 
                .9-2 2v12c0 1.1.9 2 2 
                2h16c1.1 0 2-.9 
                2-2V6c0-1.1-.9-2-2-2zM4 
                8l8 5 8-5v-.01L12 13 4 7.99V8z"
                    />
                  </svg>
                  sanaullahakhonzada289@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Herosection;
