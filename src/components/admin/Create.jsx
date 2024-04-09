import React from "react";
import minus from "./resource/minus-svgrepo-com 1.svg"
import {api} from "../../services/axiosService.js";

const SkillCreate = () =>{
    const [image,setImage] = React.useState(null)
    const [inputValues,setInputValues] = React.useState({
        name:'',
        percent:0,
        r:0,
        g:0,
        b:0
    })
    const handleInputChange = (name,value)=>{
        setInputValues(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    const handleSendData = async () =>{
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', inputValues.name);
        formData.append('percent', inputValues.percent);
        formData.append('r', inputValues.r);
        formData.append('g', inputValues.g);
        formData.append('b', inputValues.b);
        console.log(formData)
        try {
            const res = await api.post('admin/create/skills', formData ,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res)
        }catch (e) {
            console.log(e)
        }
    }

    return(
        <>
            <div style={{display: "flex", flexFlow: "column nowrap", width: "100%", maxWidth: "500px"}}>
                <div className={"main-info-create"}>
                    <div className={"head-content"}>
                        <h1>Skills</h1>
                        <h3>Name</h3>
                        <input type="text" name="name" value={inputValues.name} onInput={(el) =>handleInputChange(el.target.name,el.target.value)}/>
                    </div>
                    <input className={"input-file"} type="file" name="file" onChange={(el) =>{setImage(el.target.files[0])}} id=""/>
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
                    <input id={"R"} type="number" name={"r"} min={0} max={255} onChange={(el) =>{
                        setInputValues(prevState => ({
                            ...prevState,
                            [el.target.name]:el.target.value
                        }))
                    }}/>
                    <p>G</p>
                    <input id={"G"} type="number" name='g' min={0} max={255} onChange={(el) =>{
                        setInputValues(prevState => ({
                            ...prevState,
                            [el.target.name]:el.target.value
                        }))
                    }}/>
                    <p>B</p>
                    <input id={"B"} type="number" name='b' min={0} max={255} onChange={(el) =>{
                        setInputValues(prevState => ({
                            ...prevState,
                            [el.target.name]:el.target.value
                        }))
                    }}/>
                </span>
                    <div>Percent <input type="number" name='percent' min={0} max={100} onChange={(el) =>{
                        setInputValues(prevState => ({
                            ...prevState,
                            [el.target.name]:el.target.value
                        }))
                    }}/></div>
                    <button onClick={() => handleSendData()}>Создать</button>

                </div>
            </div>
        </>
    )
}
const ContactCreate = () => {
    const [image,setImage] = React.useState(null)
    const [inputValues,setInputValues] = React.useState({
        name:'',
        link:'',
    })
    const handleSendData = async () =>{
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', inputValues.name);
        formData.append('link', inputValues.link);
        try {
            const res = await api.post('admin/create/contacts', formData ,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res)
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div style={{display: "flex", flexFlow: "column nowrap", width: "100%", maxWidth: "500px"}}>
                <div className={"main-info-create"}>
                    <div className={"head-content"}>
                        <h1>Contacts</h1>
                        <h3>Contact text</h3>
                        <input type="text" name="name" id="" onChange={(el) =>{
                            setInputValues(prevState => ({
                                ...prevState,
                                [el.target.name]:el.target.value
                            }))
                    }}/>
                    </div>
                    <input className={"input-file"} type="file" name="file" id="" onChange={(el) =>{setImage(el.target.files[0])}}/>
                </div>
                <div className={"contact-link"}>
                    <h3>Link</h3>
                    <input type="text" name="link" id="" onChange={(el) =>{
                        setInputValues(prevState => ({
                            ...prevState,
                            [el.target.name]:el.target.value
                        }))
                    }}/>
                </div>
                <div className={"final-create-content"}>
                    <button onClick={()=>handleSendData()}>Создать</button>
                </div>
            </div>
        </>
    )
}
const PortfolioCreate = () => {
    const [image,setImage] = React.useState(null)
    const [inputValues,setInputValues] = React.useState({
        name:'',
        figma:'',
        github:''
    })
    const handleSendData = async () =>{
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', inputValues.name);
        formData.append('figma', inputValues.figma);
        formData.append('github', inputValues.github);
        try {
            const res = await api.post('admin/create/portfolio', formData ,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res)
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div style={{display: "flex", flexFlow: "column nowrap", width: "100%", maxWidth: "500px"}}>
                <div className={"main-info-create"}>
                    <div className={"head-content"}>
                        <h1>Portfolio</h1>
                        <h3>Name</h3>
                        <input  type="text" name="name" id="" onChange={(el) =>{
                            setInputValues(prevState => ({
                                ...prevState,
                                [el.target.name]:el.target.value
                            }))
                        }}/>
                    </div>
                    <input className={"input-file"} type="file" name="file" id="" onChange={(el) =>{setImage(el.target.files[0])}}/>
                </div>
                <div className={"contact-link"}>
                    <h3>Github Link</h3>
                    <input type="text" name="github" onChange={(el) =>{
                        setInputValues(prevState => ({
                            ...prevState,
                            [el.target.name]:el.target.value
                        }))
                    }}/>
                    <h3>Figma link</h3>
                    <input type="text" name="figma" onChange={(el) =>{
                        setInputValues(prevState => ({
                            ...prevState,
                            [el.target.name]:el.target.value
                        }))
                    }}/>
                </div>
                <div className={"final-create-content"}>
                    <button onClick={()=>handleSendData()}>Создать</button>
                </div>
            </div>
        </>
    )
}

export {SkillCreate, ContactCreate, PortfolioCreate}