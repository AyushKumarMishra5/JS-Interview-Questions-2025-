// Check weather a string is Palidrome or not
function Palidrome(str)
{
    let string =  str.toLowerCase();
    return string === str.split("").reverse().join("");
}
console.log(Palidrome("racecar"))
console.log(Palidrome("ayush"))

// output
// true
// false