import { MdOutlineArrowDropDownCircle } from "react-icons/md";

import React from "react"

const DropDownButton = ({ text = "" }) => {
    return (
        <>
            <div className="bg-blue-500 flex w-full h-9 justify-center items-center text-white gap-4 m-2">
            <MdOutlineArrowDropDownCircle />
            <p>{text}</p>
            </div>

        </>
    )
}

export default DropDownButton;