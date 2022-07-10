import React from 'react'
import aware from "../assets/aware.png";
import cloth from "../assets/n.png";
import pencil from "../assets/pen.png";
import drawing from "../assets/dir.png"
import Pics from "./Pics"

const Work = () => {
  return (
    <>
      <div>
        <div className="max-w-[1240px]   mx-auto py-20" id="message">
          <h1 className="obj text-4xl text-center text-orange-500 py-20 font-semibold">PROGRAMME</h1>
          <div className="max-w-[800px] mx-auto px-4 gap-24  grid sm:grid-col-2 lg:grid-cols-2" id='location'>
            <Pics bg={aware} text="Awareness program"/>
            <Pics bg={cloth} text="Clothes Distribution"/>
            <Pics bg={pencil} text="Stationery Distribution"/>
            <Pics bg={drawing} text="Drawing Workshop"/>
            
 

            </div>
        </div>
      </div>
    </>
  )
}

export default Work;