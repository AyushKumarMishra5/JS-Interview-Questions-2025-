// Explain object.keys(), .values(), .enteries()
// Object.keys() prints the keys present in the object
// Object.values() prints the values present in the object
// Object.entries() prints the entries present in the object

let obj = {a: 23, b: 24}
console.log("Keys: ", Object.keys(obj))
console.log("Values: ", Object.values(obj))
console.log("Enteries: ", Object.entries(obj))

// output
// Keys:  [ 'a', 'b' ]
// Values:  [ 23, 24 ]
// Enteries:  [ [ 'a', 23 ], [ 'b', 24 ] ] 