import React from "react";
import Tags from "./utils/Tags.jsx";  
import { FaItchIo } from "react-icons/fa";
import OpenURLButton from "./utils/OpenURLButton.jsx";

const Game = ({ coverSrc, title, description, itchUrl, tags }) => {
  return (
    <div className="w-full h-auto bg-slate-700 flex flex-col md:flex-row rounded-lg shadow-lg my-2">

      {/* Cover Image */}
      <img src={coverSrc} alt={title} className="rounded h-auto w-auto" />

      {/* Title & Description */}
      <div className="p-2 md:w-1/3">
        <p className="text-lg text-white font-semibold">{title}</p>
        <p className="text-slate-200">{description}</p>

        {/* Itch.io Button for Desktop */}
        <div className="hidden md:block">
          <OpenURLButton
            icon={<FaItchIo />}
            text="Visit on Itch.io"
            url={itchUrl}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="md:w-1/3 justify-end justify-items-end p-2">
        <p className="text-white font-semibold text-lg">Tags</p>
        <ul className="grid grid-cols-2">
          {tags.map((tag, index) => (
            <li key={index} className=""><Tags text={tag} /></li>
          ))}
        </ul>
      </div>

      {/* Itch.io Button for Mobile */}
      <div className="md:hidden">
        <OpenURLButton
          icon={<FaItchIo />}
          text="Visit on Itch.io"
          url={itchUrl}
        />
      </div>

    </div>
  );
}

export default Game;
