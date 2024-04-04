import "../components/skills/Skills.css"
import Card from "../components/skills/skillCard.jsx";
import {v4 as uuidv4 } from "uuid"
import ModalWindow from "../components/skills/modalWindow.jsx";
import React from "react";
import { getData } from "../services/axiosService.js";
import LoadingSkills from "../components/animations/SkillsSkeleton.jsx";
const Skills = () =>{
    const arr = [1,2,3,4,5,6,7,8,9,0]

    const [modal, setModal] = React.useState(false)
    const [modalInfo, setModalInfo] = React.useState({})

    const [skills,setSkills] = React.useState([])
    const [error,setError] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    React.useEffect(()=>{
        getData('skills',setSkills,setError,setLoading)
    },[])
    return(
        <>
            {modal && <ModalWindow setModal={setModal} modalInfo={modalInfo}/>}
            <div className={"main-info-block main-block-skills"}>
                <div className={"main-block-grid main-card-block"}>
                {loading ?
                    skills.map((skill)=>{
                        return (
                            <>

                            <Card key={uuidv4()} id={uuidv4()} cardID={uuidv4()} skill={skill} setModal={setModal} setModalInfo={setModalInfo}/>
                            </>
                        );
                    })
                    :
                    <LoadingSkills/>

                }
            </div>
        </div>
        </>
    )
}
export default Skills