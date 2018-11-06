import populatePage from "./contactList"
import contactFormEvents from "./contactForm"


// populate content from the contact list upon page load
populatePage()
allEventListeners()
addDeleteEventListener()

// takes entries from the contact input form and posts them to the database when user clicks 'submit'
function allEventListeners(){
    const formBtn = document.querySelector("#formSubmit")
    formBtn.addEventListener("click", () => {
      contactFormEvents()
      populatePage()
      location.reload()
    })
}

function addDeleteEventListener(){
const deleteButton = document.getElementById("0")
console.log("delete button 1: ", deleteButton)

        // button.addEventListener("click", console.log("you clicked me"))
}
