import React, { useState } from 'react'
import logo from "../assets/swamilogo.png"
import { Link } from "react-scroll"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { FaFacebook } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className="flex w-full bg-black  fixed justify-between items-center px-4 h-20   z-10 text-white">
                <div>
                    <img className="" width="80px" src={logo} />
                    {/* <h1>bhliv</h1> */}
                </div>

                <ul className="hidden md:flex">
                    <Link to="body" smooth={true} duration={1000} className="hover:cursor-pointer"> <li className="text-[#fa602d]">Home</li></Link>
                    <Link to=" " smooth={true} duration={1000} className="hover:cursor-pointer">  <li className="text-[#fa602d]">About Us</li></Link>
                    <Link to=" " smooth={true} duration={1000} className="hover:cursor-pointer" > <li className="text-[#fa602d]">Message</li></Link>
                    <Link to=" " smooth={true} duration={1000} className="hover:cursor-pointer">  <li className="text-[#fa602d]">Object</li></Link>

                </ul>
                {/* mobile dropdown */}
                <div onClick={handleNav} className="    md:hidden z-10">
                    {nav ? <AiOutlineClose size={25} /> : <HiOutlineMenuAlt4 size={25} />}

                </div>
                {/* mobile vale */}
                <div onClick={handleNav} className={nav ? " absolute text-black left-0 top-0 w-full bg-orange-100 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>
                    <ul>
                        <img className="items-center justify-between content-center" width="80px" src={logo} />
                        <li className="border-b border-black">Home</li>
                        <Link to=" " smooth={true} duration={1000} className="hover:cursor-pointer">  <li className="border-b border-black">About Us </li></Link>
                        <Link to=" " smooth={true} duration={1000} className="hover:cursor-pointer">  <li className="border-b border-black">Message</li></Link>
                        <Link to=" " smooth={true} duration={1000} className="hover:cursor-pointer"> <li className="border-b border-black">Object</li></Link>


                        <div className="flex flex-col">
                            
                            <div className="flex justify-between my-6">
                                <a href="#" target="_blank" className="">   <FaFacebook className="icon text-3xl text-[#4267B2]" /></a>
                                <a href="mailto:swamivivekanandatrustkkr@gmail.com" target="_blank" className="">   <AiFillMail className="icon icon text-3xl text-red-800" /></a>
                              

                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;

