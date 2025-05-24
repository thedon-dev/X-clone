// components/RightSidebar.jsx
import React from "react";
import { FiSearch } from "react-icons/fi";

const RightSidebar = () => {
  const trends = [
    { category: "", title: "Wheel of Time", posts: "8,928 posts" },
    {
      category: "Business & Finance: Trending",
      title: "ERC-20",
      posts: "1,800 posts",
    },
    { category: "Sports: Trending", title: "Sasha", posts: "2,020 posts" },
  ];

  const suggestions = [
    {
      name: "DevTomiva auf +SRM ...",
      handle: "@_devTomiva",
      initial: "D",
    },
    {
      name: "Tollew",
      handle: "@join322226",
      initial: "T",
    },
    {
      name: "Iobistans",
      handle: "@kirawortmiss",
      initial: "I",
    },
  ];

  return (
    <div className="hidden lg:block w-80 ps-10">
      <div className="sticky top-0 h-screen overflow-y-auto noScroll pt-1 pb-4">
        {/* Search Bar */}
        <div className="mb-4 mt-3 relative">
          <div className=" border border-gray-700 rounded-full p-3 pl-10 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none w-full"
            />
          </div>
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <div className="border border-gray-800 rounded-xl mb-4">
          <h2 className="font-bold p-4 text-xl">Trends for you</h2>
          {trends.map((trend, index) => (
            <div
              key={index}
              className="p-4 transition-colors duration-200 cursor-pointer"
            >
              {trend.category && (
                <p className="text-gray-500 text-xs mb-1">{trend.category}</p>
              )}
              <p className="font-bold text-base">{trend.title}</p>
              <p className="text-gray-500 text-xs mt-1">{trend.posts}</p>
            </div>
          ))}
          <div className="p-4 text-blue-500 hover:bg-gray-800 cursor-pointer rounded-b-xl">
            Show more
          </div>
        </div>

        <div className="border border-gray-800 rounded-xl">
          <h2 className="font-bold p-4 text-xl">Who to follow</h2>
          {suggestions.map((user, index) => (
            <div
              key={index}
              className="p-4 hover:bg-gray-800 transition-colors duration-200 cursor-pointer flex justify-between items-center"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 p-5 bg-gray-700 rounded-full mr-3 flex items-center justify-center text-white">
                  {user.initial}
                </div>
                <div>
                  <p className="font-bold text-sm">{user.name}</p>
                  <p className="text-gray-500 text-sm">{user.handle}</p>
                </div>
              </div>
              <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors duration-200">
                Follow
              </button>
            </div>
          ))}
          <div className="p-4 text-blue-500 hover:bg-gray-800 cursor-pointer rounded-b-xl">
            Show more
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          <div className="flex flex-wrap gap-2">
            <span className="hover:underline cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Cookie Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Accessibility
            </span>
            <span className="hover:underline cursor-pointer">Ads info</span>
            <span className="hover:underline cursor-pointer">More</span>
          </div>
          <div className="mt-2">© 2025 X Corp.</div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
