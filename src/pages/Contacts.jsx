import "../components/contacts/contacts.css"
import Contacts from "../components/contacts/contactsPage.jsx"
import api from "../services/axiosService.js";
import React from "react";

async function fetchContacts(setContacts,setError){
    const data = await api.get("/contacts/getContent")
    if (data.status !== 200){
        return setError(true)

    }
    setContacts(data.data)
}
const ContactsPage = () =>{
    const [contacts,setContacts] = React.useState([])
    const [error,setError] = React.useState(false)
    React.useEffect(()=>{
       fetchContacts(setContacts,setError)
    },[])
    return(
        <>
            <Contacts contacts={contacts} />
        </>
    )
}
export default ContactsPage