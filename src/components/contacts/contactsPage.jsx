import mobile from "./resource/mobile.svg"
import Contact from "./contact.jsx"
const Contacts = ({}) =>{
    const arr = [{img:mobile,text:"+79775934510"},{img:mobile,text:"+79775934510"},{img:mobile,text:"+79775934510"},{img:mobile,text:"+79775934510"},{img:mobile,text:"+79775934510"},{img:mobile,text:"+79775934510"},]
    return(
        <>
            <div className="main-info-block main-contact">
                <div className="flex-main-contacts">
                    <div className="main-map-block innerShadow" >

                    </div>
                    <div className="main-contacts innerShadow">
                        {arr.map((contact) =>{
                            return <Contact image={contact.img} text={contact.text}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contacts