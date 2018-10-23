console.log('Welcome to the calculator!');
console.log('I have taken over');
const readline = require('readline-sync');
console.log('Please enter input 1:');
const response1 = readline.prompt();
console.log('Please enter input 2:');
const response2 = readline.prompt();
console.log(response1*response2);