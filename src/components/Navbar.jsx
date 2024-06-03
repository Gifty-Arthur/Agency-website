import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //navitems array
  const navItems = [
    { Link: "Home", path: "home" },
    { Link: "Service", path: "services" },
    { Link: "About", path: "about" },
    { Link: "Product", path: "product" },
    { Link: "Testimonials", path: "testimonials" },
    { Link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 right-0 ">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="">
            <img
              className="w-14  inline-block items-center "
              src={Logo}
              alt=""
            />
          </a>
          {/* nav items for large screens */}
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ Link, path }) => (
              <Link
                to={path}
                spy={true}
                smoth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
              >
                {Link}
              </Link>
            ))}
          </ul>

          {/* btn for large device */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandprimary hover:text-gray900"
            >
              Login
            </a>
            <button
              className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300
            rounded hover:bg-neutralDGrey"
            >
              Sign Up
            </button>
          </div>
          {/* menu btn for only mobile device */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
        {/*  navitems for mobile devices*/}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0-left-0 w-full" : "hidden"
          }`}
        >
          {navItems.map(({ Link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-brandPrimary first:font-medium"
            >
              {Link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
