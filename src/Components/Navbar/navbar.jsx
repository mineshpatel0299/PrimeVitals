import Logo from "../../assets/logo.png";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <nav
      className="shadow-lg sticky top-0 z-50 text-xl bg-[#218ab8] "
      // style={{ backgroundColor: "#218ab8" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="VHL Logo" className="h-20 md:h-24" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium text-white hover:text-gray-300 ${
                  isActive ? " border-b-2 border-white" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium text-white hover:text-gray-300 ${
                  isActive
                    ? " border-b-2 border-white"
                    : " border-b-2 border-transparent"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/packages"
              className={({ isActive }) =>
                `font-medium text-white hover:text-gray-300 ${
                  isActive
                    ? " border-b-2 border-white"
                    : " border-b-2 border-transparent"
                }`
              }
            >
              Packages
            </NavLink>
            <NavLink
              to="/corporate"
              className={({ isActive }) =>
                `font-medium text-white hover:text-gray-300 ${
                  isActive
                    ? " border-b-2 border-white"
                    : " border-b-2 border-transparent"
                }`
              }
            >
              Corporate Activities
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-medium text-white hover:text-gray-300 ${
                  isActive
                    ? " border-b-2 border-white"
                    : " border-b-2 border-transparent"
                }`
              }
            >
              Blog
            </NavLink>
            {/* <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium hover:text-blue-600 ${
                  isActive ? "text-white" : "text-gray-700"
                }`
              }
            >
              Contact
            </NavLink> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-darkblue"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              className="bg-white hover:text-darkblue text-sky-600 px-6 py-2 rounded-full font-medium"
              onClick={handleClick}
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-darkblue hover:bg-blue-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/packages"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                to="/corporate"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Corporate Activities
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
                onClick={handleClick}
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
