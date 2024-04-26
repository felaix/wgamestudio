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
            <SortGameButton text="Puzzle" ></SortGameButton>
            <SortGameButton text="Unity" ></SortGameButton>
            <SortGameButton text="Survival" ></SortGameButton>
            <SortGameButton text="Cards" ></SortGameButton>
            <SortGameButton text="C#" ></SortGameButton>
        </div>

        <div className="overflow-scroll overflow-x-hidden flex flex-col h-svh w-full bg-slate-900 rounded shadow-lg p-4 m-4">

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
                    coverSrc="https://img.itch.zone/aW1nLzEwMDQ4NjcyLmpwZw==/315x250%23c/TALVM7.jpg"
                    title="Cubes"
                    description="Cubes is a 3D low-poly Jump&Run with puzzle elements."
                    itchUrl="https://felaix.itch.io/cubes"
                    tags={['Jump&Run', 'Low Poly', 'Blender', 'Unreal Engine', 'Puzzle']}
                />
            </div>

            <div className="flex h-auto w-auto">
                <Game
                    coverSrc="https://img.itch.zone/aW1nLzEzOTA2NTIxLmpwZw==/315x250%23c/Kxss1T.jpg"
                    title="Survival Cats"
                    description="is a survival-card game. Search for ressources, craft weapons and defeat the rat king"
                    itchUrl="https://felaix.itch.io/stackcats"
                    tags={['Unity', 'C#', 'Cards', '2D', 'Survival']}
                />
            </div>

            <div className="flex h-auto w-auto">
                <Game
                    coverSrc="https://img.itch.zone/aW1nLzEzOTA2NTIxLmpwZw==/315x250%23c/Kxss1T.jpg"
                    title="Survival Cats"
                    description="is a survival-card game. Search for ressources, craft weapons and defeat the rat king"
                    itchUrl="https://felaix.itch.io/stackcats"
                    tags={['Unity', 'C#', 'Cards', '2D', 'Survival']}
                />
            </div>

        </div>
        </>
    );
}

export default ProjectsPage;
