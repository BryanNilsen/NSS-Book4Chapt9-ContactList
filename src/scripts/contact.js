const makeContactComponent = (contactEntry) => {
    return`<p>Name: ${contactEntry.name}, Address: ${contactEntry.address}, Phone: ${contactEntry.phone}</p>`
}
export default makeContactComponent