'use strict';

/* --------------------- MINIMUM --------------------- */

// userAge
let userAge = prompt(`Введіть ваш вік`, ``);

if(userAge >= 1 && userAge <= 11 ){
    alert(`Ви дитина`);
} 
else if(userAge >= 12 && userAge <=17){
    alert(`Ви підліток`);
}
 else if(userAge >= 18 && userAge <= 59){
    alert(`Ви доросла людина`);
}
 else if(userAge >= 60 && userAge <= 149){
    alert(`Ви пенсіонер`);
}
 else if(userAge >= 150){
    alert(`Капець ви старий`);
}
 else{
    alert(`Введіть будь ласка цифри`);
 }
 console.log(userAge);
 
// symbols
let numberSymbol = prompt('Введіть цифру, а я вкажу її символ на клавіатурі', '')

switch(numberSymbol){
    case '1' : alert(`!`);
    break
    case '2' : alert(`@`);
    break
    case '3' : alert(`#`);
    break
    case '4' : alert('$');
    break
    case '5' : alert(`%`);
    break
    case '6' : alert(`^`);
    break
    case '7' : alert(`&`);
    break
    case '8' : alert(`*`);
    break
    case '9' : alert(`(`);
    break
    case '0' : alert(`)`);
    break
    default: alert(`Вводіть цифри`);
    break
}
/* --------------------- MEDIUM --------------------- */

//palindrome
let fiveDigitNumber = +prompt(`Введіть п'яти-розрядне число, а я скажу чи є воно паліндромом`,``);
let reversedNumber = (fiveDigitNumber % 10) * 10000 + Math.floor((fiveDigitNumber % 100) / 10) * 1000 + Math.floor((fiveDigitNumber % 1000) / 100) * 100 + Math.floor((fiveDigitNumber % 10000) / 1000) * 10 + Math.floor(fiveDigitNumber / 10000);

if(fiveDigitNumber >= 10000 && fiveDigitNumber <= 99999){
    if (fiveDigitNumber === reversedNumber){
        alert(`Ваше число є паліндромом`);
    } else {
        alert(`Ваше число не є паліндромом`);
    }
} else {
    alert(`Введіть будь ласка п'яти-розрядне число`);
}

//sumBuy
let sumBuy = +prompt(`Введіть суму покупки`,``);
if(sumBuy >= 200 && sumBuy <= 300){
    alert(`У вас знижка 3% тому з вас ${Math.floor(sumBuy - (sumBuy * 0.03))}`)
} else if(sumBuy >= 301 && sumBuy <= 500){
    alert(`У вас знижка 5% тому з вас ${Math.floor(sumBuy - (sumBuy * 0.05))}`)
} else if(sumBuy >= 501){
    alert(`У вас знижка 7% тому з вас ${Math.floor(sumBuy - (sumBuy * 0.07))}`)
} else{
    alert(`Введіть цифри більше 200`)
}


/* --------------------- MAXIMUM --------------------- */

// birthday

let dayDate = +prompt(`Введіть день (числом)`,``);
let monthDate = +prompt(`Введіть місяць (числом)`,``);
let yearDate = +prompt(`Введіть рік (числом)`,``);

dayDate++;

if(isNaN(dayDate) || isNaN(monthDate) || isNaN(yearDate)){
    alert(`Введіть числа`);
} else if(monthDate === 1 || monthDate === 3 || monthDate === 5 || monthDate === 7 || monthDate === 8 || monthDate === 10 || monthDate === 12){
    if(dayDate > 31){
        dayDate = 1;
        monthDate++;

        if(monthDate > 12){
            monthDate = 1;
            yearDate++;
        }
    }
} else if(monthDate === 4 || monthDate === 6 || monthDate === 9 || monthDate === 11){
    if(dayDate > 30){
        dayDate = 1;
        monthDate++;
    }
} else if(monthDate === 2){
    if((yearDate % 4 === 0 && yearDate % 100 !== 0) || yearDate % 400 === 0) {
        if(dayDate > 29){
            dayDate = 1;
            monthDate++;
        }
    } else {
        if(dayDate > 28){
            dayDate = 1;
            monthDate++;
        }
    }
}
 

alert(`Наступна дата після вашої: ${dayDate}.${monthDate}.${yearDate}`);