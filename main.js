const display = document.getElementById('display');
let currentNum = '';
let previousNum = '';
let operation = null;

// Math operation functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Can't divide by zero";
  }
  return a / b;
}

// Operate function takes operator and two numbers
function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return "Error: Invalid operator";
  }
}

// Update display function
function updateDisplay(value) {
  display.value = value;
}

// Button event listeners
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      currentNum += button.textContent;
      updateDisplay(currentNum);
    } else if (button.classList.contains('operator')) {
      previousNum = currentNum;
      currentNum = '';
      operation = button.textContent;
    } else if (button.classList.contains('equal')) {
      if (currentNum !== '' && operation !== null) {
        let result = operate(operation, previousNum, currentNum);
        updateDisplay(result);
        previousNum = result;
        operation = null;
      }
    } else if (button.classList.contains('clear')) {
      currentNum = '';
      previousNum = '';
      operation = null;
      updateDisplay('');
    } else if (button.classList.contains('decimal')) {
      if (!currentNum.includes('.')) {
        currentNum += '.';
        updateDisplay(currentNum);
      }
    } else if (button.classList.contains('backspace')) {
      currentNum = currentNum.slice(0, -1);
      updateDisplay(currentNum);
    }
  });
});