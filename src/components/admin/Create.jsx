import React from "react";
import minus from "./resource/minus-svgrepo-com 1.svg"

const SkillCreate = () =>{
    const [inputValues, setInputValues] = React.useState({
        value1: '',
        value2: ''
    });

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    console.log(inputValues)
    return(
        <>
            <div style={{display: "flex", flexFlow: "column nowrap", width: "100%", maxWidth: "500px"}}>
                <div className={"main-info-create"}>
                    <div className={"head-content"}>
                        <h1>Skills</h1>
                        <h3>Name</h3>
                        <input type="text" name="value1" value={inputValues.value1} onInput={handleInputChange}/>
                    </div>
                    <input className={"input-file"} type="file" name="" id=""/>
                </div>
                <button className={"plusButton"}>+</button>
                <div className={"textBlock"}>
                    <span><p>Lorem ipsum dolor sit.</p><button><img src={minus} alt=""/></button></span>
                    <span><p>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, sapiente.</p><button><img src={minus} alt=""/></button></span>
                    <span><p>Lorem ipsum dolor sit.</p><button><img src={minus} alt=""/></button></span>
                    <span><p>Lorem ipsum dolor sit.</p><button><img src={minus} alt=""/></button></span>
                </div>

                <div className={"final-create-content"}>
                <span className={"form-control-color"}>
                    <p>R</p>
                    <input id={"R"} type="number" min={0} max={255}/>
                    <p>G</p>
                    <input id={"G"} type="number" min={0} max={255}/>
                    <p>B</p>
                    <input id={"B"} type="number" min={0} max={255}/>
                </span>
                    <div>Percent <input type="number" min={0} max={100}/></div>
                    <button>Создать</button>

                </div>
            </div>
        </>
    )
}
const ContactCreate = () => {
    return (
        <>
            <div style={{display: "flex", flexFlow: "column nowrap", width: "100%", maxWidth: "500px"}}>
                <div className={"main-info-create"}>
                    <div className={"head-content"}>
                        <h1>Contacts</h1>
                        <h3>Contact text</h3>
                        <input type="text" name="" id=""/>
                    </div>
                    <input className={"input-file"} type="file" name="" id=""/>
                </div>
                <div className={"contact-link"}>
                    <h3>Link</h3>
                    <input type="text" name="" id=""/>
                </div>
                <div className={"final-create-content"}>
                    <button>Создать</button>
                </div>
            </div>
        </>
    )
}
const PortfolioCreate = () => {
    const [portfolioData,setPortfolioData] = React.useState([])
    return (
        <>
            <div style={{display: "flex", flexFlow: "column nowrap", width: "100%", maxWidth: "500px"}}>
                <div className={"main-info-create"}>
                    <div className={"head-content"}>
                        <h1>Portfolio</h1>
                        <h3>Name</h3>
                        <input  type="text" name="" id=""/>
                    </div>
                    <input className={"input-file"} type="file" name="" id=""/>
                </div>
                <div className={"contact-link"}>
                    <h3>Github Link</h3>
                    <input type="text"/>
                    <h3>Figma link</h3>
                    <input type="text"/>
                </div>
                <div className={"final-create-content"}>
                    <button>Создать</button>
                </div>
            </div>
        </>
    )
}

export {SkillCreate, ContactCreate, PortfolioCreate}