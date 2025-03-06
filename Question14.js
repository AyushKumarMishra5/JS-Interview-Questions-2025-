// how to merge 2 objects
let obj1 = {a: 12}
let obj2 = {b: 23}
let merge = {...obj1, ...obj2}
console.log("Merging the objects: ", merge)

//output
// Merging the objects:  { a: 12, b: 23 }