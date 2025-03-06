// How to replace all occurences of a substring into a string?
// Using the replace which replaces only one occurence or replaceall method which replaces all the occurences
let fruits = "Apple banana papaya banana litchi"
console.log("Replace method: ", fruits.replace("banana", "Watermelon"))
console.log("Replace All method: ", fruits.replaceAll("banana", "Watermelon"))

// Output
// Replace method:  Apple Watermelon papaya banana litchi
// Replace All method:  Apple Watermelon papaya Watermelon litchi