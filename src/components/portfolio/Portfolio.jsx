import prevCarousel from "./resource/Vector-1.svg";
import nextCarousel from "./resource/Vector.svg";

import React from "react";
import Project from "./ProjectComponent.jsx";
import Carousel from "./carousel.js"
import {v4 as uuidv4} from "uuid"
import {getData} from "../../services/axiosService.js"
import LoadingPortfolio from "../animations/LoadingPortfolio.jsx";


const Portfolio = () =>{
    const [portfolio,setPortfolio] = React.useState([])
    const [error,setError] = React.useState({})
    const [animate,setAnimate] = React.useState({})
    const [loading,setLoading] = React.useState(false)
    React.useEffect(()=>{
        setAnimate(new Carousel())
    },[])
    React.useEffect(()=>{
        getData("portfolio",setPortfolio,setError,setLoading) 

    },[])
    return(
        <>
            <div className={"main-info-block main-portfolio-block"}>
                <div className={"carousel-out"}>
                    <div className="carousel" onTransitionEnd={() => animate.carouselScrolling()}>
                        {loading ?
                            portfolio.map((el) =>{
                            return <Project key={el.id} id={el.id} name={el.name} image={el.image} github={el.gitLink} figma={el.figmaLink} />
                            })
                            :
                            <LoadingPortfolio/>
                        }
                    </div>
                    <div className={"carousel-controllers"}>
                           <span>
                                <button className="prev-button"><img id={"prev-button"} src={prevCarousel} onClick={() =>{animate.Prev()}} alt=""/></button>
                                <div className={"carousel-controllers-separator"}></div>
                                <button className="next-button"><img id={"next-button"} src={nextCarousel} onClick={() =>{animate.Next()}} alt=""/></button>
                           </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio