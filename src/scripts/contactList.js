import contactData from "./contactCollection"
// import (functionName from contact.js) from "./contact"

const makeContactList = {
    /* this will get results from contactCollection.js
    take those results and then use the function from contact.js to make an entry for each contact in the database
    */
    makeList: () => {
        let contactsArray = [contactData.getContacts()]
        console.log(contactsArray)
    },
    console: () => {console.log("hello!")}
}
export default makeContactList