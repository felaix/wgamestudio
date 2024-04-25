import { React } from "react";
import Tags from "../utils/Tags.jsx";
import OpenURLButton from "../utils/OpenURLButton.jsx";
import DropDownButton from "../utils/DropDownButton.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";

const AboutPage = () => {
    return (
        <>
            <div className="h-full w-full flex items-center justify-center bg-gray-900">

                <div className="h-full flex flex-col bg-gray-900 md:w-2/3 w-full items-center p-2 text-gray-400">

                    <div className="w-64 h-64 rounded-full z-0 border-slate-200 border-solid border-x-4 border-y-4">
                        <img className="rounded-full" src="src/assets/FGames_ProfilePicture_Blue.jpg"></img>
                    </div>

                    {/* Tags  */}
                    <div className="flex flex-row justify-center items-center">
                        <Tags text="Unity"></Tags>
                        <Tags text="C#"></Tags>
                        <Tags text="ReactJS"></Tags>
                    </div>

                    {/* Username */}
                    <h1 className="text-4xl p-2 text-gray-50">FGames</h1>

                    {/* Description */}
                    <p className="">Hello World!</p>
                    <p className="">This is FGames, a solo game developer</p>
                    <p className="pb-4">feel free to check out my projects!</p>

                    <DropDownButton 
                        title="About me"
                        contentText="my hobby is to code different small projects for fun and playing call of duty (zombies) with my roommate.
                        I also like to read books and staring in seas
                        ">
                    </DropDownButton>

                    <DropDownButton 
                        title="My Story"
                        contentText="As a teenager, i loved creating games in RPG Maker,
                        but then i met my first girlfriend and puberty kicked in.
                        In may, 2020 we broke up, so i started game development instead :D
                        I joined a game design school and
                        in 3 years i learned a lot about different tools, engines and professional concept/game design
                        (i <3 programming the most tho)
                        ">
                    </DropDownButton>

                    <DropDownButton 
                        title="Social Media"
                        contentText="At the moment i don't use social media, but you can join my discord!
                        ">
                    </DropDownButton>

                </div>
            </div>
        </>
    );
}

export default AboutPage;