import React from 'react'
import pic from "../assets/pic1.png"

const Body = () => {
    return (
        <>
            <div className="">
                <div className="w-full h-screen relative">
                    <img id="" className="w-full h-full object-cover"
                        src={pic}
                    />

                </div>
                <div className="w-full h-full absolute top-0 bg-black/90"></div>
                <div className="absolute top-0 h-full w-full flex flex-col justify-center text-center text-white p-4 text-4xl">
                    <h1 className="textc font-light  text-orange-500">Swami Vivekananda Social Development And Charitable Trust </h1>
                    <h2 className="textc py-4  text-orange-500">Kurukshetra</h2>
                    <div className="flex justify-between items-center  text-center bg-orange-500 max-w-[300px] mx-auto w-full text-xl py-3  rounded-2xl   hover:bg-orange-800 transition duration-150 ease-out hover:ease-in  hover:cursor-pointer ">
                        <a href="mailto:swamivivekanandatrustkkr@gmail.com" target="_blank" className=" rounded-xl text-white  ml-14 ">You Can Mail Us</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Body;