import React from "react";

const OpenURLButton = ({ text, url, icon = null }) => {
  const openURL = () => {
    window.open(url, '_blank');
  };

  return (
    <div
      onClick={openURL}
      className="w-fit h-auto flex-row flex items-center bg-blue-500 text-white p-2 rounded text-center gap-2 m-2 hover:bg-blue-400 hover:cursor-pointer"
    >
      <p>{icon}</p>
      <p>{text}</p>
    </div>
  );
};

export default OpenURLButton;
