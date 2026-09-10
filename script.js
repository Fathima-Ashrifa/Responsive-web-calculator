let currentNumber = "";
let previousNumber = "";
let operator = "";


/* Get display */

const display = document.getElementById("display");


/* Add number */

function appendNumber(number) {

    // Prevent multiple decimal points
    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    currentNumber += number;

    display.value = currentNumber;
}


/* Choose operator */

function chooseOperator(selectedOperator) {

    if (currentNumber === "") {
        return;
    }

    if (previousNumber !== "") {
        calculate();
    }

    operator = selectedOperator;

    previousNumber = currentNumber;

    currentNumber = "";

}


/* Calculate */

function calculate() {

    if (previousNumber === "" || currentNumber === "") {
        return;
    }

    let previous = parseFloat(previousNumber);

    let current = parseFloat(currentNumber);

    let result;


    switch (operator) {

        case "+":
            result = previous + current;
            break;

        case "-":
            result = previous - current;
            break;

        case "*":
            result = previous * current;
            break;

        case "/":

            if (current === 0) {
                display.value = "Error";

                currentNumber = "";
                previousNumber = "";
                operator = "";

                return;
            }

            result = previous / current;

            break;

        case "%":
            result = previous % current;
            break;

        default:
            return;
    }


    // Remove unnecessary decimal digits
    result = Number(result.toFixed(10));


    display.value = result;


    currentNumber = result.toString();

    previousNumber = "";

    operator = "";
}


/* Clear everything */

function clearDisplay() {

    currentNumber = "";

    previousNumber = "";

    operator = "";

    display.value = "0";
}


/* Delete last number */

function deleteNumber() {

    currentNumber = currentNumber.slice(0, -1);


    if (currentNumber === "") {

        display.value = "0";

    } else {

        display.value = currentNumber;

    }
}