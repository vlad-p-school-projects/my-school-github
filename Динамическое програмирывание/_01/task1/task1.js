// Сам масив книг
const books = [
    { 
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70 
    }, 
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    }, 
    { 
        name: "Тысячекратная мысль",
        price: 70
    }, 
    { 
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    }, 
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }   
];

// Изначально мы создадим на основе старого маисва - новый, с помощью метода масивов reduce()
// Так же мы будем ловить ошибки и писать в консоль чего не хватает.

let booksOnPage = books.reduce((acc, item, index) => {
    if (item.author != undefined && item.name != undefined && item.price != undefined) {
        acc.push(item)
    } else {
        try {
            let a;
            switch (!a) {
                case !item.name:
                    throw new Error(`Данные неполны в книге под номером ${index + 1}: нет имени`);
                case !item.author:
                    throw new Error(`Данные неполны в книге под номером ${index + 1}: нет автора`);
                case !item.price:
                    throw new Error(`Данные неполны в книге под номером ${index + 1}: нет цены`);
                default:
                    throw new Error("Что-то другое");
            }
        } catch (err) {
            console.error(err);
        }
    }
    return acc;
}, [])
// console.log(booksOnPage);
// Первая часть выполнена!

// -------------------------------------------------------------------------------------------------------------------------------------------

// Дальше мы вставляем данные с нового масива на страницу


const divOnPage = document.getElementById('list'); // Ищем блок, куда вствлять

let ul = document.createElement('ul') // создаём список
divOnPage.prepend(ul) // вставляем список

// Создаём функцию, которая будет сама вставлять то, что нам надо, куда мы сказали выше.
function bookList (array) {
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li')
        ul.prepend(li)
        li.innerText = (`Название книги: ${array[i].name}. Автор: ${array[i].author}. Цена: ${array[i].price}`)
	}
}

// Вызываем функцию
bookList(booksOnPage)

// Всё прекрасно работает