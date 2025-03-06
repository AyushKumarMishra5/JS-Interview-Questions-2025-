// How do you shuffel an array?
// to shuffel an array it scould be done using sort method with math.random
let nums = [12, 3, 45, 11]
let shuffel = nums.sort(()=> Math.random() - 0.5)
console.log(shuffel)


// output:
// [ 45, 11, 12, 3 ]
// [ 11, 45, 3, 12 ]