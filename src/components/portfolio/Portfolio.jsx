import prevCarousel from "./resource/Vector-1.svg";
import nextCarousel from "./resource/Vector.svg";
import Project from "./ProjectComponent.jsx";
import Carousel from "./carousel.js"
import {v4 as uuidv4} from "uuid"
import React from "react";


const Portfolio = () =>{
    let animate;
    const arr = [1,2,3,4,5,6,7]
    React.useEffect(()=>{
        animate = new Carousel()
    },[])
    console.log("render")
    return(
        <>
            <div className={"main-info-block main-portfolio-block"}>
                <div className={"carousel-out"}>
                    <div className="carousel" onTransitionEnd={() => animate.carouselScrolling()}>
                        {arr.map(() =>{
                           return <Project key={uuidv4()}/>
                        })}
                    </div>
                    <div className={"carousel-controllers"}>
                           <span>
                            <button><img id={"prev-button"} src={prevCarousel} onClick={() =>{animate.Prev()}} alt=""/></button>
                               <div className={"carousel-controllers-separator"}></div>
                            <button><img id={"next-button"} src={nextCarousel} onClick={() =>{animate.Next()}} alt=""/></button>
                           </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio