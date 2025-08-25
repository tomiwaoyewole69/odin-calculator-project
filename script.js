let resultDisplay = document.querySelector('.input')
const buttons = document.querySelectorAll('button')

const operators = ["+", "-", "*", "/"]
let firstNum = '';
let operator = '';
let secondNum = '';

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

function clearAll() {
  firstNum = ''
  operator = ''
  secondNum = ''
}

function calculateResult() {
  secondNum = Number(resultDisplay.value)
  const calculate = operate(operator, firstNum, secondNum)
  resultDisplay.value = calculate
  clearAll()
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value
    if (operators.includes(value)) {
      if (resultDisplay.value) {
        operator = value
        firstNum = Number(resultDisplay.value)
        resultDisplay.value = ''
      }
    }
    else if (value == '=') {
      if (resultDisplay.value == '' || operator == '/' && secondNum == 0) {
        resultDisplay.value = 'Error'
      }
      else if (firstNum !== '' && operator !== '') {
        calculateResult()
      }
    }
    else if (value == 'C') {
     resultDisplay.value = ''
     clearAll() 
    }
    else {
      if (resultDisplay.value == '0') {
        resultDisplay.value = value;
      }
      else {
        resultDisplay.value += value;
      }
    }
  })
})
