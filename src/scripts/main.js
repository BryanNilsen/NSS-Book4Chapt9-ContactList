import makeContactList from "./contactList"
import contactFormEvents from "./contactForm"
// import (functionName from contactForm) from "./contactForm"

// take entries from form and post them to database
contactFormEvents()


// populate content from the contact list
makeContactList.makeList()
makeContactList.console()