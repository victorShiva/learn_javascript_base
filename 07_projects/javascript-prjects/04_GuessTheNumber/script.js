let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('input[type="text"]');
const submit = document.querySelector('input[type="submit"]');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 10;
let playGame = true;

if (playGame) {
    remaining.innerHTML = `${numGuess}`
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
console.log(randomNumber);
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess > 0) {
            checkGuess(guess);
            displayGuess(guess);
        } else {
            displayGuess(guess);
            displayMessage(`Game Over . Random Number was ${randomNumber}`);
            endGame();
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too Low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too High`);
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message} </h2>`;
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${--numGuess}`;
}

function endGame() {
    userInput.innerHTML = '';
    userInput.setAttribute('disabled', true);
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    lowOrHi.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(lowOrHi);
        playGame = true;
    })
}

