let input = document.getElementById('input');
let button = document.getElementById('button');
button.addEventListener('click', () => {
    alert(persistence(input.value));
    input.value = ``;
})

function persistence(num) {
    for (var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
}

// alert(persistence(999))