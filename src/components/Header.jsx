import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavItem } from "./NavItem";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cart_count = useSelector((state) => state.items).length;

  const NAV_ITEMS = [
    {
      to: "/",
      label: "Home",
      icon: FaHome,
    },
    {
      to: "/cart",
      label: `Cart (${cart_count})`,
      icon: FaShoppingCart,
    },
  ];

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 shadow-lg py-2"
          : "bg-gradient-to-r from-gray-900 to-gray-800 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="relative">
              <NavLink to={"/"}>
                <h1 className="text-2xl font-bold text-white">innotronics</h1>
              </NavLink>

              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-green-500 rounded-full"></span>
            </div>
            <p className="hidden md:block text-sm text-gray-300 ml-4">
              The ultimate electronic items store
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-2">
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 focus:outline-none text-white hover:text-green-500 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-screen opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export { Header };
