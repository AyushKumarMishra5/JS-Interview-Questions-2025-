// What is the differnce between toString() string()
// toString() it works with only limited values and if the  value is undefined or null then it throws an error 
// string() it works with all the values and converts it to string

let num = 23;
console.log(String(num))
console.log(num.toString())

console.log(String(null))
console.log(toString(undefined))

//output
// 23
// 23
// null
// [object Undefined]
