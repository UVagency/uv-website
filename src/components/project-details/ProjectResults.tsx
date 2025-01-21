import React from 'react';

const ProjectResults = () => {
  return (
    <div className="mb-16 bg-gradient-to-br from-[#7FD1CC]/10 to-white p-8 rounded-2xl">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">RESULTS</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-[#7FD1CC] font-bold">→</span>
          <span className="text-gray-700 font-medium">+2,000 FAMILIES BENEFITED</span>
        </li>
        <li className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-[#7FD1CC] font-bold">→</span>
          <span className="text-gray-700 font-medium">115 TRADITIONAL MEDIA MENTIONS</span>
        </li>
        <li className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-[#7FD1CC] font-bold">→</span>
          <span className="text-gray-700 font-medium">70K USD IN EARNED MEDIA VALUE</span>
        </li>
        <li className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-[#7FD1CC] font-bold">→</span>
          <span className="text-gray-700 font-medium">+5,000,000 DIGITAL REACH</span>
        </li>
        <li className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-[#7FD1CC] font-bold">→</span>
          <span className="text-gray-700 font-medium">+78% DIGITAL COVERAGE</span>
        </li>
        <li className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-[#7FD1CC] font-bold">→</span>
          <span className="text-gray-700 font-medium">+1,000 ATTENDEES AT EVENT</span>
        </li>
        <li className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-[#7FD1CC] font-bold">→</span>
          <span className="text-gray-700 font-medium">1.5M REACH WITH UGC AT EVENT</span>
        </li>
      </ul>
    </div>
  );
};

export default ProjectResults;