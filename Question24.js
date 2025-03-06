// What does trim(), trimStart(), trimend() do?
// Trim basically removes the extra space in the string and return the string with no space
// trimStart basically remove the extra spaces from start of the string
// trimend basically removes the exta spaces from the end of the string

let name = "   Ayush    ";
console.log("Trim: ", name.trim())
console.log("Trim Stat: ", name.trimStart())
console.log("Trim End: ", name.trimEnd())

//output
// Trim:  Ayush
// Trim Stat:  Ayush    
// Trim End:     Ayush

//want to still verify can use the length property to find each length and hence would be able to see the differnce