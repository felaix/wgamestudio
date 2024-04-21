import React, { useState } from "react";

const SortGameButton = ({ text }) => {
  const [isSelected, setSelected] = useState(true);

  const handleClick = () => {
    setSelected(!isSelected);
  };

  return (
    <div
      onClick={handleClick}
      className={`btn flex text-white w-auto h-auto p-2 m-2 text-center justify-center items-center hover:bg-blue-600 hover:cursor-pointer rounded ${isSelected ? "bg-slate-700" : "bg-blue-500"}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default SortGameButton;
