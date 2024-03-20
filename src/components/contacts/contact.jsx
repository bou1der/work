const contact = ({image,text}) =>{
    return(
        <div className="contact"><a href="#"><img src={image} alt="" /><p>{text}</p></a></div>
    )
}

export default contact