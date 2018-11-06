const makeContactComponent = (contactEntry) => {
    return`<p><strong>Name:</strong> ${contactEntry.name}</p>
    <p><strong>Address:</strong> ${contactEntry.address}</p>
    <p><strong>Phone:</strong> ${contactEntry.phone}</p>
    <input type="button" value="Delete Contact" name="deleteContact" id=${contactEntry.id}>`
}
export default makeContactComponent