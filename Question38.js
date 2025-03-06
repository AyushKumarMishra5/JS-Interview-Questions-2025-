// What id event loop ?
console.log('a')
setTimeout(()=> {console.log('b')}, 0)
console.log('c')

// output
// a
// c
// b