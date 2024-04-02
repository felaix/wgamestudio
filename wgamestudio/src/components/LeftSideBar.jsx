import { React, useState } from "react";
import IconTextButton from "./IconTextButton.jsx";
import { FaHome, FaGamepad } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import { GoLaw } from "react-icons/go";



const LeftSideBar = () => {

    const [selectedButton, setSelectedButton] = useState("Home");

    const handleButtonClick = (buttonText) => {
        setSelectedButton(buttonText);
    };

    return (
        <>
            <div className="bg-slate-800 fixed left-0 top-0 h-full w-auto flex flex-col justify-top items-left">

                <div className="flex h-auto p-6">
                    <img src="src/assets/wstudiologo.png"></img>
                </div>

                <IconTextButton
                    text="Home"
                    icon={FaHome}
                    isSelected={selectedButton === "Home"}
                    onClick={() => handleButtonClick("Home")}
                ></IconTextButton>

                <IconTextButton
                    text="Games"
                    icon={FaGamepad}
                    isSelected={selectedButton === "Games"}
                    onClick={() => handleButtonClick("Games")}
                    ></IconTextButton>

                <IconTextButton
                    text="Team"
                    icon={RiTeamFill}
                    isSelected={selectedButton === "Team"}
                    onClick={() => handleButtonClick("Team")}
                    ></IconTextButton>

                <IconTextButton
                    text="Contact"
                    icon={GrContact}
                    isSelected={selectedButton === "Contact"}
                    onClick={() => handleButtonClick("Contact")}
                    ></IconTextButton>

                <IconTextButton
                    text="Jobs"
                    icon={MdWork}
                    isSelected={selectedButton === "Jobs"}
                    onClick={() => handleButtonClick("Jobs")}
                    ></IconTextButton>

                <IconTextButton
                    text="Legal"
                    icon={GoLaw}
                    isSelected={selectedButton === "Legal"}
                    onClick={() => handleButtonClick("Legal")}
                    ></IconTextButton>
            </div>
        </>
    )
}

export default LeftSideBar;