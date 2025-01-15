import React from "react";
import Navbar from "../components/Navbar";
import IPOCard from "../components/IPOCard";
import ipoData from '../data/ipoData.json'
import FAQSection from "../components/FAQSection";
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/Footer";

const Ipo = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f6f5f5] overflow-hidden ">
        <div className="relative left-3 lg:left-[48px] p-4 ">
          <p className="flex items-center space-x-1">
            <a href="/" className="text-[#0000FF]">
              BlueStock
            </a>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <a href="/" className="text-[#0000FF]">
              IPO
            </a>
            <span>
              <MdKeyboardArrowRight />
            </span>
            Upcoming IPO
          </p>
          <p className="text-4xl font-semibold mt-5 mb-2">Upcoming IPO</p>
          <p className="text-sm font-light mb-5">
            Companies that have filled for an IPO with SEBI. Few details might
            be disclosed by the companies later.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[95vw] relative left-[12px] lg:left-[48px] p-3">
          {ipoData.slice(0, 12).map((ipo, index) => (
            <IPOCard key={index} ipoData={ipo} />
          ))}
        </div>
        <div className="relative left-3 lg:left-[48px] p-4 ">
          <p className="lg:text-4xl text-[20px] font-semibold mt-5 mb-2">
            Frequently Asked Questions?
          </p>
          <p className="text-sm font-light mb-5">
            Find answers to common questions that come in your mind related to
            IPO.
          </p>
        </div>
        <div className="relative left-3 lg:left-[48px] p-4">
          <FAQSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Ipo;
