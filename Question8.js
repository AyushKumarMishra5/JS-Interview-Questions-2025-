// what does .some() and .every() does?
// .some() method in which the condition is application to only some of the elements
// .every() method in whoch the condition is applicable to all of the elemenst

let numbers = [12, 10, 0, 45]
let some = numbers.some(number => number > 10)
console.log("Some method: ", some)
let every = numbers.every(num => num > 0)
console.log('Every method: ', every)

// output
// Some method:  true
// Every method:  false