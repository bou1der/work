import React from "react";
import Test from "./canvas.js";


import reactlogo from "./resource/react-2.svg";
import ellipse from "./resource/Frame1.svg"
import Canvas from "./canvas.js";
const Card = ({id}) =>{

    React.useEffect(()=>{
        const canv = new Canvas(20,150,251,id)
        canv.Draw()
    },[])

    return (
        <div className={"main-skill-card"}>
            <img src={reactlogo} alt=""/>
            <div className={"separator"}></div>
            <canvas className={"GraphicCanvas"} id={`${id}`}></canvas>
            <img src={ellipse}/>
            <small>50%</small>
            {/*<svg width={110} height={110}>*/}
            {/*    /!*<rect width="100%" height="100%" fill="red" />*!/*/}
            {/*    <circle cx={"55"} cy={"55"} r={"50"} fill={"blue"}/>*/}
            {/*</svg>*/}

        </div>
    )
}
export default Card