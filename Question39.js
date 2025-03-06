// How does promise all promise any and promise race work
let p1 = Promise.resolve(10);
let p2 = Promise.reject("Error");
let p3 = new Promise(res => setTimeout(() => res(20), 1000));

Promise.all([p1, p3]).then(console.log); 
Promise.any([p1, p2]).then(console.log); 
Promise.race([p1, p3]).then(console.log);
