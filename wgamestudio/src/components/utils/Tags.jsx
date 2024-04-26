import React from "react";

const Tags = ({text}) => {
    return (
    <>
        <div className="flex rounded h-min w-auto bg-gray-700 text-white justify-center items-center text-center py-1 px-2 mx-1 my-4 hover:bg-blue-400">
            <p className="text-center text-slate-200">{text}</p>
        </div>
    </>)
}

export default Tags