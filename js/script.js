'use strict';

/* --------------------- MINIMUM --------------------- */

//auto
const userAuto = {
    producer: 'Volkswagen',
    model: 'T-Roc',
    year: 2017,
    mediumSpeed: 70,
    fuelTank: 50,
    mediumFuelCons: 6.3,
    drivers: ['Svitlana ', 'Oleh ', 'Vladyslav '],
}
// for(let key in userAuto) {
//     // alert(`${key}: ${userAuto[key]}`);
// }
// userAuto.drivers.push('Iryna');
// alert(userAuto.drivers);
// if('autor' in userAuto){
//     alert('Такий ключ існує');
// } else{
//     alert('Такого ключа не існує');
// }
function autoTrip() {
    let distance = +prompt(`Введіть відстань яку ви хочете проїхати на ${userAuto.producer} ${userAuto.model}`);
    if (isNaN(distance)) {
        alert(`Введіть числа!`);
    } else if (distance === 0) {
        alert(`До побачення!`);
    } else {
        let totalAutoHours = distance / userAuto.mediumSpeed;
        let autoHours = Math.floor(totalAutoHours);
        let autoMinutes = Math.round((totalAutoHours - autoHours) * 60);
        let autoFuelCons = Math.round((distance * userAuto.mediumFuelCons) / 100);
        
        if(autoHours >= 4){
            autoHours = Math.round(autoHours + (autoHours / 4) * 1);
        }

        alert(`Зі швидкістю ${userAuto.mediumFuelCons} та відстані ${distance} ви дістанетесь за ${autoHours} годин та ${autoMinutes} хвилин. Витрата палива: ${autoFuelCons} літрів.`);
    }
}

// autoTrip();

/* --------------------- MEDIUM --------------------- */

//hour

function userTime() {
    const userHours = {
        userSecond: 14,
        userMinute: 8,
        userHour: 13,
    };
    
    let userSecondTime = +prompt(`Ось поточний час: ${userHours.userHour}:${userHours.userMinute}:${userHours.userSecond}, введіть кількість секунд які хочете додати`);
    let userMinuteTime = +prompt(`Ось поточний час: ${userHours.userHour}:${userHours.userMinute}:${userHours.userSecond}, введіть кількість хвилин які хочете додати`);
    let userHourTime = +prompt(`Ось поточний час: ${userHours.userHour}:${userHours.userMinute}:${userHours.userSecond}, введіть кількість годин які хочете додати`);

    userHours.userSecond += userSecondTime;
    userHours.userMinute += userMinuteTime;
    userHours.userHour += userHourTime;

    if (userHours.userSecond >= 60) {
        while(userHours.userSecond >= 60){
            userHours.userSecond -= 60;
            userHours.userMinute++;
        }
          
    }
    if (userHours.userMinute >= 60) {
        while(userHours.userMinute >= 60){
            userHours.userMinute -= 60;
            userHours.userHour++; 
        }
          
    }
    if (userHours.userHour >= 24) {
        while(userHours.userHour >= 24){
            userHours.userHour -= 24;
        }
    }
    alert(`Ось весь час: ${userHours.userHour}:${userHours.userMinute}:${userHours.userSecond}`);
}

userTime();



