import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assects/Images/LOGO.jpg"













const Footer = () => {
  return (
    <div>
      <footer className="bg-white shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={Logo}
                className="h-8"
                Linklt="Foodster Logo"
              />
              <Link className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Foodster
              </Link>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">
                  about
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">
                  Privcy Policy
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline me-4 md:me-6">
                  login
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gay-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <Link className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="https://www.foodster.com" className="hover:underline">
              
            </Link>
            . All Rights Reserved.
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
