import minus from "./resource/minus-svgrepo-com 1.svg"

const TextList = ({text,deleteText}) =>{
    return(
        <>
            <span><p>{text}</p><button onClick={() =>   deleteText(text)}><img src={minus} alt=""/></button></span>
        </>
    )
}

export default TextList