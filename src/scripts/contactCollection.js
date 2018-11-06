let contactData = {

    getContacts() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },
    postContacts: (eachContact) => {
        return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eachContact)// << contactToSave goes in parentheses
    })},
    deleteContact(id) {
        fetch(`http://localhost:8088/entries?id=${id}`, {
            method: "delete"
        }).then(response => response.json())
    }
}

export default contactData