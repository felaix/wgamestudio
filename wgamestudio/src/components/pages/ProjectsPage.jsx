import React from "react";
import Game from "../Game.jsx";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col h-svh w-screen bg-slate-950 rounded shadow-lg p-10 m-10">

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
    );
}

export default ProjectsPage;
