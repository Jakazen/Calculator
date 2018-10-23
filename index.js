const readline = require('readline-sync');

function welcomeMsg() {
    console.log('\nWelcome to the calculator!');
    console.log('==============================');
}

function getStringPrompt(prompt) {
    console.log('\n' + prompt);
    return readline.prompt();
}

function getNumberPrompt(prompt) {
    let response;
    do {
        response = +getStringPrompt(prompt);
    } while (isNaN(response));
    return response;
}

function getOperator() {
    return getStringPrompt('Please enter the operator:');
}

function getNumArray(operator) {
    const iterations = getNumberPrompt('How many numbers do you want to ' + operator + '?');
    let numbers = new Array(iterations);
    for (let ix = 0; ix < iterations; ix++) {
        numbers[ix] = getNumberPrompt('Please enter number ' + (ix + 1) + ':');
    }
    return numbers;
}

function calcAns(operator, numbers) {
    let answer = numbers[0];
    for (let value = 1; value < numbers.length; value++) {
        if (operator === '+') {
            answer += numbers[value];
        } else if (operator === '-') {
            answer -= numbers[value];
        } else if (operator === '*') {
            answer *= numbers[value];
        } else if (operator === '/') {
            answer /= numbers[value];
        }else if (operator === '%') {
            answer %= numbers[value];
        }else if (operator === '**') {
            answer **= numbers[value];
        }
    }
    return answer;
}

function performCalc() {
    const operator = getOperator();
    const numbers = getNumArray(operator);
    const answer = calcAns(operator, numbers);
    console.log('\nThe answer is ' + answer);
}

welcomeMsg();
while (true) {
    performCalc();
}