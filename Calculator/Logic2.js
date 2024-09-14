let exp = '';

const display = document.getElementById('area');

function updateDisplay(value) {
    display.value = value;
}

const numbers = document.querySelectorAll('#num');

numbers.forEach(number => {
    number.addEventListener('click', function () {
        exp += this.textContent;
        updateDisplay(exp);
    });
});

const operators = document.querySelectorAll('#opp');

operators.forEach(op => {
    op.addEventListener('click', function () {
        const lastChar = exp[exp.length - 1];
        if (exp !== '' && !['+', '-', '*', '/'].includes(lastChar)) {
            exp += this.textContent;
            updateDisplay(exp);
        }
    });
});

const equal = document.getElementById('equal');

equal.addEventListener('click', function () {
    try {
        const result = eval(exp);
        updateDisplay(result);
        exp = result.toString();
    }
    catch (e) {
        updateDisplay('Error');
        exp = ''
        console.log(e);
    }
});

const clear = document.getElementById('clr');

clear.addEventListener('click', function () {
    exp = '';
    updateDisplay('');
});