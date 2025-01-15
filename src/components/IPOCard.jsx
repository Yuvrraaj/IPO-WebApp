import React from "react";

const IPOCard = ({ ipoData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 font-poppins">
      {/* Company Name and Logo */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-3">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={`./assets/${ipoData.companyName.replace(/\s+/g, "-")}.png`}
            alt={ipoData.companyName}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Company Name */}
        <h2 className="mt-2 text-left lg:mt-0 lg:text-left text-lg lg:text-xl font-semibold text-blue-600 w-full">
          {ipoData.companyName}
        </h2>
      </div>

      {/* IPO Details */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-justify">
        <div>
          <p className="text-xs text-gray-500">PRICE BAND</p>
          <p className="text-sm font-semibold">{ipoData.priceBand}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">OPEN</p>
          <p className="text-sm font-semibold">{ipoData.openDate}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">CLOSE</p>
          <p className="text-sm font-semibold">{ipoData.closeDate}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">ISSUE SIZE</p>
          <p className="text-sm font-semibold">{ipoData.issueSize}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">ISSUE TYPE</p>
          <p className="text-sm font-semibold">{ipoData.issueType}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">LISTING DATE</p>
          <p className="text-sm font-semibold">{ipoData.listingDate}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="hidden lg:flex justify-center lg:justify-start space-x-3">
        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
          <a href={ipoData.rhpLink}>RHP</a>
        </button>
        <button className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
          <a href={ipoData.drhpLink}>DRHP</a>
        </button>
      </div>
    </div>
  );
};

export default IPOCard;
