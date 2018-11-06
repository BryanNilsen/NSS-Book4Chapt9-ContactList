// the following allows access to the contacts in the database
import contactData from "./contactCollection"
import makeContactComponent from "./contact"

let articleElement = document.querySelector("#output")

function makeContactList(contactEntries) {
    contactEntries.forEach((contact) =>{
        let newContactDiv = document.createElement("div");
        newContactDiv.classList.add("contact");
        let contactContents = makeContactComponent(contact);
        newContactDiv.innerHTML = contactContents;
        articleElement.appendChild(newContactDiv)
    })
}

function clearContacts(){
    articleElement.innerHTML = ""
}

const populatePage = () => {
    clearContacts(),
    contactData.getContacts().then(contacts => makeContactList(contacts))
}

export default populatePage