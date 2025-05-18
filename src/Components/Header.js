import React from "react";
import { BsAlexa } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full px-32 py-4 bg-white shadow-md">
        <h1 className="text-3xl flex font-bold text-[#e1b869]">
          Cartic <BsAlexa />
        </h1>
        <div>
          <ul className="flex gap-10 font-bold cursor-pointer ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#e1b869] after:bg-[#e1b869] after:w-full"
                    : "after:bg-[#e1b869]"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/allproducts"
              className={({ isActive }) =>
                `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#e1b869] after:bg-[#e1b869] after:w-full"
                    : "after:bg-[#e1b869]"
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#e1b869] after:bg-[#e1b869] after:w-full"
                    : "after:bg-[#e1b869]"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#e1b869] after:bg-[#e1b869] after:w-full"
                    : "after:bg-[#e1b869]"
                }`
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
