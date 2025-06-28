import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaCogs,
} from "react-icons/fa";

function Header({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-xl fixed top-4 left-4 right-4 rounded-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-2xl font-bold animate-pulse text-blue-900 dark:text-white">
            <Link to="/">SANAULLAH</Link>
          </div>

          <div className="hidden md:flex space-x-6 font-semibold items-center">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-1"
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-1"
            >
              <FaUser /> About
            </Link>
            <Link
              to="/works"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-1"
            >
              <FaProjectDiagram /> Works
            </Link>
            <Link
              to="/services"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-1"
            >
              <FaCogs /> Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-1"
            >
              <FaEnvelope /> Contact
            </Link>

            <button
              onClick={() => setIsDark(!isDark)}
              className="text-gray-700 dark:text-yellow-300 text-xl"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none dark:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow rounded-b-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-2"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-2"
          >
            <FaUser /> About
          </Link>
          <Link
            to="/works"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-2"
          >
            <FaProjectDiagram /> Works
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-2"
          >
            <FaCogs /> Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-2"
          >
            <FaEnvelope /> Contact
          </Link>

          <div className="flex px-3 py-2 gap-3 text-gray-700 dark:text-yellow-300 text-xl">
            <button onClick={() => setIsDark(!isDark)}>
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
