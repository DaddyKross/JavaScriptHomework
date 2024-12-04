function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a > b ? a - b : 0;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль недопустимо';
}

console.log(add(2, 6));
console.log(substract(5, 3));
console.log(multiply(4, 7));
console.log(divide(10,2));
console.log(divide(10, 0));