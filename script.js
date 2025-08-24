function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

let firstNum = 3;
let operator = Number('+')
let secondNum = 5;

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      add(num1, num2)
      break
    case '-':
      subtract(num1, num2)
      break
    case '*':
      multiply(num1, num2)
      break
    case '/':
      divide(num1, num2)
      break
  }
}

console.log(operate(operator, firstNum, secondNum))