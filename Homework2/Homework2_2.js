let day = 15;

let decade;
if (day >= 1 && day <= 10) {
    decade = 'первая';
} else if (day > 10 && day <= 20) {
    decade = 'вторая';
} else if (day > 20 && day <= 31) {
    decade = 'третья';
} else {
    decade = 'некорректное число';
}

console.log(`Число ${day} попадает в ${decade} декаду месяца.`);