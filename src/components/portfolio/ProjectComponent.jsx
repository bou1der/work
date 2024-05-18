import ImageGithub from "./resource/github.svg";
import ImageFigma from "./resource/figma.svg";
import React from "react";
import {Buffer} from "buffer";
import {v4} from "uuid"
import {api, getData} from "../../services/axiosService.js";
import CommentBlock from "./comment.jsx";

const Project = ({id,name,image,github,figma}) =>{
    const [imageSrc,setImageSrc] = React.useState('')
    const [inputArea,setInputArea] = React.useState('')
    const [comments,setComments] = React.useState([])
    const [error,setError] = React.useState([])
    const [loadingState,setLoadinState] = React.useState([])

    React.useEffect(()=>{
        const imageData = Buffer.from(image)
        const base64Image = imageData.toString('base64')
        setImageSrc(`data:${image.type};base64,${base64Image}`)
        getData('comments',setComments,setError,setLoadinState,{id},"post")
    },[])
    const SendMessageHandle = async () =>{
        const res = await api.post("/getContent/writeComment",{id,text:inputArea})
        if (res.status === 200){
            setComments([{id:v4(),text:inputArea,date:new Date()},...comments])
            setInputArea("")
        }
    }
    console.log(comments)
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
                    {
                        loadingState &&
                            comments.map(el=>{

                                return <CommentBlock key={el.id} id={el.id} text={el.text} date={el.date}/>
                            })
                    }
                </div>
                <div className={"portfolio-comments-controls"}>
                    <input style={{color:"white"}} type="text" value={inputArea} onInput={(el)=>{setInputArea(el.target.value)}}/>
                    <button onClick={SendMessageHandle}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Project