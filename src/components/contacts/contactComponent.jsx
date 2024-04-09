import React from "react"

const contactComponent = ({image,text,link}) =>{
    console.log(image)
    const [imageSrc,setImageSrc] = React.useState('')
    React.useEffect(()=>{
        const imageData = Buffer.from(image)
        const base64Image = imageData.toString('base64')
        setImageSrc(`data:${image.type};base64,${base64Image}`)
    },[])
    console.log(imageSrc)
    return(
            <div className="contact"><a href={link}><img src={imageSrc} alt="" style={{maxWidth:"50px"}}/><p>{text}</p></a></div>
    )
}

export default contactComponent