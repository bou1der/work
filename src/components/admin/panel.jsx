import React from "react"
import {ContactCreate, PortfolioCreate, SkillCreate} from "./Create.jsx"

const Panel = () =>{
    const [menuState,setMenuState] = React.useState('')
    const componentMap = {
        skill: <SkillCreate />,
        portfolio: <PortfolioCreate/>,
        contact: <ContactCreate />
    };
    return(
        <>
            <div className="admin-panel">
                <div className="admin-panel-controlls">
                    <div className="select-form">
                        <button className={"route-admin"} onClick={() => setMenuState('skill')}>+skill</button>
                        <button className={"route-admin"} onClick={() => setMenuState('portfolio')}>+portfolio</button>
                        <button className={"route-admin"} onClick={() => setMenuState('contact')}>+contact</button>
                        <button className="button-exit-admin" onClick={() => {
                            localStorage.removeItem("Authorization")
                            location.reload()
                        }}>Выйти
                        </button>
                    </div>
                    <div className="admin-create-form">
                        {componentMap[menuState]}
                        <div style={{width:"500px",height:"500px",backgroundColor:"black"}}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Panel