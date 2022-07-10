import React from 'react'
import { FaFacebook, } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import logo from "../assets/swamilogo.png"


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="w-full py-16  bg-gray-800  ">
                <div className="max-w-[1240px] mx-auto flex flex-col px-4">
                    <div className="sm:flex  justify-between items-center">
                        <div>
                            <img className="" width="200px" src={logo} />
                            {/* <h1>bhliv</h1> */}
                        </div>
                        <div className="w-[500px]    justify-between my-6 justify-content  sm:max-w-[200px] ">
                            <h5 className=" py-5 text-4xl text-orange-500">We Are...</h5>
                            <p className="  text-sm  text-white">We are non-profit organization that operates independently of any government, mainly we aim to educate underprivileged students and help them in their pursuit of their dream.</p>
                        </div>
                        <div className="flex   justify-between my-6 justify-content w-full sm:max-w-[200px]   ">

                             
                                <a className="text-3xl" href="https://www.facebook.com/" target="_blank"  >   <FaFacebook className="icon  text-[#acacac] hover:text-4xl hover:text-blue-500" /></a>
                                <a className="text-3xl" href="mailto:swamivivekanandatrustkkr@gmail.com" target="_blank" >   <AiFillMail className="icon text-[#acacac] hover:text-4xl hover:text-red-700" /></a>
                            


                        </div>
                    </div><br/>
                    <div className="flex flex-col text-center text-orange-500   "><p className="">Swami Vivekananda Social Development And Charitable Trust &copy; {year}</p></div>

                </div>
            </div>
        </>
    )
}

export default Footer;