// components/Sidebar.jsx
import React from "react";
import {
  BiBell,
  BiHomeAlt,
  BiMessageSquare,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { CgCommunity } from "react-icons/cg";
import { FaFeatherPointed, FaUsers } from "react-icons/fa6";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { ImShocked } from "react-icons/im";
import { LuBookMarked } from "react-icons/lu";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Home",
      icon: <BiHomeAlt size={25} />,
      showOnMobile: true,
    },
    {
      name: "Explore",
      icon: <BiSearch size={25} />,
      showOnMobile: true,
    },
    {
      name: "Notifications",
      icon: <BiBell size={25} />,
      showOnMobile: true,
    },
    {
      name: "Messages",
      icon: <BiMessageSquare size={25} />,
      showOnMobile: true,
    },
    {
      name: "Profile",
      icon: <BiUser size={25} />,
      showOnMobile: true,
    },
    {
      name: "Bookmarks",
      icon: <LuBookMarked size={25} />,
      showOnMobile: false,
    },
    {
      name: "Communities",
      icon: <FaUsers size={25} />,
      showOnMobile: false,
    },
    {
      name: "Premium",
      icon: <BsTwitterX size={25} />,
      showOnMobile: false,
    },
    {
      name: "Verified Orgs",
      icon: <ImShocked size={25} />,
      showOnMobile: false,
    },
    {
      name: "More",
      icon: <HiDotsCircleHorizontal size={25} />,
      showOnMobile: false,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 lg:left-auto bg-black w-full flex flex-row lg:flex-col lg:h-screen lg:w-64 p-4 border-r border-gray-200">
      {/* Twitter/X logo - hidden on mobile */}
      <div className="hidden lg:block ml-2 text-2xl font-bold mb-8">
        <BsTwitterX size={25} />
      </div>

      {/* Menu items */}
      <ul className="lg:pe-8 flex flex-row lg:flex-col justify-between lg:justify-normal w-full">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${
              item.showOnMobile ? "flex" : "hidden lg:flex"
            } lg:mb-2 hover:bg-white/10 rounded-full`}
          >
            <a
              href="#"
              className="text-lg text-white font-semibold flex gap-3 items-center hover:bg p-2 rounded-full justify-center lg:justify-start"
            >
              <div>{item.icon}</div>
              <span className="hidden lg:block ml-2">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Post button */}
      <div className="hidden lg:block mt-5">
        <button className="bg-white text-lg rounded-full w-full font-[500] text-black text-center py-3 hover:bg-gray-200 transition">
          Post
        </button>
      </div>

      {/* Mobile post button (floating action button) */}
      <div className="lg:hidden bg-blue-500 rounded-full p-4 fixed bottom-20 right-5 hover:bg-blue-600 transition">
        <FaFeatherPointed color="white" size={16} />
      </div>
    </div>
  );
};

export default Sidebar;
