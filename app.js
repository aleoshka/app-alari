const projectName = 'cайт магазина'
const price = 2000;
const author = 'Василий Пупкин';

const template = author + ' заказал ' + projectName + ' по цене ' + price + '$'
console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

const template3 = 'Проект\nЦена: ' + price + '$';
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;
console.log(template4);

