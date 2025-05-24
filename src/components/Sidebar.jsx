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
    },
    {
      name: "Explore",
      icon: <BiSearch size={25} />,
    },
    {
      name: "Notifications",
      icon: <BiBell size={25} />,
    },
    {
      name: "Messages",
      icon: <BiMessageSquare size={25} />,
    },
    // {
    //   name: "Grok",
    //   icon: "'",
    // },
    {
      name: "Bookmarks",
      icon: <LuBookMarked size={25} />,
    },
    {
      name: "Communities",
      icon: <FaUsers size={25} />,
    },
    {
      name: "Premium",
      icon: <BsTwitterX size={25} />,
    },
    {
      name: "Verified Orgs",
      icon: <ImShocked size={25} />,
    },
    {
      name: "Profile",
      icon: <BiUser size={25} />,
    },
    {
      name: "More",
      icon: <HiDotsCircleHorizontal size={25} />,
    },
  ];

  return (
    <div className="fixed lg:h-screen lg:w-64 p-4 border-r border-gray-200">
      <div className="ml-2 text-2xl font-bold mb-8">
        <BsTwitterX size={25} />
      </div>

      <ul className="lg:pe-8">
        {menuItems.map((item) => (
          <li key={item} className="mb-2 hover:bg-white/10 rounded-full">
            <a
              href="#"
              className="text-lg text-white font-semibold flex gap-3 items-center hover:bg p-2 rounded-full"
            >
              <div>{item.icon}</div>
              <span className="hidden lg:block ml-2">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <p className="hidden lg:block bg-white text-lg rounded-full w-full font-[500] text-black text-center py-3">
          Post
        </p>
        <div className="lg:hidden bg-white rounded-full p-4">
          <FaFeatherPointed color="black" size={16} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
