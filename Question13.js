//What is shallow copy vs deep copy in object
//shallow copy: copies some properties on the top level
// Deep copy: Coipes all the properties of the object

let obj = {
    a : 23,
    b : {c : 2},
}

let shallowCopy = {...obj}
console.log("Shallow Copy: ", shallowCopy);
let deepcopy = JSON.parse(JSON.stringify(obj))
console.log("Deep copy: ", deepcopy)