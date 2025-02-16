'use strict';

/* --------------------- MINIMUM --------------------- */

// sumDiaposone

let min = +prompt(`Введіть мінімальне значення діапазону`,``);
let max = +prompt(`Введіть максимальне значення діапазону`,``);

if(isNaN(min) || isNaN(max)){
    alert(`Введіть цифри`);
} else if(min === 0 || max === 0){
    alert(`До побачення`)
} else{
    if(min > max){
        let minMax = min;
        min = max;
        max = minMax;
    }
        let sum = 0;
        for(let i = min; i <= max; i++){
            sum += i;
        }
        alert(`Число у вашому діапазоні = ${sum}`)
}


// greatest common divisor

let minGreatComDivisor = +prompt(`Введіть перше число для знаходження НСД`,``);
let maxGreatComDivisor = +prompt(`Введіть друге число для знаходження НСД`,``);

if(isNaN(minGreatComDivisor) || isNaN(maxGreatComDivisor)){
    alert(`Введіть числа`);
} else if(minGreatComDivisor === 0 || maxGreatComDivisor === 0){
    alert(`До побачення`)
} else{
    if(minGreatComDivisor > maxGreatComDivisor){
        let minMaxDivisor = minGreatComDivisor;
        minGreatComDivisor = maxGreatComDivisor;
        maxGreatComDivisor = minMaxDivisor;
    } 
    while(maxGreatComDivisor !== 0){
        let minMaxDivisor = maxGreatComDivisor;
        maxGreatComDivisor = minGreatComDivisor % maxGreatComDivisor;
        minGreatComDivisor = minMaxDivisor
    } 
    alert(`НСД ваших чисел: ${minGreatComDivisor}`)
}

// all divisors

let userNumber = +prompt(`Введіть число а я вкажу всі його дільники`,``);
let divisors = '';
if(isNaN(userNumber)){
    alert(`Введіть числа`);
} else if(userNumber === 0){
    alert(`До побачення`);
} else{
    for(let i = 1; i < userNumber; i++){
        if(userNumber % i === 0){
            divisors += i + ` `;
        }
    }
    alert(`Усі дільники числа ${userNumber}: ${divisors}`);
}




/* --------------------- MEDIUM --------------------- */

// 10 numbers

let positiveNumber = 0;
let negativeNumber = 0;
let zero = 0;
let evenNumber = 0;
let oddNumber = 0;

for(let i = 0; i < 10; i++){
    let userNumbers = +prompt(`Введіть число, ОКРІМ ДРОБУ`,``);
    if(isNaN(userNumbers)){
        alert(`Будь ласка, водьте числа`);
        i--;
        continue;
    } else{
        if(userNumbers > 0){
            positiveNumber++;
        } else if(userNumbers < 0){
            negativeNumber++;
        } else if(userNumbers === 0){
            zero++;
        } 
        
        if(userNumbers % 2 === 0){
            evenNumber++;
        } else if(userNumbers % 2 !== 0){
            oddNumber++;
        }
    }
}
alert(`Серед наведених вами чисел, я знайшов ${positiveNumber} додатніх чисел, ${negativeNumber} від'ємних чисел, ${zero} нулей, ${evenNumber} парних, ${oddNumber} непарних`)

// days of the week

let daysNumber = 0;

while(true){
    let day
    switch(daysNumber){
        case 0: day = `Понеділок, чи бажаєте побачити наступний день?`; break;
        case 1: day = `Вівторок, чи бажаєте побачити наступний день?`; break;
        case 2: day = `Середа, чи бажаєте побачити наступний день?`; break;
        case 3: day = `Четвер, чи бажаєте побачити наступний день?`; break;
        case 4: day = `П'ятница, чи бажаєте побачити наступний день?`; break;
        case 5: day = `Субота, чи бажаєте побачити наступний день?`; break;
        case 6: day = `Неділя, чи бажаєте побачити наступний день?`; break;
    }
    let daysOfWeek = confirm(day);
    if(!daysOfWeek){
        alert(`До побачення`);
        break;
    };
    daysNumber = (daysNumber + 1) % 7;
}


/* --------------------- MAXIMUM --------------------- */

// guess number

let lowNumber = 0;
let highNumber = 100;
let guessNumber;
let responseNumber;

while(lowNumber <= highNumber){
    guessNumber = Math.floor((lowNumber + highNumber) / 2);
    responseNumber = prompt(`Ваше число > ${guessNumber}, або Ваше число < ${guessNumber}, або Ваше число == ${guessNumber} (у відповідь введіть тільки < або = або >)`);

    if(responseNumber === `=`){
        alert(`Я вгадав, ваше число = ${guessNumber}`);
        break
    } else if(responseNumber === `<`){
        alert(`Добре, тобто ваше число менше за ${guessNumber}`);
        highNumber = guessNumber - 1;
    } else if(responseNumber === `>`){
        alert(`Добре, тобто ваше число більше за ${guessNumber}`);
        lowNumber = guessNumber + 1;
    } else{
        alert(`Ви ввели не той знак, у відповідь введіть тільки < або = або >`)
    }
}


// plural table

for(let i = 2; i <= 9; i++){
    console.log(`Таблиця множення для: ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}



