import {React, useState} from "react";

const NavigationButton = ({targetUrl = "", activeLocation = "", text=""}) => {

    const [isSelected, setIsSelected] = useState(false);

    let IsActive = targetUrl === activeLocation

    const IsActivePath = () => {
        targetUrl === activeLocation ? setIsSelected(true) : setIsSelected(false);
    }

    const OpenUrl = () => {
        window.open(targetUrl);
    }

    return (
        <>
        <script>{console.log("active url: " + IsActive + {activeLocation} + ", " + {targetUrl})} </script>
            <div className="justify-center items-center text-center bg-slate-900 rounded m-2 hover:bg-slate-800">
            <p onClick={() => OpenUrl()} className={`${ IsActive ? "text-xl" : "text-base"} ${ IsActive ? "text-white" : "text-slate-200"} p-2 m-2 ${ IsActive ? "underline" : ""} hover:cursor-pointer hover:text-white text-center ${ IsActive ? "hover:text-xl" : "hover-text:lg"}`}>{text}</p>
            </div>
        </>
    )
}

export default NavigationButton;
