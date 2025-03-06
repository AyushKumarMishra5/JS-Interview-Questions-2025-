// How do closure's work?
// Closures: a closure gives function access to it outer scope

function outer(x)
{
    return function inner(y)
    {
        return x+y;
    };
}

const add = outer(5)
console.log(add(5))