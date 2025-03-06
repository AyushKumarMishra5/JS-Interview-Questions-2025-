// How do you check weather a string contains another substring
let string = "Hi my name is Ayush!"
console.log("Checking if a substring inludes in string: ", string.includes("Ayush"))
console.log("Checking if a substring inludes in string: ", string.includes("Fake Value"))

console.log(/name/.test(string))

//Output
// Checking if a substring inludes in string:  true
// Checking if a substring inludes in string:  false