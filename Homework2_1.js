let num1 = parseFLoat(prompt('Введите значение для num1:'));
let num2 = parseFloat(prompt('Введите значение для num2:'));

if (num1 <= 1 && num2 >= 3) {
    console.log('Условия выполнены:');
} else {
    console.log('Условия не выполнены:');
}

let test = true;
console.log(test ? '+++' : '---');