// the following allows access to the getContacts and postContacts functions in contactCollection.js
// only postContacts is currently used
import contactData from "./contactCollection"

const contactFormEvents = function submitForm(){
        // the following identifies the form inputs from index.html
        const formName = document.querySelector("#formName")
        const formAddress = document.querySelector("#formAddress")
        const formPhone = document.querySelector("#formPhone")
        // the following creates empty object for form inputs
        let eachContact = {
            name: "",
            address: "",
            phone: "",
        }
        // the following takes the info from the form inputs and puts them into the eachContact object
        eachContact.name = (formName.value)
        eachContact.address = (formAddress.value)
        eachContact.phone = (formPhone.value)
        // the following posts the info from eachContact to the database
        contactData.postContacts(eachContact)
}

// the following makes this function available to main.js
export default contactFormEvents