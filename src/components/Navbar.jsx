import React, { useState } from "react";
import { FaGripVertical, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center relative">
      {/* Left Section */}
      <div className="flex justify-start gap-4 items-center p-[10px] lg:ml-11">
        <img
          src="./assets/bluestock-assets/misc/logo.png"
          alt="Logo"
          className="lg:w-[80px] w-[60px] aspect-auto"
          draggable="false"
        />
        <span className=" font-bold lg:text-[45px] text-[25px] ">
          BLUESTOCK
        </span>

        {/* Desktop Links */}
        <div className="hidden lg:flex justify-between text-[15px] text-[#9A9A9A] font-semibold w-[400px] ml-8">
          <a href="/">Products</a>
          <a href="/">Pricing</a>
          <a href="/">Community</a>
          <a href="/">Media</a>
          <a href="/">Support</a>
        </div>
      </div>

      {/* Right Section (Desktop Only) */}
      <div className="hidden md:flex justify-center text-[15px] font-semibold p-4 gap-4 items-center mr-7">
        <a href="/" className="text-[#9A9A9A]">
          Sign In
        </a>
        <button className="text-white bg-[#3F52FF] px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
          Sign Up Now
        </button>
        <FaGripVertical className="text-2xl" />
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="text-2xl p-2 z-50"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaGripVertical />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 z-40 transition-transform duration-300">
          <a href="/" className="text-[20px] font-semibold">
            Products
          </a>
          <a href="/" className="text-[20px] font-semibold">
            Pricing
          </a>
          <a href="/" className="text-[20px] font-semibold">
            Community
          </a>
          <a href="/" className="text-[20px] font-semibold">
            Media
          </a>
          <a href="/" className="text-[20px] font-semibold">
            Support
          </a>
          <a
            href="/"
            className="text-white bg-[#3F52FF] px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Sign Up Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
