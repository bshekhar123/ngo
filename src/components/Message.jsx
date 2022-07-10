import React from 'react'
import logo from "../assets/trust.png"

const Message = () => {
    return (
        <>
            <div className="max-w-[1240px]   mx-auto py-16" id="message">
                <h1 className="obj text-4xl text-center text-orange-500 py-20 font-semibold">Message From President</h1>
                <div className="lg:grid grid-cols-3 gap-4 px-4">
                    <div className="lg:col-span-2 flex flex-col justify-evenly ">


                        <div >
                            <p className="py-4 text-xl">India is the second-most populous country and without a doubt a place filled with numerous talents. It is not a shock that CEOs of leading multinational companies are Indian. But still, we are facing a low literacy rate. For a country this big, a low literacy rate means a large uneducated mass. This in turn affects the nation's growth. Therefore, our NGO(Swami Vivekananda Social Development And Charitable Trust) hopes to educate the children and women in various village areas to empower them. We hold free education camps from time and time in various village areas to promote literacy and women empowerment.
                            </p>
                            <h2 className="flex flex-col float-right font-semibold text-orange-400 text-2xl">..MUKUL BISWAS..</h2>
                        </div>
                    </div>
                    <div className="px-20  py-14 justify-center items-center content-center flex flex-col ">
                        <div >

                            <img className=" w-72    rounded-3xl shadow-2xl  " src={logo} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message;
