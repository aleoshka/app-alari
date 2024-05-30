// Данные
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

//Результат
console.log('Смогу ли я работать? ' + (availableHours > projectHours));
console.log('Стоимость работ: ' + (projectHours * payRateUSD) + '$');
