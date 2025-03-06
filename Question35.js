// What is function currying?
// a techniqe which breaks down a fucntion with mulitple arguments and each argument take a single argument.
const multiply = a => b => a*b;
console.log(multiply(4)(6))