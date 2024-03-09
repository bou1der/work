import "../components/skills/Skills.css"
import Card from "../components/skills/skillCard.jsx";
import {v4 as uuidv4 } from "uuid"
const Skills = () =>{
    const arr = [1,2,3,4,5,6,7,8]
    return(
        <div className={"main-info-block main-block-skills"}>
            <div className={"main-block-grid"}>

                {
                    arr.map(()=>{
                        return (
                            <>
                            <Card key={uuidv4()} id={uuidv4()}/>
                            </>
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Skills