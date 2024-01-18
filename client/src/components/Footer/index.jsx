import React from "react";

export default function Footer() {
  return (
    <footer className="g-gray-100 p-4 shadow mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-700">
              Quick Links
            </span>
            <a
              href="#"
              className="mt-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="mt-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="#"
              className="mt-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="mt-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-700">
              Follow Us
            </span>
            <a
              href="#"
              className="mt-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Facebook
            </a>
            <a
              href="#"
              className="mt-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Twitter
            </a>
            <a
              href="#"
              className="mt-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-4">
          &copy; 2023 Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
