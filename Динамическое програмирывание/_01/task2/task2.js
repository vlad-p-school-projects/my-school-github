// Функция калькулятор
function calculator() {
  const firstOperand = +prompt('Введите первое число');
  const operator = prompt('Введите знак (+, -, *, /)');
  const secondOperand = +prompt('Введите второе число');
  switch (operator) {    
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "/":
      return firstOperand / secondOperand;
    case "*":
      return firstOperand * secondOperand;
    default:
      alert('Вам нужно ввести один из этих знаков: "+" "-" "*" "/"');
  } 
}
alert(calculator())
// console.log(calculator());
