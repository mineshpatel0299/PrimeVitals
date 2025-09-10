"use client"

import Logo from "../../assets/logo.png"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/contact")
  }

  return (
    <nav className="shadow-lg sticky top-0 z-50 bg-gradient-to-r from-[#218ab8] to-[#1a7ba3] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
              {/* REDUCED logo height to make the navbar smaller */}
              <img src={Logo || "/placeholder.svg"} alt="VHL Logo" className="h-16 md:h-20 drop-shadow-md" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium text-white hover:text-blue-100 transition-all duration-200 py-1 px-3 rounded-md hover:bg-white/10 ${
                  isActive ? "border-b-2 border-white bg-white/10" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium text-white hover:text-blue-100 transition-all duration-200 py-1 px-3 rounded-md hover:bg-white/10 ${
                  isActive ? "border-b-2 border-white bg-white/10" : ""
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/packages"
              className={({ isActive }) =>
                `font-medium text-white hover:text-blue-100 transition-all duration-200 py-1 px-3 rounded-md hover:bg-white/10 ${
                  isActive ? "border-b-2 border-white bg-white/10" : ""
                }`
              }
            >
              Packages
            </NavLink>
            <NavLink
              to="/corporate"
              className={({ isActive }) =>
                `font-medium text-white hover:text-blue-100 transition-all duration-200 py-1 px-3 rounded-md hover:bg-white/10 ${
                  isActive ? "border-b-2 border-white bg-white/10" : ""
                }`
              }
            >
              Corporate Activities
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-medium text-white hover:text-blue-100 transition-all duration-200 py-1 px-3 rounded-md hover:bg-white/10 ${
                  isActive ? "border-b-2 border-white bg-white/10" : ""
                }`
              }
            >
              Blog
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-100 p-1 rounded-md hover:bg-white/10 transition-all duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              className="bg-white hover:bg-blue-50 text-[#218ab8] px-6 py-1.5 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={handleClick}
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-sm border-t border-white/20 rounded-b-lg shadow-lg">
              <Link
                to="/"
                className="block px-4 py-2 text-[#218ab8] hover:text-[#1a7ba3] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-[#218ab8] hover:text-[#1a7ba3] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/packages"
                className="block px-4 py-2 text-[#218ab8] hover:text-[#1a7ba3] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                to="/corporate"
                className="block px-4 py-2 text-[#218ab8] hover:text-[#1a7ba3] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Corporate Activities
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-2 text-[#218ab8] hover:text-[#1a7ba3] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-[#218ab8] hover:text-[#1a7ba3] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                className="w-full mt-4 bg-[#218ab8] hover:bg-[#1a7ba3] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                onClick={handleClick}
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar