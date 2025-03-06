// What is hasOwnProperty() in object?
// This means weather there is an specefic propert avuilable in the object.
let object = {
    name: "Ayush",
    age: 23
}

console.log("Checking with an valid property: ", object.hasOwnProperty('name'))
console.log("Checking with an Random Property: ", object.hasOwnProperty('Student'))

//Output
// Checking with an valid property:  true
// Checking with an Random Property:  false
