import "../components/NavBar/NavBar.css"
import radioEnable from "../components/NavBar/resource/radio-enable.svg"
import radioDisable from "../components/NavBar/resource/radio-disable.svg"
import {Link} from "react-router-dom";
const NavBar = () =>{
    return(
        <>
            <aside className={"navigation-radio"}>
                <img src={radioDisable} alt=""/>
                <img src={radioDisable} alt=""/>
                <img src={radioDisable} alt=""/>
                <img src={radioDisable} alt=""/>
            </aside>
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