// Explain Object destructing
// Destructing:A technique of copying values from object to variables
let obj = {
    name: "Ayush",
    age: 23,
}

let {name, age} = obj;
console.log("Values copies from object are follows: ", name, age)

// Output
// Values copies from object are follows:  Ayush 23