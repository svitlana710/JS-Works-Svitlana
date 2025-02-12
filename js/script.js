'use strict';

/*----------------- MINUMUM -----------------*/

// 0.1 + 0.2
let num_1 = 0.1;
let num_2 = 0.2;
let sum = num_1 + num_2;
alert(num_1 + '+' + num_2 + '=' + sum.toFixed(1))

// string 1 + number 2

let str = '1';
let num = 2;
alert(`${str} + ${num} = ${+str + num}`)

// flash drive

let gigaByte = prompt('Введіть ваш обсяг флешки у ГБ, цілим числом','');
const megaByte = 820;
const gbToMb = 1024;
let result = (gigaByte * gbToMb) / megaByte;
let restMegaByte = (gigaByte * gbToMb) % megaByte;
alert(` У вашу флешку, обсягом в ${gigaByte} гб можна помістити ${Math.round(result)} file обсягом у 820 мб, а також у вас залишиться ${Math.round(restMegaByte)} мб `);


/*----------------- MEDIUM -----------------*/


//chocolate

let sumMoneyBag = prompt('Введіть суму ваших грошей у вашому гаманці у грн','');
let moneyChoco = prompt('Введіть ціну однієї шоколадки','');
let resultMoney = sumMoneyBag / moneyChoco;
let restMoney = sumMoneyBag % resultMoney;
   
alert(`З вашими ${sumMoneyBag} грн у гаманці ви зможете купити ${Math.round(resultMoney)} chocolate, а також у вас залишиться ${Math.round(restMoney)} грн у гаманці`);

// three-digit number

let threeDigitNumber = prompt('Введіть трицифрове число а я його переверну', '');
let reversedNumber = (threeDigitNumber % 10) * 100 + (Math.floor((threeDigitNumber % 100) / 10)) * 10 + Math.floor(threeDigitNumber / 100);
alert(`Задом наперед це число: ${reversedNumber}`);


/*----------------- MAXIMUM -----------------*/

//вклад у банк
let sumBank = +prompt('Введіть суму вкладу у банк на 2 місяці', '');
let percent = 5;
let deposit = (sumBank / 100 * percent.toFixed(1)) / 6;

alert(`Якщо ви вкладете ${sumBank} грн у банк, то через 2 місяці ви отримаєте ${(sumBank + deposit).toFixed(1)}`);


//операції
let a =  2 && 0 && 3; //результат 0
let b = 2 || 0 || 3; //результат 2
let c = 2 && 0 || 3; //результат 3