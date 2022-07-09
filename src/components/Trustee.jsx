import React from 'react'
import logo from "../assets/logo4.png"
 


const Trustee = () => {
    return (
        <>
            <div className=" max-w-[1240px] mx-auto lg:grid grid-cols-3 gap-4 px-4 py-28" id="">
                <div className="lg:col-span-2 justify-center items-center content-center flex flex-col ">
                    <div >
                         
                      <img className=" w-72    rounded-3xl shadow-2xl shadow-orange-700" src={logo} />
                    </div>
                </div>
                <div className="py-20">
                   <div>
                    <h1 className=" text-2xl font-semibold bg-gradient-to-r from-[#ed0202] to-[#fa5407]  w-44  text-center rounded-xl text-white">Our Vision</h1>
                    <p className="py-8">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   </div>
                   <div className="py-14">
                    <h1 className=" text-2xl font-semibold bg-gradient-to-r from-[#ed0202] to-[#fa5407]  w-44 text-center rounded-xl text-white">Our Mission</h1>
                    <p className="py-8">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   </div>
                </div>

            </div>
        </>
    )
}

export default Trustee;