let firstNumber = '';
let secondNumber = '';
let operator = '';
let isoperatorset = false;

const display = document.getElementById('area');

function updateDisplay(value) {
    display.value = value;
}

const numbers = document.querySelectorAll('#num');

numbers.forEach(number => {
    number.addEventListener('click', function () {
        if (isoperatorset) {
            secondNumber += this.textContent;
            updateDisplay(firstNumber + operator + secondNumber);
        }
        else {
            firstNumber += this.textContent;
            updateDisplay(firstNumber);
        }
    });
});

const operators = document.querySelectorAll('#opp');

operators.forEach(op => {
    op.addEventListener('click', function () {
        if (firstNumber === '')
            return;
        if (!isoperatorset) {
            operator = this.textContent;
            isoperatorset = true;
            updateDisplay(firstNumber + operator);
        }
    });
});

const equal = document.getElementById('equal');

equal.addEventListener('click', function () {
    if (firstNumber && operator && secondNumber) {
        const result = calculate(Number(firstNumber), Number(secondNumber), operator);
        updateDisplay(result);
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
        isoperatorset = false;
    }
});

const clear = document.getElementById('clr');

clear.addEventListener('click', function () {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    isoperatorset = false;
    updateDisplay('')
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}