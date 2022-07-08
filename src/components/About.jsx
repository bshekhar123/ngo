import React from 'react'
import Corsesal from "./Corsesal"


const About = () => {
    return (
        <>
            <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-20" id="about">
                <div className="lg:col-span-2 flex flex-col justify-evenly ">
                    <div >
                        <h2 className="tex text-3xl font-semibold text-orange-500">About Us</h2>
                        <p className="py-4">West Bengal is a state in the eastern region of India and is the nation's fourth-most populous.The state capital is Kolkata. The state encompasses two broad natural regions: the Gangetic Plain in the south and the sub-Himalayan and Himalayan area in the north. The tourism in West Bengal is maintained by WBTDCL, a state government owned enterprise.

                            West Bengal, located on eastern bottleneck of India stretching from the Himalayas in the north to the Bay of Bengal in the south, presents some of marvelous landscape features and natural scenic beauty. Some of India's most preferred travel destinations like; the Darjeeling Himalayan hill region in the northern extreme of the state, the highest peak of the state Sandakphu (3,636 m or 11,929 ft)and the Sundarbans mangrove forests in the extreme south.</p>
                    </div>
                </div>
                <div className="">
                   <Corsesal/>
                </div>

            </div>
        </>
    )
}

export default About;