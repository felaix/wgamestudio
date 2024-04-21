import { React, useState } from "react";
import IconTextButton from "./IconTextButton.jsx";
import { FaHome, FaGamepad, FaUserFriends } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import { GoLaw } from "react-icons/go";



const LeftSideBar = () => {

    const [selectedButton, setSelectedButton] = useState("Home");
    const [wrapped, setWrap] = useState(false);

    const CheckScreenWidth = () => {
        if (screen.width <= 900) setWrap(true); 
        else setWrap(false);
    };

    const handleButtonClick = (buttonText) => {
        setSelectedButton(buttonText);
    };

    return (
        <>

            <script>CheckScreenWidth();</script>

            <div className="bg-slate-800 h-full flex-col justify-top items-left">

                {/* logo */}
                {/* <div className="flex h-auto p-6">
                    <img src="src/assets/wstudiologo.png"></img>
                </div> */}

                {/* Responsive Wrap Button */}
                <IconTextButton
                    text="Wrap"
                    icon={FaUserFriends}
                    isSelected={selectedButton === "Wrap"}
                    onClick={() => setWrap(!wrapped)}
                ></IconTextButton>

                {/* Buttons */}
                { wrapped && (

                    <div>
                    
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
                    text="Partner"
                    icon={FaUserFriends}
                    isSelected={selectedButton === "Partner"}
                    onClick={() => handleButtonClick("Partner")}
                ></IconTextButton>

                <IconTextButton
                    text="Jobs"
                    icon={MdWork}
                    isSelected={selectedButton === "Jobs"}
                    onClick={() => handleButtonClick("Jobs")}
                    ></IconTextButton>

                <IconTextButton
                    text="Contact"
                    icon={GrContact}
                    isSelected={selectedButton === "Contact"}
                    onClick={() => handleButtonClick("Contact")}
                    ></IconTextButton>

                <IconTextButton
                    text="Legal"
                    icon={GoLaw}
                    isSelected={selectedButton === "Legal"}
                    onClick={() => handleButtonClick("Legal")}
                    ></IconTextButton>
                    </div>)
                    }
            </div>
        </>
    )
}

export default LeftSideBar;