import { React } from "react";
import Tags from "../utils/Tags.jsx";
import OpenURLButton from "../utils/OpenURLButton.jsx";
import DropDownButton from "../utils/DropDownButton.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaDiscord, FaInstagram, FaItchIo  } from "react-icons/fa";


const AboutPage = () => {
    return (
        <>

                <div className="h-auto w-auto shadow-lg border-blue-500 flex flex-col bg-gray-800 items-center justify-center p-10 pb-5 text-gray-400 border-2 border-solid rounded-md">

                    <div className="w-36 h-36 rounded-full z-0 border-blue-500 border-2">
                        <img className="rounded-full" src="/FGames_ProfilePicture_Blue.jpg"></img>
                    </div>

                    {/* Tags  */}
                    <div className="flex flex-row justify-center items-center">
                        <Tags text="Unity"></Tags>
                        <Tags text="C#"></Tags>
                        <Tags text="ReactJS"></Tags>
                    </div>

                    
                                        {/* Social Media */}
                                        <div className="flex flex-row">
                        <OpenURLButton text={"Mail"} url={"felaixessbach@gmail.com"} icon={<IoIosMail />} ></OpenURLButton>
                        <OpenURLButton text={"Discord"} url={"https://discord.gg/EgxUuhcc"} icon={<FaDiscord />} ></OpenURLButton>
                        <OpenURLButton text={"Instagram"} url={"https://www.instagram.com/fgamesdev/"} icon={<FaInstagram />} ></OpenURLButton>
                        <OpenURLButton text={"Itch"} url={"https://felaix.itch.io"} icon={<FaItchIo />} ></OpenURLButton>
                    </div>

                    {/* Username */}
                    <h1 className="text-1xl font-bold p-2 text-gray-50">FGames</h1>
                    <p>Unity C# Programmer</p>

                    {/* About & Interests */}
                    <div className="text-center justify-center flex flex-col items-center w-auto">
                        <h1 className="text-1xl font-bold p-4 text-gray-50">About</h1>
                        <p className="text-center">Hi! I'm Felix. I love the work and i do (and cats)</p>
                        <p className="text-center p-2">Feel free to check out my projects!</p>
                    </div>

                    <div className="text-center justify-center flex flex-row items-center w-auto pt-2 text-gray-500">
                        <p className="text-center px-2 hover:text-white hover:cursor-pointer hover:underline">Partner</p>
                        <p className="text-center px-2 hover:text-white hover:cursor-pointer hover:underline">Legal</p>
                        <p className="text-center px-2 hover:text-white hover:cursor-pointer hover:underline">Contact</p>
                    </div>


                    {/* Description
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
                    </DropDownButton> */}

                </div>
        </>
    );
}

export default AboutPage;