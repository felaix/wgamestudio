import React from "react";
import { FaHome, FaGamepad, FaUserFriends } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="bg-slate-800 fixed  w-auto h-auto pb-9 rounded shadow-lg justify-center items-center flex-row">

                {/* head */}
                <div className="rounded-t-md w-full h-12 z-50 bg-slate-700 text-slate-50 flex text-center items-center justify-center">
                    <p className="px-2"></p>
                    <FaHome className=""></FaHome> 
                    <p className="px-2">Home</p>

                    <p className="self-stretch w-full px-2"></p>

                    <div className="rounded-full w-6 h-6 bg-slate-500 py-3 px-3 m-2"></div>

                </div>



                <p className="text-3xl font-semibold text-slate-50 pt-4 px-4 text-center">Welcome to WGames</p>
                <p className="text-lg text-slate-200 px-6 text-center">Hi, I'm Felix, a solo game developer</p>
                <p className="text-xl text-slate-100 px-6 py-2 pt-4 text-center">I'm glad to see you here!</p>
                <p className="text-xl text-slate-100 px-6 py-1 text-center">My portfolio reflects my passion for game development. Feel free to explore it.</p>
                <p className="text-xl text-slate-100 px-6 py-1 text-center">Browse my latest releases, learn more about me, or get in touch to collaborate on future projects.</p>           </div>

        </>
    )
}

export default Home;