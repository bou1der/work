import React from "react";
import Canvas from "./canvas.js";

import reactlogo from "./resource/react-2.svg";
const Card = ({id}) =>{

    React.useEffect(()=>{
        const canv = new Canvas(97,218,251,id)
        canv.Draw(50,50)
    },[])

    return (
        <div className={"main-skill-card"}>
            <img src={reactlogo} alt=""/>
            <div className={"separator"}></div>
            <canvas className={"GraphicCanvas"} id={`${id}`}></canvas>
            <div className={"container"}></div>
            <small>50%</small>
        </div>
    )
}
export default Card