let resultDisplay = document.querySelector('.input')
const digitButtons = document.querySelectorAll('.digit')
const operatorButtons = document.querySelectorAll('.operator')
const calculateButton = document.querySelector('.calculate')

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

let firstNum = 0;
let operator = ''
let secondNum = 0;

function clearAll() {
  firstNum = 0
  operator = ''
  secondNum = 0
}
function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2)
    case '-':
      return subtract(num1, num2)
    case '*':
      return multiply(num1, num2)
    case '/':
      return divide(num1, num2)
    default:
      break
  }
}

digitButtons.forEach(digit => {
  digit.addEventListener('click', () => {
    if (resultDisplay.value == '0') {
      resultDisplay.value = digit.textContent
    } else {
      resultDisplay.value += digit.textContent
    }
  })
})

operatorButtons.forEach(operators => {
  operators.addEventListener('click', () => {
    operator = operators.textContent
    firstNum = Number(resultDisplay.value)
    resultDisplay.value = ''
  })
})

calculateButton.addEventListener('click', () => {
  if (firstNum !== '') {
    secondNum = Number(resultDisplay.value)
    const calculate = operate(operator, firstNum, secondNum)
    resultDisplay.value = calculate
    clearAll()
  }
})