import React from "react";
import Tags from "./Tags.jsx";

const AboutPage = () => {
    return (
        <>
            <div className="h-full w-full flex items-center justify-center bg-gray-900">

                <div className="h-full flex flex-col bg-gray-900 md:w-2/3 w-full items-center p-2 text-gray-400">

                    {/* <Navigation></Navigation> */}

                    <div className="w-64 h-64 bg-slate-50 rounded-full flex"></div>

                    {/* Tags  */}
                    <div className="flex flex-row justify-center items-center">
                        <Tags text="Unity"></Tags>
                        <Tags text="C#"></Tags>
                        <Tags text="ReactJS"></Tags>
                    </div>

                    {/* Username */}
                    <h1 className="text-4xl p-2 text-gray-50">felaix</h1>

                    {/* Description */}
                    <p className="">Hello World!</p>
                    <p className="">I'm Felix, a solo game developer</p>
                    <p className="pb-4">feel free to check out my projects.</p>
                </div>
            </div>
        </>
    );
}

export default AboutPage;