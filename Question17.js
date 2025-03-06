// What is the differnece between in and hasOwnProperty() in object
// in operator is used to check weather any propety is present in the object.
let obj = {
    name: "Ayush",
    age: 23
}
console.log("In operator:",'name' in obj)

// hasOwnProperty() is used to check weather the parcticular property exists in the object or not

console.log("Checking the valid property: ", obj.hasOwnProperty('name'))
console.log("Checking the valid property: ", obj.hasOwnProperty('age'))
console.log("Checking an invalid property: ", obj.hasOwnProperty('random'))

// Output
// In operator: true
// Checking the valid property:  true
// Checking the valid property:  true
// Checking an invalid property:  false