import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import pic1 from "../assets/pic9.png";
import pic2 from "../assets/pic1.png";
import pic3 from "../assets/pic2.png";
import pic4 from "../assets/pic11.png";
import pic5 from "../assets/pic3.png";
import pic6 from "../assets/pic4.png";
import pic7 from "../assets/pic10.png";
import pic8 from "../assets/pic13.png";

const Corsesal = ()=>{
    return(
        <>
           <Carousel autoPlay className="carousel  ">
                <div>
                    <img src={pic1} className="w-[800px]" />
                     
                </div>
                <div>
                    <img src={pic2} className="w-[800px]"/>
                     
                </div>
                <div>
                    <img src={pic3} className="w-[800px]"/>
                    
                </div>
                <div>
                    <img src={pic4} className="w-[800px]"/>
                    
                </div>
                <div>
                    <img src={pic5} className="w-[800px]"/>
                    
                </div>
                <div>
                    <img src={pic6} className="w-[800px]"/>
                    
                </div>
                <div>
                    <img src={pic7} className="w-[800px]"/>
                    
                </div>
                <div>
                    <img src={pic8} className="w-[800px]"/>
                    
                </div>
            </Carousel>
        </>
    )
};
export default Corsesal;