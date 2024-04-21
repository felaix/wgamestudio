import React from "react";

const Tags = ({text}) => {
    return (
    <>
        <div className="flex rounded h-min w-auto bg-slate-600 text-white justify-center items-center text-center py-2 px-2 mx-1 my-2">
            <p className="text-center text-slate-200">{text}</p>
        </div>
    </>)
}

export default Tags