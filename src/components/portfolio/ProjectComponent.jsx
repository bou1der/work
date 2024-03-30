import ImageEmpty from "./resource/img1.png";
import ImageGithub from "./resource/github.svg";
import ImageFigma from "./resource/figma.svg";
import React from "react";
import {Buffer} from "buffer";

const Project = ({id,name,image,github,figma}) =>{
    const [imageSrc,setImageSrc] = React.useState('')

    React.useEffect(()=>{
        const imageData = Buffer.from(image)
        const base64Image = imageData.toString('base64')
        setImageSrc(`data:${image.type};base64,${base64Image}`)
    },[])
    return (
        <div className="portfolio-work-block ">
            <img src={imageSrc} alt="" className="main-img-work"/>
            <div className="portfolio-links">
                <a className="portfolio-link-github" href={`${github}`} target="blank">
                    <img src={ImageGithub}alt=""/>
                </a>
                <a className="portfolio-link-figma" href={`${figma}`} target="blank">
                    <img src={ImageFigma} alt=""/>
                </a>
            </div>
            <div className="portfolio-comments">
                <div className={"comments"}>
                    <div className={"portfolio-user-comment"}>
                        <span><h2>Anonymous</h2><small>DATE_STAMP</small></span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, culpa
                            cumque
                            doloremque eaque enim error eveniet facere, ipsa nam nostrum numquam
                            optio quam
                            quia
                            rem repudiandae sed tempora. Cum deserunt mollitia nam nulla pariatur
                            voluptates.
                        </p>
                    </div>

                    <div className={"portfolio-user-comment"}>
                        <span><h2>Anonymous</h2><small>DATE_STAMP</small></span>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className={"portfolio-comments-controls"}>
                    <input type="text"/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Project