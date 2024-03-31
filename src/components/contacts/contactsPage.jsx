import Contact from "./contactComponent.jsx"
import {v4 as uuidv4} from "uuid"
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps"
import React from "react"
import LoadingTerminal from "../animations/loading-terminal/Loading-Terminal.jsx"
import LoadingContacts from "../animations/LoadingContacts.jsx";
const Contacts = ({contacts,loading}) =>{

    // React.useEffect(()=>{
    //     setTimeout(()=>{setLoading(true)},1000)
    // },[])
    return(
        <>
            <div className="main-info-block main-contact">
                <div className="flex-main-contacts">
                    <div className="main-map-block innerShadow" >
                        {
                            loading ?
                                <YMaps query={{lang:"ru_RU",apikey:"c70ecaf8-de1c-41bc-a97b-184d452c369a"}}>
                                <Map width={"100%"} height={"100%"} defaultState={{center:[55.962980, 37.671211],zoom:14}}>
                                <Placemark geometry={[55.962980, 37.671211]}/>
                                </Map>
                                </YMaps> 
                                :
                                <LoadingTerminal loading={loading} />
                                
                        }
                    </div>
                    <div className="main-contacts innerShadow">
                        {loading ?
                            contacts.map((contact) =>{
                                return <Contact key={uuidv4()} image={contact.image} link={contact.link} text={contact.text}/>
                            })
                            :
                            <LoadingContacts many={6}/>

                        }
                        <LoadingContacts />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contacts