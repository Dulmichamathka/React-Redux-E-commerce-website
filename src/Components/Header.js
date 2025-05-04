import React from "react";

const Header = () => {
  return (
    <div>
      <div className=" flex justify-between items-center   w-full px-32 py-4 bg-[#ffe6e6]">
        <h1 className="text-3xl font-bold text-[#e1b869]">FashionsBug</h1>
        <div>
          <ul className="flex gap-10 font-bold cursor-pointer ">
            <li className="relative hover:text-[#e1b869] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-1 after:bg-[#e1b869] after:transition-all after:duration-300">
              Home
            </li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
