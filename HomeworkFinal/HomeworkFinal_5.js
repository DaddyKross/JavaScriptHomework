const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const weekDays = {};
for (let i = 0; i < en.length; i++) {
    weekDays[en[i]] = ru[i];
}

console.log(weekDays);
