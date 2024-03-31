import "../components/contacts/contacts.css"
import Contacts from "../components/contacts/contactsPage.jsx"
import {getData} from "../services/axiosService.js";
import React from "react";
import LoadingContacts from "../components/animations/LoadingContacts.jsx";

const ContactsPage = () =>{
    const [contacts,setContacts] = React.useState([])
    const [error,setError] = React.useState(false)
    const [loading,setLoading] = React.useState(false)
    React.useEffect(()=>{
       getData('contacts',setContacts,setError,setLoading)
    },[])
    return(
        <>
            <Contacts contacts={contacts} loading={loading} />
        </>
    )
}
export default ContactsPage