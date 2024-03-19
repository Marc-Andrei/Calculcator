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
    return a / b;
}

function operate(op, numb1, numb2) {
    switch (op) {
        case "+":
            return add(numb1, numb2);
        case "-":
            return subtract(numb1, numb2);
        case "*":
            return multiply(numb1, numb2);
        case "/":
            return divide(numb1, numb2);

    }
}

let num1 = 0;
let num2 = 0;
let operator = "";
