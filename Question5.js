// What is the differnece between map(), filter(), foreach(), reduce()
// map() creates a new array by applying the function with transfromed values.
let numbers = [12, 23, 34, 56]
let product = numbers.map(number => number*2)
console.log("Map function: ", product)
//filter() create an array providing the elemtnts only which fits with the condition applied
let evenNum = numbers.filter(num => num % 2 == 0)
console.log("Filter function: ", evenNum)
//foreach() loops over each element in the array and executes the function but does not creates an array
numbers.forEach(nums => console.log("Foreach Method: ", nums * 2))
//reduce() reducing the array to the single value
let reduceValue = numbers.reduce((sum, numb)=> sum + numb, 0)
console.log("Reduce method: ", reduceValue)


//output
// Map function:  [ 24, 46, 68, 112 ]
// Filter function:  [ 12, 34, 56 ]
// Foreach Method:  24
// Foreach Method:  46
// Foreach Method:  68
// Foreach Method:  112
// Reduce method:  125