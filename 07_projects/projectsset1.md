# Projects related to DOM

## Project Link

[Click Here]()

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.dir(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project 3

```javascript
const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('input[type="text"]');
const submit = document.querySelector('input[type="submit"]');
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 10;
let playGame = true;

if (playGame) {
  remaining.innerHTML = `${numGuess}`;
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
console.log(randomNumber);
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
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
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${--numGuess}`;
}

function endGame() {
  userInput.innerHTML = "";
  userInput.setAttribute("disabled", true);
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  lowOrHi.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(lowOrHi);
    playGame = true;
  });
}
```

## Project 5

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color" >
        <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key == " " ? "space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
</table>
    </div>`;
});
```

## Project 6

```jacascript

const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');
    let intervalId;

    start.addEventListener('click', startChangingColor);
    stop.addEventListener('click', stopChangingColor);



    // generate a random color
    const randomColor = function () {
        const hex = "0123456789ABCDEF";
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    // function startChangingColor() {
    //     stopChanges = setInterval(() => {
    //         document.body.style.backgroundColor = randomColor();
    //     }, 1000)
    // }


    function startChangingColor() {
        if (!intervalId) {
            intervalId = setInterval(changeBgColor, 1000);
        }

        function changeBgColor() {
            document.body.style.backgroundColor = randomColor();
        }
    }

    function stopChangingColor() {
        clearInterval(intervalId);
        intervalId = null;
    }

```
