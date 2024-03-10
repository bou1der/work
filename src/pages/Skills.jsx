import "../components/skills/Skills.css"
import Card from "../components/skills/skillCard.jsx";
import {v4 as uuidv4 } from "uuid"
import ModalWindow from "../components/skills/modalWindow.jsx";
import React from "react";
const Skills = () =>{
    const arr = [1,2,3,4,5,6,7,8,9,0]
    const [modal, setModal] = React.useState(false)
    const [modalInfo, setModalInfo] = React.useState({})
    return(
        <>
            {modal && <ModalWindow setModal={setModal} modalInfo={modalInfo}/>}

            <div className={"main-info-block main-block-skills"}>
                <div className={"main-block-grid"}>
                {
                    arr.map(()=>{
                        return (
                            <>
                            <Card key={uuidv4()} id={uuidv4()} setModal={setModal} setModalInfo={setModalInfo}/>
                            </>
                        );
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Skills