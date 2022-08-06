let prevOp;
let currOp;
let currX = 0;
let currY = 0;

function clear() {
    currX = 0;
    paintDisplay(currX)
}

//Math Functions
function add(x, y) {
    currX+=y;
    paintDisplay(currX);
}

function subtract(x, y) {
    currX-=y;
    paintDisplay(currX);
}

function multiply(x, y) {
    currX*=y;
    paintDisplay(currX);
}

function divide(x, y) {
    if (y === 0) {
        paintDisplay("Not Possible!")
        currX = 0;
        return;
    }
    currX /= y;
    paintDisplay(currX);
}

function operate(op, x, y) {
    x = Number(x);
    y = Number(y);
    switch(op) {
        case "add":
            add(x, y);
            break;
        case "subtract":
            subtract(x, y);
            break;
        case "multiply":
            multiply(x, y);
            break;
        case "divide":
            divide(x, y);
            break;
        default:
            break;
    }
    currY = 0
}

function paintDisplay(val) {
    document.querySelector(".displayValue").innerHTML = val
}

function buttonClicked() {
    const val = this.id
    switch(val) {
        case "equal":
            operate(currOp, currX, currY);
            prevOp = ""
            break;
        case "clear":
            clear();
            break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
            prevOp = typeof currOp !== "undefined"?currOp:val
            currOp = val
            break;
        default:
            if (prevOp=="add"||prevOp =="subtract"||prevOp =="multiply"|| prevOp =="divide") {
                if (currY != 0) {
                    operate(currOp, currX, currY)
                    break;
                }
                currY = Number(val);
                paintDisplay(val);
            } else {
                if (currX == 0) {
                    currX = Number(val)
                }
                paintDisplay(val)
            }

            break;
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', buttonClicked);
})