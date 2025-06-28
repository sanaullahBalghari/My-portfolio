import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  return (
    <footer class="bg-gray-100  text-gray-600 bg-#bcf6d3  dark:bg-gray-900 dark:text-gray-300">
      <div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8  ">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 class="text-2xl font-bold ">MyPortfolio</h3>
            <p class="text-gray-400 mt-2">
              Crafting experiences with HTML&CSS Tailwind&Bootstrap javascript
              React python Django DRF & software Desing and Documentation.
            </p>
          </div>

          <div className="lg:ms-10 ">
            <h4 class="text-xl font-bold mb-4 ">Links</h4>
            <ul class="space-y-3">
              <li>
                <Link to="/" class="hover:text-blue-400 font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" class="hover:text-blue-400 font-semibold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" class="hover:text-blue-400 font-semibold">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/works" class="hover:text-blue-400 font-semibold">
                  Works
                </Link>
              </li>
              <li>
                <Link to="/contact" class="hover:text-blue-400 font-semibold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-xl font-bold mb-4">Follow Me</h4>
            <div class=" space-y-4">
              <a
                href="https://github.com/"
                target="_blank"
                class="hover:text-blue-400 flex gap-2 font-semibold"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2.03c-3.2.7-3.87-1.41-3.87-1.41-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.68.41.36.77 1.07.77 2.16v3.2c0 .31.21.66.79.56C20.71 21.42 24 17.1 24 12c0-6.35-5.15-11.5-12-11.5z" />
                </svg>
                Github
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                class="hover:text-blue-400 flex gap-2 font-semibold"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.3c-1 0-1.7-.8-1.7-1.7s.7-1.8 1.7-1.8 1.7.8 1.7 1.8c0 .9-.7 1.7-1.7 1.7zm14 12.3h-3v-5.5c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.8 1.4-.1.3-.1.7-.1 1.1v5.2h-3v-11h3v1.5c.4-.7 1.2-1.8 2.9-1.8 2.1 0 3.7 1.4 3.7 4.3v7z" />
                </svg>
                Linkedin
              </a>
              <a
                href="mailto:your@email.com"
                class="hover:text-blue-400 flex gap-2 font-semibold"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                instagram
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-xl font-bold mb-4"> Location</h4>
            <div className="flex items-center gap-2 hover:text-blue-400 font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              Soft Technology Park Kotli Aj&k
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
            <div className="flex items-center gap-2 hover:text-blue-400 font-semibold">
              <svg className="w-4 h-4 " fill="currentColor" viewBox="0 0 24 24">
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

        <div class="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2025 MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
