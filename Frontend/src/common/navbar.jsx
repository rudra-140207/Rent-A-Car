import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { value: "Home", href: "/home" },
    { value: "About", href: "/about" },
    { value: "Services", href: "/services" },
    { value: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold">Pta Nhi</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            {menu.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    : "text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                {item.value}
              </NavLink>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          {menu.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.href}
              className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.value}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
