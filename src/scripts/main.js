import makeContactList from "./contactList"
import contactFormEvents from "./contactForm"


// populate content from the contact list
makeContactList.makeList()
makeContactList.console()


// take entries from form and post them to database
const formBtn = document.querySelector("#formSubmit")
formBtn.addEventListener("click", () => { contactFormEvents() } )