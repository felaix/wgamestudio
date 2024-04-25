import React from "react";
import Game from "../Game.jsx";
import SortGameButton from "../utils/SortGameButton.jsx"

const ProjectsPage = () => {
    return (
        <>
        
        <div className="w-full flex md:flex-row portrait:flex-col portrait:hidden items-center justify-center">
            <SortGameButton text="All" ></SortGameButton>
            <SortGameButton text="Hacking" ></SortGameButton>
            <SortGameButton text="Unreal Engine" ></SortGameButton>
            <SortGameButton text="Blender" ></SortGameButton>
            <SortGameButton text="Textured" ></SortGameButton>
            <SortGameButton text="2D" ></SortGameButton>
            <SortGameButton text="3D" ></SortGameButton>
            <SortGameButton text="Unity" ></SortGameButton>
            <SortGameButton text="Cards" ></SortGameButton>
            <SortGameButton text="Jump&Run" ></SortGameButton>
        </div>

        <div className="overflow-scroll overflow-x-hidden flex flex-col h-svh w-full bg-slate-950 rounded shadow-lg p-10 m-10">

            <div className="flex h-auto w-auto">
                <Game
                    coverSrc="https://img.itch.zone/aW1nLzEyOTIwMTU0LnBuZw==/315x250%23c/0BJaMQ.png"
                    title="Escape"
                    description="Escape is a psychoterror hacking simulator. Use the instructions from your kidnapper to hack your way out of a basement"
                    itchUrl="https://felaix.itch.io/escape"
                    tags={['Hacking Simulator', 'Unreal Engine', 'Blender', 'Textured']}
                />
            </div>

            <div className="flex h-auto w-auto">
                <Game
                    coverSrc="https://img.itch.zone/aW1nLzEyOTIwMTU0LnBuZw==/315x250%23c/0BJaMQ.png"
                    title="Escape"
                    description="Description"
                    itchUrl="https://felaix.itch.io/escape"
                    tags={['a', 'b', 'c']}
                />
            </div>

            <div className="flex h-auto w-auto">
                <Game
                    coverSrc="https://img.itch.zone/aW1nLzEyOTIwMTU0LnBuZw==/315x250%23c/0BJaMQ.png"
                    title="Escape"
                    description="Description"
                    itchUrl="https://felaix.itch.io/escape"
                    tags={['a', 'b', 'c']}
                />
            </div>

        </div>
        </>
    );
}

export default ProjectsPage;
