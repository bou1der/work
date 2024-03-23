const contactComponent = ({image,text,link}) =>{
    return(
            <div className="contact"><a href={link}><div dangerouslySetInnerHTML={{__html:image}}/><p>{text}</p></a></div>
    )
}

export default contactComponent