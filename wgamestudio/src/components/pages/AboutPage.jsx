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


                    <DropDownButton title="test"
                        contentText="As a teenager, i loved creating games in RPG Maker
                        but then i met my first girlfriend and puberty">
                        </DropDownButton>
                    {/* <p className="text-xl text-white">About</p>
                        <p className="">My Story:</p>
                        <p className="">As a teenager, i loved creating games in RPG Maker</p>
                        <p className="">but then i met my first girlfriend and puberty</p>
                        <p className="">In may, 2020 i broke up with her</p>
                        <p className="">so i started game development instead</p>
                        <p className="">I joined a game design school</p>
                        <p className="">In 3 years I learned a lot about different tools, engines and professional game design</p>
                        <p className="">(i love programming the most tho)</p>
                        <p className="">There is always more to learn</p>
                        <p className="">And thats what i love about game development</p>
                        <p className="">Check them out  <Link hrefLang="/projects" className="hover:text-blue-500 text-slate-100">here</Link> </p> */}


                </div>
            </div>
        </>
    );
}

export default AboutPage;