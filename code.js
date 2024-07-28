const display = document.querySelector("#display");

let displayString = "0";

function keyNum(num) {
    if (displayString.includes(".") && num === ".") {return;} else {
        if (displayString === "0") {displayString = num;} else {displayString += num;}
        display.textContent = displayString;
    }
}

function clearDisplay() {
    displayString = "0";
    display.textContent = displayString;
}

function backspace() {
    if (displayString.length === 1) {displayString = "0";} else {
        displayString = displayString.slice(0, -1);
    }
    display.textContent = displayString;
}