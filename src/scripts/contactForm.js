import contactData from "./contactCollection"

// this will allow me access to the contacts parsed from the database
// contactData

const contactFormEvents = {
    contactMachine: submitForm = () => {
        // identify form inputs
        const formName = document.querySelector("#formName")
        const formAddress = document.querySelector("#formAddress")
        const formPhone = document.querySelector("#formPhone")

        // create empty object for form inputs
        let eachContact = {
            name: "",
            address: "",
            phone: "",
        }
        eachContact.name = (formName.value)
        eachContact.address = (formAddress.value)
        eachContact.phone = (formPhone.value)

        contactData.postContacts(eachContact)
    },
    eventListener: addEvent = () => {
        // add event listener
        const formBtn = document.querySelector("#formSubmit")
        formBtn.addEventListener("click", () => { contactFormEvents.submitForm() })
    }
}

export default contactFormEvents