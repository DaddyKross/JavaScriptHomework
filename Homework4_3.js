let array = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10));
}

let sum = array.reduce((acc, num) => acc + num, 0);

let min = Math.min(...array);

let hasThree = array.includes(3);

console.log('Массив:', array);
console.log('Сумма элементов:', sum);
console.log('Минимальное число:', min);
console.log('Есть ли число 3:', hasThree);