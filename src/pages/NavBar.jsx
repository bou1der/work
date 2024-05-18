import "../components/NavBar/NavBar.css"
import {Link} from "react-router-dom";
import React from "react";
import GradientHandler from "../components/NavBar/Gradient";

const NavBar = () =>{
    React.useEffect(()=>{
        const Gradient = new GradientHandler()
        Gradient.Animate()
    },[])
    return(
        <>
            <header>
                <div className={'navigation-block'}>
                        <span className={'navigation-routes'}>
                            <Link to={'/'}>Main</Link>
                            <Link to={'/skills'}>Skills</Link>
                            <Link to={'/portfolio'}>Portfolio</Link>
                            <Link to={'/contacts'}>Contacts</Link>
                        </span>
                    <div className={'navigation-title'}>
                        <h1>Frontend || Backend</h1>
                        <h2>JS Developer</h2>
                    </div>
                </div>
            </header>

        </>
    )
}
export default NavBar