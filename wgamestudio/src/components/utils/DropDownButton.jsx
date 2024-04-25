import React, { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const DropDownButton = ({ title, contentText }) => {
    const [isHidden, setIsHidden] = useState(true);

    const toggleTextVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className="flex w-full h-auto flex-col px-20">
            <div
                onClick={toggleTextVisibility}
                className="bg-slate-600 hover:bg-slate-500 rounded flex w-full h-9 justify-center items-center text-white gap-4 m-2"
            >
                <MdOutlineArrowDropDownCircle />
                <p>{title}</p>
            </div>
            {isHidden ? null : (
                <p className="contenttext text-center">{contentText}</p>
            )}
        </div>
    );
};

export default DropDownButton;
