import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
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
    <div className="min-h-screen flex flex-col items-center justify-start p-4 mt-28">
      {/* Main Contact Box */}
      <div className="bg-white rounded-[2rem] shadow-xl w-full max-w-6xl overflow-hidden flex flex-col lg:flex-row mb-10  dark:bg-gray-900  dark:border-cyan-500 border">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            Let's talk
          </h2>
          <p className="mb-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg dark:text-gray-300">
            To request a quote or want to meet up for coffee, contact us
            directly or fill out the form and we will get back to you promptly.
          </p>
          {/* Added onSubmit handler here */}
          <form className="space-y-4 " onSubmit={sendEmail}>
            <input
              type="text"
              name="name" // added name attribute for EmailJS
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500  dark:bg-gray-900  dark:border-cyan-500 border"
              required
            />
            <input
              type="email"
              name="email" // added name attribute for EmailJS
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500  dark:bg-gray-900  dark:border-cyan-500 border"
              required
            />
            <textarea
              name="message" // added name attribute for EmailJS
              placeholder="Type something if you want..."
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500  dark:bg-gray-900  dark:border-cyan-500 border"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition  dark:bg-gray-900  dark:border-cyan-500 border"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full lg:w-1/2 bg-white relative p-10 flex flex-col items-start justify-center  dark:bg-gray-900  ">
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
              className="w-72 h-56  rounded-xl"
            />
          </div>
          <div className="space-y-2 text-gray-600 max-w-2xl mx-auto text-base md:text-md dark:text-gray-300">
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
            <div className="flex items-center gap-2">
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

      {/* ✅ Quick Response Section */}
      <div className="w-full max-w-5xl mb-10  dark:bg-gray-900  ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 dark:text-gray-300 ">
          Quick Response
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  dark:bg-gray-900  dark:border-cyan-500 border">
          {/* Card 1: Call Us */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center  dark:bg-gray-900  dark:border-cyan-500 border   ">
            <div className="text-slate-600 mb-4  dark:text-gray-300">
              <svg
                className="mx-auto w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 
                1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 
                .45 1 1v3.5c0 .55-.45 1-1 
                1C9.39 22 2 14.61 2 5c0-.55.45-1 
                1-1H6.5c.55 0 1 .45 1 1 
                0 1.24.2 2.45.57 3.57.11.35.03.74-.24 
                1.02l-2.2 2.2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-700 dark:text-gray-300">+92 498026152</p>
          </div>

          {/* Card 2: Visit Us */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center  dark:bg-gray-900  dark:border-cyan-500 border">
            <div className="text-slate-600 mb-4 dark:text-gray-300">
              <svg
                className="mx-auto w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 
                9c0 5.25 7 13 7 
                13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">
              Visit Us
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Software Technology Park Kotli Azad Kashmir
            </p>
          </div>

          {/* Card 3: Mail Us */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center  dark:bg-gray-900  dark:border-cyan-500 border">
            <div className="text-slate-600 mb-4 dark:text-gray-300">
              <svg
                className="mx-auto w-10 h-10"
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
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">
              Mail Us
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              sanaullahakhonzada289@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full max-w-7xl h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.6434459603293!2d-72.71524808454424!3d41.73725677923439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e653c37284e4e5%3A0xc7a6f90f2c84ed9b!2s151%20New%20Park%20Ave%2C%20Hartford%2C%20CT%2006106%2C%20USA!5e0!3m2!1sen!2s!4v1684532891884!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
