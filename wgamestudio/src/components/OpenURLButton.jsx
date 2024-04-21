import React from "react";

const OpenURLButton = ({ text, url, icon = null }) => {
  const openURL = () => {
    window.open(url, '_blank');
  };

  return (
    <div
      onClick={openURL}
      className="w-fit h-auto flex-row flex items-center bg-slate-600 text-white p-2 rounded text-center gap-2 my-2 hover:bg-slate-500 hover:cursor-pointer"
    >
      <p>{icon}</p>
      <p>{text}</p>
    </div>
  );
};

export default OpenURLButton;
