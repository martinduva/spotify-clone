"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

const Library = () => {
  const onClick = () => {
    // TODO: Handle upload
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <BiLibrary className="text-neutral-400" size={26} />
          <p className="font-medium text-neutral-400">Your Library</p>
        </div>
        <button
          className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
          onClick={onClick}
        >
          <AiOutlinePlus size={20} />
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-y-2 px-3">List of Songs!</div>
    </div>
  );
};

export default Library;
