const contactData = {
    // get entries
    getContacts: () => {
        return fetch("http://localhost:8088/entries")
        .then(contacts => contacts.json())
        .then(parsedContacts => {
            console.table(parsedContacts)
        })
    },
    postContacts: (eachContact) => {
        return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eachContact)// << contactToSave goes in parentheses
    })}

}

export default contactData
