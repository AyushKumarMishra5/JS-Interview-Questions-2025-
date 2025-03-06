// How to you  find the intersection of 2 arrays?
let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]
let interValues = arr1.filter(values => arr2.includes(values))
console.log("The intersected values are: ", interValues)

// Output
// The intersected values are:  [ 3, 4 ]