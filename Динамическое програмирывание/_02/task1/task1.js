function createDog() {
    const dogApi = fetch("https://dog.ceo/api/breeds/image/random")
        .then(rsp => rsp.json())
        .then(({ message: src }) => {
            console.log(src)
            document.body.insertAdjacentHTML("beforeend", `<img class="dog-img" src="${src}">`);
        })
}
createDog()
const button = document.getElementById('button');
button.addEventListener('click', () => {
    let prevDog = document.getElementsByClassName('dog-img');
    prevDog[0].remove()
    createDog()
})


/*
Использованые методы:
    -стрелочные функции;
    -работа с сервером (API);
    -деструктуризация;
    -прослушиватель событий;
    -promise.
*/