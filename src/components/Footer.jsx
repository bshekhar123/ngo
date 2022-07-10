import React from 'react'
import { FaFacebook, } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import logo from "../assets/swamilogo.png"


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="w-full py-16   bg-gray-800 ">
                <div className="max-w-[1240px] mx-auto  flex flex-col px-14">
                    <div className="sm:flex   justify-between items-center">
                        <img className="p-7 float-left" width="200px" src={logo} />
                        <div className="  items-center content-center  justify-between my-6 justify-content  ">
                            <h5 className=" py-5 text-4xl text-orange-500">We Are...</h5>
                            <p className=" text-sm text-white">We are non-profit organization that operates independently of any government, mainly we aim to educate underprivileged students and help them in their pursuit of their dream.</p>
                        </div>
                        <div className="flex justify-between mr-10 my-6 justify-content w-full sm:max-w-[200px]   ">
                            <a href="https://www.facebook.com/" target="_blank" className="">   <FaFacebook className="icon text-2xl text-gray-400" /></a>
                            <a href="mailto:swamivivekanandatrustkkr@gmail.com" target="_blank" className="">   <AiFillMail className="icon text-gray-400  text-2xl " /></a>


                        </div>
                    </div>
                    <div className=" text-center text-orange-500   ">Swami Vivekananda Social Development And Charitable Trust  &copy; {year}</div>

                </div>
            </div>
        </>
    )
}

export default Footer;