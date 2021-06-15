

// fetch data
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then((user) =>{
    const firstUser =  user[0];
    console.log(firstUser);
    return  fetch(
        'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
        );
    })
    .then(response => response.json())
    .then(posts=>console.log(posts))
    
//-------------------- Asynchronous and await --------------------
const myAsync = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const user = await response.json();
        const secondUser = user[1];
        // log
        console.log(secondUser)
        const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts?userId=")
        const post = await postResponse.json();
        // log
        console.log(post)
}
