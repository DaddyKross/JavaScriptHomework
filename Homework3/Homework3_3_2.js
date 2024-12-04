function findMax(a, b, c) {
    return Math.max(a, b, c);
}

let num1 = parseFloat(prompt('Введите первое число:'));
let num2 = parseFloat(prompt('Введите второе число:'));
let num3 = parseFloat(prompt('Введите третье число:'));

let max = findMax(num1, num2, num3);

console.log('Максимальное значение:', max);