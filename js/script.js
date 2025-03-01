'use strict';

/* --------------------- MINIMUM --------------------- */

//all variables function

function declarationFunction(){
    alert(`Hello from declaration`);
 }
declarationFunction()


let expressionFunction = function(){
    alert(`Hello from expression`);
}
expressionFunction()


const arrowFunction = () => {
    alert(`Hello from arrow`);
}
arrowFunction()


// arguments

function argumentsFunction (){
    alert(arguments.length);
}
console.log(argumentsFunction(1));
console.log(argumentsFunction(1,4,5));
console.log(argumentsFunction(1,3,5,7,2));

// 2 numbers and return

function functionNumbersReturn(){
    let firstNumber = +prompt(`Введіть перше число для порівняння`,``);
    let secondNumber = +prompt(`Введіть друге число для порівняння`,``);
    
    if(isNaN(firstNumber) || isNaN(secondNumber)){
        return `Введіть числа`;
    } else if(firstNumber < secondNumber){
        return -1;
    } else if(firstNumber > secondNumber){
        return 1;
    } else{
        return 0;
    }
}

alert(functionNumbersReturn());


// factorial

function factorialFunction(){
    let factorial = +prompt(`Введіть число для факторіалу`);

    if(isNaN(factorial)){
        alert(`Введіть числа`);
    } else if(factorial === 0){
        alert(`До побачення`)
    } else{
        let sum = 1
        for(let i = 1; i <= factorial; i++){
            sum *= i;
        }
        alert(`Факторіал вашого числа: ${sum}`);
    }
}
factorialFunction()



// 3 numbers 

function threeNumbers(){
    let num_1 = prompt(`Введіть 1 цифру`,``);
    let num_2 = prompt(`Введіть 2 цифру`,``);
    let num_3 = prompt(`Введіть 3 цифру`,``);

    if(isNaN(num_1) || isNaN(num_2) || isNaN(num_3)){
        alert(`Введіть числа`);
    } else{
        alert(`Ось число склеєне з ваших цифр: ${num_1 + num_2 + num_3}`);
    } 
}
threeNumbers()


// rectangle square

function squareFunction(){
    let lengthRectangle = +prompt(`Введіть довжину прямокутника`,``);
    let widthRectangle = +prompt(`Введіть ширину прямокутника`,``);

    if(lengthRectangle === 0 || isNaN(lengthRectangle) && widthRectangle > 0){
        alert(`Нажаль ви не ввели довжину прямокутника, тому я виведу площу квадрата ${widthRectangle * widthRectangle}`);
    } else if(widthRectangle === 0 || isNaN(widthRectangle) && lengthRectangle > 0){
        alert(`Нажаль ви не ввели ширину прямокутника, тому я виведу площу квадрата ${lengthRectangle * lengthRectangle}`);
    }  else if(isNaN(lengthRectangle) && isNaN(widthRectangle)){
        alert(`Введіть числа`);
    } else{
        alert(`Площа прямокутника = ${lengthRectangle * widthRectangle}`);
    }
}
squareFunction()

/* --------------------- MEDIUM --------------------- */

function isPerfectNum(num){
    if(num < 6){
        alert(`Число менше 6 не досконале`); 
        return false;
    } 

    let sum = 1;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    if(sum === num) alert(`Число ${num} - досконале`);
    else{
        alert(`Число ${num} - не досконале`);
    }
}

isPerfectNum(7)
