// Differnece between call() apply() bind()
function greet(place)
{
    console.log(`${this.name} is from ${place}`)
}

const name = {name: "Ayush"}
greet.call(name, "Bangalore")
greet.apply(name, ["Banaglore"])
const bind = greet.bind(name, "Bangalore")
console.log(bind)

//output
// Ayush is from Bangalore
// Ayush is from Banaglore
// [Function: bound greet]