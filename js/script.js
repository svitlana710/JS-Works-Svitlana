/*------------------- MINIMUM -------------------*/
// правильні імена змінних 
let userName;
let userLastName;
let last_name;
let name;

// неправильні назви змінних

//  let 1userName; першими не можуть бути числа
//  let user-Name; спеціальних символів окрім $ та _ не може бути
//  let user Name; пробілів не може бути
//  let ім'я юзера; не можна використовувати українські літери, тільки English


//комментування коду за домогою двух Slash(/)
/*комментування коду за домогою Slash(/) та зірки(*)*/
//вони відрізняються тим, що 1 варіант тільки на одну строку коду, а 2 варіант вже на декілька


//стиль написання camelCase, у якому перше слово з маленької, а вже інші з великої, але вони без пробілів
let camelCase;

//стиль написання snakeCase, за допомогою яких ми пишемо усі слова з маленької літери та через _
let snake_case;




/*------------------- MEDIUM -------------------*/

//ім'я користувача


//буде використовуватись userName з MINIMUM
userName = prompt("Яке ваше ім'я?");
alert(`Привіт, ${userName}`);

//рік народження
const presentYear = 2025;
let birthYear = +prompt('Введіть ваш рік народження');
let userAge = presentYear - birthYear;
alert(`Ваш вік зараз = ${userAge}`);

//периметр

let sideSquare = +prompt('Введіть довжину сторони квадрата', '3');
let perimeterSquare = sideSquare * 4;
alert(`Периметр квадрата дорівнює = ${perimeterSquare}`);


/*------------------- MAXIMUM -------------------*/

//окружність

let radiusCircle = +prompt('Введіть радіус кола');
let squareCircle = Math.PI * (radiusCircle ** 2);
alert(`Площа окружності = ${squareCircle}`);

//відстань

let kilometer = +prompt('Введіть відстань у кілометрах між двома містами');
let hour = +prompt('Введіть час за який ви хочете пройти цю відстань')
let speed = kilometer / hour;
alert(`Ось швидкість, за яку ви пройдете ${kilometer} км за ${hour} год = ${speed} км/год`);

//валюти

let dollar = +prompt('Введіть кількість долларів, а я сконвертую їх у євро');
let euro = dollar * 0.96;
alert(`${dollar}$ буде ${euro}€`)