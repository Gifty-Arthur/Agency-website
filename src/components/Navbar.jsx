import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
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
      <nav>
        <div>
          <a href="">
            <img
              className="w-14  inline-block items-center "
              src={Logo}
              alt=""
            />
          </a>
          {/* nav items for large screens */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ Link, path }) => (
              <Link
                to={path}
                spy={true}
                smoth={true}
                offset={-100}
                key={path}
                className="block text-base text"
              >
                {Link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
