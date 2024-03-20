function round(num) {
    num = (Math.round(num * (10 ** 10))) / (10 ** 10);
    return num;
}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(op, numb1, numb2) {
    switch (op) {
        case "+":
            return round(add(numb1, numb2));
        case "-":
            return round(subtract(numb1, numb2));
        case "*":
            return round(multiply(numb1, numb2));
        case "/":
            return round(divide(numb1, numb2));
            

    }
}

function pressEqual() {
    if (opReady) {
        num2 = displayValue;
        if (num2 == 0 && operator == "/") {
            reset();
            display.textContent = "Nice Try!";
        } else {
        displayValue = operate(operator, num1, num2);
        num1 = operate(operator, num1, num2);
        display.textContent = displayValue;
        displayValue = "";
        opReady = false;
        }
        }
};

function reset() {
    num1 = NaN;
    num2 = "";
    operator = "";
    displayValue = "";
    opReady = false;
    first = true;
    display.textContent = displayValue;
}
let num1 = NaN;
let num2 = "";
let operator = "";
let displayValue = "";
let opReady = false;
let first = true;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const numBtn = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const resetBtn = document.querySelector(".reset");
const dotBtn = document.querySelector(".dot");
const undo = document.querySelector(".undo");
const calculator = document.querySelector(".calculator");
const signBut = document.querySelector(".sign");

numBtn.forEach(btn => {
        btn.addEventListener("click", e => {
            displayValue += e.target.textContent;
            display.textContent = displayValue;
        })
    });

opBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        if (first) {
        num1 = displayValue;
        first = false;
        }
        if (!opReady) {
        operator = e.target.textContent;
        displayValue = "";
        display.textContent = displayValue;
        opReady = true;
        } else {
            pressEqual()
            operator = e.target.textContent;
            opReady = true;
        }
    });
});

equal.addEventListener("click", pressEqual);

resetBtn.addEventListener("click", reset);

dotBtn.addEventListener("click", () => {
    if (!displayValue.includes(".")) {
        displayValue +=".";
        display.textContent = displayValue;
    }
})

undo.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
})

signBut.addEventListener("click", () =>{
    if (displayValue.charAt(0) == "-") {
        displayValue = displayValue.slice(1);
        display.textContent = displayValue;
    }
    else {
        displayValue = "-" + displayValue;
        display.textContent = displayValue;
    }
})


let clickEvent = new Event('click');

document.addEventListener("keydown", (e) => {
    if (e.key == ".") {
        dotBtn.dispatchEvent(clickEvent);
    }
    else if (e.key == "=" || e.key == "Enter") {
        equal.dispatchEvent(clickEvent);
    }
    else if (e.key == "Backspace") {
        undo.dispatchEvent(clickEvent);
    }
    else if (e.key == "-" || e.key == "+" || e.key == "*" || e.key == "/") {
        opBtns.forEach((but) => {
            if (e.key == but.textContent) {
                but.dispatchEvent(clickEvent);
            } 
        })
    }
    else if (e.key >= '0' && e.key <= '9') {
        numBtn.forEach((but) => {
            if (e.key == but.textContent) {
                but.dispatchEvent(clickEvent);
            } 
        })
        
    }
})

buttons.forEach(but => {
    but.addEventListener("click", () => {
        buttons.forEach(but => {
            but.classList.remove("glow");
    });
        but.classList.add("glow");
    })
})



