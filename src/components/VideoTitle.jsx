import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex ">
        <button className="bg-gray-400 text-white text-xl p-4 mx-2 px-12 flex justify-center rounded-lg">
          <FaPlay className="mx-2 mt-1" />
          Play
        </button>
        <button className="bg-gray-400 text-white text-xl p-4 px-12 flex justify-center rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
