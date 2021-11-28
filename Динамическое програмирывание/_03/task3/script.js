let input = document.getElementById('input');
let button = document.getElementById('button');
button.addEventListener('click', () => {
    alert(toCamelCase(input.value));
    input.value = ``;
})

function toCamelCase(str) {
    str = str.split('');
    return str.map(function (el, i) {
        if (el == '-' || el == '_') {
            el = str[i + 1].toUpperCase();
            str.splice(i + 1, 1);
        }
        return el;
    }).join('');
}
// console.log(toCamelCase('hello_world'));