import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Admin</div>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            Profile
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1`}
            onMouseLeave={() => setIsOpen(false)}
          >
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Account
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
