import React from "react";
import Canvas from "./canvas.js";
import {Buffer} from "buffer";
import CardMovement from "./cardMovement.js"
const Card = ({id,cardID, setModal,setModalInfo, skill}) =>{
    const [logo, setLogo] = React.useState()
    const [card,setCard] = React.useState()

    React.useEffect(()=>{
        const canv = new Canvas(skill.rgb[0], skill.rgb[1], skill.rgb[2],id)
        canv.Draw(100 - skill.percent,skill.percent)

        setCard(new CardMovement(cardID))

        const imageData = Buffer.from(skill.image)
        const base64 = imageData.toString('base64')
        setLogo(`data:${skill.image.type};base64,${base64}`)

    },[])

    return (
        <div className={`main-skill-card card`}
             id={`${cardID}`}
             onClick={ (el) => {
                 setModal(true)
                 setModalInfo({id,name:skill.name,logo:logo,text:skill.text,color:skill.rgb})
             }}
             onMouseMove={(el) => card.MoveCard(el)}
             onMouseLeave={()=>{card.MouseLeave()}}
        style={{
            background:`linear-gradient(135deg , rgb(${skill.rgb[0]},${skill.rgb[1]},${skill.rgb[2]}) 1% , #6100FF 75%)`
        }}
        >
            <img src={logo} alt=""/>
            <div className={"separator"}></div>
            <canvas className={"GraphicCanvas"} id={`${id}`}></canvas>
            <div className={"container"}></div>
            <small>{`${skill.percent}`}%</small>
        </div>
    )
}
export default Card