// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for routing

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Hook for routing

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = (path: string) => {
    router.push(path); // Use router.push() for navigation
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-white dark:bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center cursor-pointer"
        >
          <img
            src="/mainlogo.png" // Ensure your logo has a transparent background
            alt="AloveBond Logo"
            className="h-8 mr-2" // Adjust the size of the logo
          />
          <span className="text-dark-900 dark:text-white text-2xl font-bold">
            AloveBond
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="text-dark-900 dark:text-white md:hidden text-xl focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div className={`md:flex ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex md:flex-row flex-col space-x-4 md:space-x-8">
            <li>
              <button
                onClick={() => handleNavLinkClick("/")}
                className="text-dark-900 dark:text-white hover:text-primary-500 transition duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("/about")}
                className="text-dark-900 dark:text-white hover:text-primary-500 transition duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("/signup")}
                className="text-dark-900 dark:text-white hover:text-primary-500 transition duration-300"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavLinkClick("/contact")}
            className="bg-primary-500 text-white py-2 px-6 rounded-lg hover:bg-primary-400 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
