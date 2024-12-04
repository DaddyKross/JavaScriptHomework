let number = parseInt(prompt('Введите число:'));

let units = number % 10;
let tens = Math.floor((number % 100) / 10);
let hundreds = Math.floor(number / 100);

console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);