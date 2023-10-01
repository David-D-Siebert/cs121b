/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) 
{
   return number1 + number2;
 }
function addNumbers()
{
   document.querySelector('#sum').value = add(parseInt(document.querySelector('#add1').value),
                    parseInt(document.querySelector('#add2').value));
}

document.querySelector("#addNumbers").addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) 
{
   return number1 - number2;
}

function subtractNumbers()
{
   document.querySelector('#difference').value = 
                    subtract(parseInt(document.querySelector('#subtract1').value),
                    parseInt(document.querySelector('#subtract2').value));
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
let multiply = (a,b) => a * b;

function multiplyNumbers()
{
   document.querySelector('#product').value = 
                    multiply(parseInt(document.querySelector('#factor1').value),
                    parseInt(document.querySelector('#factor2').value));
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (a,b) => a / b;

function divideNumbers()
{
   document.querySelector('#quotient').value = 
                    divide(parseInt(document.querySelector('#dividend').value),
                    parseInt(document.querySelector('#divisor').value));
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
let theDate = new Date();
let thisYear = theDate.getFullYear();
document.querySelector('#year').innerHTML =  thisYear;
/* ARRAY METHODS - Functional Programming */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
function odd(num1) {
   return num1 % 2;
 }
 document.querySelector('#odds').innerHTML = numbersArray.filter(odd);
/* Output Evens Only Array */
function even(num1) {
   return !(num1 % 2);
 }
 document.querySelector('#evens').innerHTML = numbersArray.filter(even);
/* Output Sum of Org. Array */
let sum = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').innerHTML = sum;

/* Output Multiplied by 2 Array */
let timesTwo = numbersArray.map(number => number *2);
document.querySelector('#multiplied').innerHTML = timesTwo
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = timesTwo.reduce((sum, number) => sum + number)