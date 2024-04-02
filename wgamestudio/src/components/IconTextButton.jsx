import React from "react";
import { IconContext } from "react-icons";


const IconTextButton = ({text, icon: Icon, isSelected, onClick}) => {
    return (
        <>
        <div className={`flex w-full flex-row justify-left items-center p-2 hover:bg-blue-400 hover:cursor-pointer ${isSelected ? "bg-blue-400" : "bg-transparent"}`} onClick={onClick}>
            <IconContext.Provider value={{ size: "1.5em", color: "white" }}>
                <Icon />
            </IconContext.Provider>
            <a href="#" className="text-white p-2 text-xl">{text}</a>
        </div>
        </>
    )
}

export default IconTextButton;