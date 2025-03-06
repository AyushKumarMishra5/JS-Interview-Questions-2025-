// How to remove duplicates from an array?
// using the sets we can remove the duplicate values from the array
let numbers = [1, 2, 3, 4, 4, 4, 2, 3]
let removeDuplicate = [...new Set(numbers)]
console.log(removeDuplicate)

//Output
// [ 1, 2, 3, 4 ]