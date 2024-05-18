import React from "react";

const CommentBlock = ({id,date,text}) =>{
    let test = new Date(date);
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    let formattedDate = test.toLocaleString('ru-RU', options);

    return(
        <>
            <div className={"portfolio-user-comment"}>
                <span><h2>Anonymous</h2><small>{formattedDate}</small></span>
                <p style={{maxWidth:"100%", wordBreak:"break-word"}}>
                    {text}
                </p>
            </div>
        </>
    )
}
export default CommentBlock