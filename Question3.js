// Explain push(), pop(), shift(), unshift()
// push method add the element to the end
// pop method deletes the element from the end
// shift method removes the element from the starting
// unshift method add the element from the starting

let numbers = [12, 34, 56]
numbers.push(101)
console.log("Push method: ", numbers)
numbers.pop()
console.log("Pop method: ", numbers)
numbers.shift()
console.log("Shift method: ", numbers)
numbers.unshift(23)
console.log("Unshift method: ", numbers)

// output

// Push method:  [ 12, 34, 56, 101 ]
// Pop method:  [ 12, 34, 56 ]
// Shift method:  [ 34, 56 ]
// Unshift method:  [ 23, 34, 56 ]