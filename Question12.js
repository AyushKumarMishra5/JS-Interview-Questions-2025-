// How to check if there exist an property of object or not?
// using in or hasownProperty method
let obj = {
    name: "Ayush",
    age: 21
}
console.log('name' in obj)
console.log(obj.hasOwnProperty('name'))