// How does reduce work?
// reduce method in array bascially it accumalates the value to a single value
let arr = [1, 2, 3, 4]
let reduce = arr.reduce((sum, num)=> sum+num, 0)
console.log("Using the reduce() method: ", reduce)

//Output
// Using the reduce() method:  10