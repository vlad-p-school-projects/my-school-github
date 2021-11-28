const divOnPage = document.getElementById('root');
let ul = document.createElement('ul')
divOnPage.prepend(ul)
ul.id = 'ulBooksList'

const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((rsp) => {
        if (rsp.ok) { return rsp.json() }
        throw new Error("Couldn't catch information")
    })
    .then(usersArr => {
        console.log(usersArr);
        let usersOnPage = usersArr.reduce((acc, item) => {
            let { name, username, email } = item;
            console.log(item);
            // let li = document.createElement('li')
            // ul.prepend(li)
            // li.innerText = (`Username: ${username}. Name: ${name}. Email: ${email}`)
            ul.insertAdjacentHTML('beforeend', `<li><p class="p">Username:</p> ${username}. <p class="p">Name:</p> ${name}. <p class="p">Email:</p> ${email}</li>`)
        })
    })
    .catch((err) => {
        throw new Error(err)
    })
