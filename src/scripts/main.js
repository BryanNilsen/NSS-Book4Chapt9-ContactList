import populatePage from "./contactList"
import contactFormEvents from "./contactForm"


// populate content from the contact list upon page load
populatePage()


// takes entries from the contact input form and posts them to the database when user clicks 'submit'
const formBtn = document.querySelector("#formSubmit")
formBtn.addEventListener("click", () => {
    contactFormEvents()
    populatePage()
    location.reload()
 } )