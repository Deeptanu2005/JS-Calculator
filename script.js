var a, b;

function sum(a, b) {
    a = parseInt(calForm.val1.value);
    b = parseInt(calForm.val2.value);
    if (check(a, b)) {
        calForm.result.value = a + b;
    } else {
        calForm.result.value = "Invalid input";
    }
}

function subtract(a, b) {
    a = parseInt(calForm.val1.value);
    b = parseInt(calForm.val2.value);
    if (check(a, b)) {
        calForm.result.value = a - b;
    } else {
        calForm.result.value = "Invalid input";
    }
}

function multiply(a, b) {
    a = parseInt(calForm.val1.value);
    b = parseInt(calForm.val2.value);
    if (check(a, b)) {
        calForm.result.value = a * b;
    } else {
        calForm.result.value = "Invalid input";
    }
}

function divide(a, b) {
    a = parseInt(calForm.val1.value);
    b = parseInt(calForm.val2.value);
    if (check(a, b)) {
        if (b !== 0) {
            calForm.result.value = a / b;
        } else {
            calForm.result.value = "Cannot divide by 0";
        }
    } else {
        calForm.result.value = "Invalid input";
    }
}

function modulus(a, b) {
    a = parseInt(calForm.val1.value);
    b = parseInt(calForm.val2.value);
    if (check(a, b)) {
        calForm.result.value = a % b;
    } else {
        calForm.result.value = "Invalid input";

    }
}

function check(a, b) {
    return Number.isInteger(a) && Number.isInteger(b);
}
