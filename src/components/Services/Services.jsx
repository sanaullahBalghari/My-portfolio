import React, { useState } from "react";

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
    title: "Software Documentation",
    icon: "/images/db.webp",
  },
  {
    title: "Graphic Design",
    icon: "/images/grapic.png",
  },
];

const process = [
  { step: "Discovery", icon: "🔍" },
  { step: "Planning", icon: "📋" },
  { step: "Design", icon: "🎨" },
  { step: "Development", icon: "💻" },
  { step: "Launch", icon: "🚀" },
];

const faqData = [
  {
    question: "What do you need from me to start working on my project?",
    answer:
      "To begin, I need a clear project brief, your goals, timeline, and any references or assets you may have.",
  },
  {
    question: "Do I get any free hosting when I start a project with you?",
    answer:
      "Yes, I offer complimentary basic hosting for the first 3 months with most web projects.",
  },
  {
    question: "How quickly can you deliver an urgent project?",
    answer:
      "Depending on the scope, I can deliver urgent projects in as little as 48 hours.",
  },

  {
    question: "  Can you help if I’m unsure about my project requirements?",
    answer:
      "Yes, I can guide you through defining your project requirements and suggest the best solutions based on your goals and needs.",
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-28 px-4 md:px-10 font-sans ">
      {/* What I Can Do */}
      <div
        className="text-center mb-16 px-4"
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <h2 className="text-3xl md:text-3xl font-extrabold text-gray-800 mb-6 tracking-tight dark:text-gray-300">
          What I Can Do
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed md:leading-8 dark:text-gray-300">
          I specialize in transforming ideas into{" "}
          <span className="text-indigo-600 font-semibold">
            high-performing digital products
          </span>
          . Whether you need a{" "}
          <span className="text-indigo-600 font-semibold">
            full-scale website
          </span>
          , an intuitive{" "}
          <span className="text-indigo-600 font-semibold">UI/UX design</span>,
          or powerful{" "}
          <span className="text-indigo-600 font-semibold">APIs</span>,and{" "}
          <span className="text-indigo-600 font-semibold">
            Software Documentation
          </span>{" "}
          I’ve got the skills to bring your vision to life with precision and
          creativity.
        </p>
      </div>

      {/* Services */}
      <div className="bg-white shadow rounded-2xl p-6 mb-16  dark:bg-gray-900   ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 dark:text-gray-300">
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  ">
          {services.map((service, index) => (
            <div
              data-aos="flip-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              key={index}
              className="bg-gray-100 p-5 rounded-xl flex flex-col items-center hover:shadow-md hover:scale-[1.05] transition duration-400  dark:bg-gray-900  dark:border-cyan-500 border "
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-3 object-contain"
              />
              <h4 className="text-center text-base font-medium text-gray-700 dark:text-gray-300">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* My Workflow */}
      <div
        className="mb-20"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 dark:text-gray-300">
          My Workflow
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {process.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 text-3xl rounded-full flex items-center justify-center mb-2 dark:text-cyan-400">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.step}
              </p>
              {i < process.length - 1 && (
                <div className="hidden sm:block w-10 h-1 bg-gray-300 mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Me Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-20">
        {/* Image Left */}
        <div
          className="w-full lg:w-1/2"
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <img
            src="/images/why imge.webp"
            alt="Why Choose Me"
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>

        {/* Content Right */}
        <div
          className="w-full lg:w-1/2"
          data-aos="zoom-in-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-gray-300">
            Why Choose Me?
          </h3>
          <p className="text-gray-600 text-sm leading-6 text-justify md:text-lg dark:text-gray-300">
            I am dedicated to delivering high-quality digital solutions that are
            not only visually appealing but also functional and
            performance-driven. With a focus on user experience, I create
            products that are responsive, SEO-friendly, and easy to maintain. My
            approach involves clear communication, timely delivery, and a
            collaborative process that ensures your goals are always at the
            center of the project.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-20 ">
        {/* FAQ Left */}
        <div className="w-full lg:w-1/2  ">
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 dark:text-gray-300">
            Frequently Asked Questions
          </h4>
          <div className="space-y-4 ">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 p-5 rounded-xl cursor-pointer  dark:bg-gray-900  dark:border-cyan-500 border "
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                    {faq.question}
                  </h5>
                  <span className="text-xl font-bold text-blue-600">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-base text-gray-600 mt-2 text-justify dark:text-cyan-400">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Right */}
        <div
          className="w-full lg:w-1/2"
          data-aos="zoom-in-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <img
            src="/images/FQA imge.avif"
            alt="FAQ Visual"
            className="w-full rounded-xl"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-right pb-5  animate-bounce">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-blue-700 transition"
        >
          Let's Work Together
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
