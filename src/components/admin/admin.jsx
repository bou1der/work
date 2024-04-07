import React from "react"
import {api} from "../../services/axiosService"
import "./admin.scss"
import Panel from "./panel.jsx";

async function login(password,setPass){
    const login = await api.post('/getContent/adminLogin',{password})
    setPass('')
}

const Admin = ({})=>{
    const [pass,setPass] = React.useState('')
    
    React.useEffect(()=>{
      
    },[])
    return(
        <>
            {
                !localStorage.getItem('Authorization') ?
                <>
                    <input type="password" onInput={e =>{setPass(e.target.value)}} value={pass} />
                    <button onClick={()=>{
                        login(pass,setPass)
                    }}>Войти</button>
                </> 
                : 
                <Panel/>
            }
        </>
    )
}
export default Admin