// components/Feed.jsx
import React, { useState } from "react";
import {
  BiComment,
  BiHeart,
  BiLocationPlus,
  BiRepost,
  BiSolidHeart,
} from "react-icons/bi";
import tweetsData from "../dummyData/Posts";
import { FcGallery } from "react-icons/fc";
import { TbCalendarRepeat } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";

const Feed = () => {
  const [activeTab, setActiveTab] = useState("forYou");

  const [tweets, setTweets] = useState(tweetsData.forYou);
  const [likedTweets, setLikedTweets] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTweets(tab === "forYou" ? tweetsData.forYou : tweetsData.following);
  };

  const handleLike = (index) => {
    const tweetId = `${activeTab}-${index}`;
    console.log(tweetId);
    if (likedTweets.includes(tweetId)) {
      setLikedTweets(likedTweets.filter((id) => id !== tweetId));
      const updatedTweets = [...tweets];
      updatedTweets[index].reactions.likes -= 1;
      setTweets(updatedTweets);
    } else {
      setLikedTweets([...likedTweets, tweetId]);
      const updatedTweets = [...tweets];
      updatedTweets[index].reactions.likes += 1;
      setTweets(updatedTweets);
    }
  };

  const makePostIcons = [
    <GrGallery size={18} className="text-[#1d9bf0]" />,
    <TbCalendarRepeat size={20} className="text-[#1d9bf0]" />,
    <BiLocationPlus size={20} className="text-[#1d9bf0]" />,
  ];

  return (
    <div className="ml-20 lg:ml-64 flex-1 border-x border-gray-200">
      <div className="flex border-b border-gray-200/30 sticky top-0 z-10 backdrop-blur-sm bg-white/5 shadow-sm shadow-gray-200/20 bg-clip-padding">
        <button
          onClick={() => handleTabChange("forYou")}
          className={`cursor-pointer flex-1 text-center py-4 font-medium ${
            activeTab === "forYou"
              ? "border-b-4 border-blue-500 font-bold"
              : "text-white/30 "
          } transition-colors duration-200`}
        >
          For you
        </button>

        <button
          onClick={() => handleTabChange("following")}
          className={`cursor-pointer flex-1 text-center py-4 font-medium ${
            activeTab === "following"
              ? "border-b-4 border-blue-500 font-bold"
              : "text-white/30 "
          } transition-colors duration-200`}
        >
          Following
        </button>
      </div>

      <div className="border-b flex gap-5 p-3">
        <div>
          <div className="bg-gray-500 p-4 rounded-full w-12 h-12 flex items-center justify-center font-semibold">
            V
          </div>
        </div>
        <div className=" w-full pe-10">
          <input
            type="text"
            placeholder="What's happening?"
            className="text-lg focus:outline-none py-8 w-full"
          />
          <div className="py-3 flex justify-between  w-full items-center border-t">
            <div className="flex gap-5">
              {" "}
              {makePostIcons.map((icon, index) => (
                <div key={index} className="cursor-pointer">
                  {icon}
                </div>
              ))}{" "}
            </div>
            <div>
              <button className="bg-gray-500 rounded-full px-5 py-2 cursor-pointer">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {tweets.map((tweet, index) => (
        <div
          key={`${activeTab}-${index}`}
          className="p-4 border-b border-gray-200 transition-colors duration-150"
        >
          <div className="flex">
            <div className="mr-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 text-xl">
                  {tweet.user.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center">
                <span className="font-bold hover:underline cursor-pointer">
                  {tweet.user}
                </span>
                <span className="text-gray-500 ml-2">{tweet.handle}</span>
                <span className="text-gray-500 ml-2">· {tweet.time}</span>
              </div>
              <p className="mt-1 mb-2">{tweet.content}</p>

              <div className="flex justify-between max-w-md">
                <div className="flex items-center gap-1 text-gray-500 hover:text-blue-500 group">
                  <div className="p-2 rounded-full group-hover:bg-blue-50">
                    <BiComment />
                  </div>
                  <span className="text-sm">{tweet.reactions.comments}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 hover:text-green-500 group">
                  <div className="p-2 rounded-full group-hover:bg-green-50">
                    <BiRepost size={18} />
                  </div>
                  <span className="text-sm">{tweet.reactions.reposts}</span>
                </div>

                <div
                  className="flex items-center gap-1 text-gray-500 hover:text-pink-500 group cursor-pointer"
                  onClick={() => handleLike(index)}
                >
                  <div className="p-2 rounded-full group-hover:bg-pink-50">
                    {likedTweets.includes(`${activeTab}-${index}`) ? (
                      <BiSolidHeart className="text-pink-500" />
                    ) : (
                      <BiHeart size={18} />
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      likedTweets.includes(`${activeTab}-${index}`)
                        ? "text-pink-500"
                        : ""
                    }`}
                  >
                    {tweet.reactions.likes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
