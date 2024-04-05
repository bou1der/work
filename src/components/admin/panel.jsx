import { api } from "../../services/axiosService"
import React from "react"
import {Create,ContactCreate,PortfolioCreate} from "./Create.jsx"
const Panel = () =>{
    const [menuState,setMenuState] = React.useState('')
    const componentMap = {
        skill: <Create />,
        portfolio: <PortfolioCreate/>,
        contact: <ContactCreate />
    };
    return(
        <>
            <div className="admin-panel">
                <button className="button-exit-admin" onClick={()=>{
                    localStorage.removeItem("Authorization")
                    location.reload()
                }}>Выйти</button>
                <div className="admin-panel-controlls">
                    <div className="select-form">
                        <button onClick={() => setMenuState('skill')}>+skill</button>
                        <button onClick={() => setMenuState('portfolio')}>+portfolio</button>
                        <button onClick={() => setMenuState('contact')}>+contact</button>
                    </div>
                    <div className="admin-create-form">
                        {componentMap[menuState]}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Panel