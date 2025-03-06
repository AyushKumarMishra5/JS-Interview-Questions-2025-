// How does Asyn await works
async function fetchData()
{
    let response = fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = (await response).json()
    console.log(data)
}

fetchData();