import "../components/contacts/contacts.css"
import Contacts from "../components/contacts/contactsPage.jsx"
import {getData} from "../services/axiosService.js";
import React from "react";

const ContactsPage = () =>{
    const [contacts,setContacts] = React.useState([])
    const [error,setError] = React.useState(false)
    React.useEffect(()=>{
       getData('contacts',setContacts,setError)
    },[])
    return(
        <>
            <Contacts contacts={contacts} />
        </>
    )
}
export default ContactsPage