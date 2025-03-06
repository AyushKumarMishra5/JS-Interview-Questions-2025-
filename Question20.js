// What is object.assign use for?
// Object.assign is method to join or merge 2 objects into a single object

let obj1 = {name: "Ayush"}
let obj2 = {age: 23}

let merge = Object.assign({}, obj1, obj2)
console.log("Using Object.assign() method: ", merge)

//output
// Using Object.assign() method:  { name: 'Ayush', age: 23 }