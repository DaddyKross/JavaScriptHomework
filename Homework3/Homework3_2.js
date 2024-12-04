function calculateSalaryAfterTax(salary) {
    return salary * 0.87;
}

let input = prompt('Введите число:');
let number = parseFloat(input);
if (isNaN(number)) {
    console.log('Значение задано неверно');
} else {
    let afterTax = calculateSalaryAfterTax(number);
    console.log(`Рзамер заработной платы за вычетом налогов равен ${afterTax}`);
}