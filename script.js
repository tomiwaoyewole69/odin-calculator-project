let resultDisplay = document.querySelector(".input");
const buttons = document.querySelectorAll("button");

const operators = ["+", "-", "*", "/", "=", "DEL", "C", "%"];
let firstNum = "";
let operator = "";
let secondNum = "";

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
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      break;
  }
}

function clearAll() {
  firstNum = "";
  operator = "";
  secondNum = "";
}
// function to evaluate the expression
function calculateResult() {
  secondNum = Number(resultDisplay.value);
  const calculate = operate(operator, firstNum, secondNum);
  resultDisplay.value = calculate;
  clearAll();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    // check if the value is in the operator array on button click
    if (operators.includes(value)) {
      if (value == "=") {
        // evaluate the equation
        if (resultDisplay.value == "" || (operator == "/" && secondNum == 0)) {
          resultDisplay.value = "Error";
        } else if (firstNum !== "" && operator !== "") {
          calculateResult();
        }
      } else if (value == "C") {
        // clear the display value
        resultDisplay.value = "";
        clearAll();
      } else if (value == "DEL") {
        // delete each value
        resultDisplay.value = resultDisplay.value.slice(0, -1);
      } else if (value == "%") {
        resultDisplay.value = Number(resultDisplay.value) / 100;
      } else {
        if (resultDisplay.value) {
          // add the operator on button click to the variable and save the display value to the variable
          operator = value;
          firstNum = Number(resultDisplay.value);
          resultDisplay.value = "";
        }
      }
    } else {
      // to add digit to the display
      if (value == ".") {
        if (
          resultDisplay.value !== "" &&
          !resultDisplay.value.includes(value)
        ) {
          resultDisplay.value += value;
        }
      } else if (resultDisplay.value == "0") {
        resultDisplay.value = value;
      } else {
        resultDisplay.value += value;
      }
    }
  });
});

window.addEventListener("keyup", (e) => {
  if (e.key == "Backspace") {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
  }
  const buttons = document.querySelectorAll(`button[value="${e.key}"`);
  buttons.forEach((button) => {
    if (button.classList.contains("digit")) {
      const value = button.value;
      if (value == ".") {
        if (
          resultDisplay.value !== "" &&
          !resultDisplay.value.includes(value)
        ) {
          resultDisplay.value += value;
        }
      } else if (resultDisplay.value == "0") {
        resultDisplay.value = value;
      } else {
        resultDisplay.value += value;
      }
    }
  });
});
