import React, { useState } from "react";

const Sidebar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="flex">
      <div
        className={`${
          isMenuVisible ? "w-64" : "w-16"
        } bg-gray-800 h-screen p-4 transition-width duration-300`}
      >
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none mb-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isMenuVisible && (
          <nav className="text-white">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Dashboard
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Users
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Settings
            </a>
          </nav>
        )}
      </div>
      <div className="flex-1 p-4">{/* Main content goes here */}</div>
    </div>
  );
};

export default Sidebar;
