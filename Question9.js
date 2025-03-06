// How do you merge 2 arrays?
let arr1 = [1, 2, 3, 4]
let arr2 = [4, 5, 6, 7]
let merge = [...new Set([...arr1, ...arr2])]
console.log("The new array is: ", merge)

// Output
// The new array is:  [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]