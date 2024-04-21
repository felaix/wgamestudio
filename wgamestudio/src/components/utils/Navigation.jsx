import { React, useState } from "react";
import { useLocation } from 'react-router-dom';
import NavigationButton from "./NavigationButton.jsx";

const Navigation = () => {

    let location = useLocation().pathname;

    return (
        <>
            <script>{console.log(location)}</script>
            <div className="">
                <div className="w-full h-auto justify-center items-center flex flex-row text-white">
                    <NavigationButton text="About" targetUrl={"/about"} activeLocation={location}></NavigationButton>
                    <NavigationButton text="Projects" targetUrl={"/projects"} activeLocation={location}></NavigationButton>
                    <NavigationButton text="Partner" targetUrl={"/partner"} activeLocation={location}></NavigationButton>
                    <NavigationButton text="Legal" targetUrl={"/legal"} activeLocation={location}></NavigationButton>
                </div>
            </div>
        </>
    )
}

export default Navigation;
