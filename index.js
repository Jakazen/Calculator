//Draft 1
/*console.log('Welcome to the calculator!');
 console.log('I have taken over'); 
 const readline = require('readline-sync');
 console.log('Please enter input 1:');
 const response1 = readline.prompt();
 console.log('Please enter input 2:');
 const response2 = readline.prompt();
 console.log(response1*response2); */

const readline = require('readline-sync');

console.log('\nWelcome to the calculator!');
console.log('==============================');

console.log('\nPlease enter the operator:');
const operator = readline.prompt();

console.log('\nPlease enter the first number:');
const firstArgument = readline.prompt();
const firstNumber = +firstArgument;

console.log('\nPlease enter the second number:');
const secondArgument = readline.prompt();
const secondNumber = +secondArgument;

let answer = 0;
if (operator === '+') {
    answer = firstNumber + secondNumber;
} else if (operator === '-') {
    answer = firstNumber - secondNumber;
} else if (operator === '*') {
    answer = firstNumber * secondNumber;
} else if (operator === '/') {
    answer = firstNumber / secondNumber;
} else if (operator === '%') {
    answer = firstNumber / secondNumber;
} else if (operator === '**') {
    answer = firstNumber / secondNumber;
} 
console.log('\nThe answer is ' + answer);