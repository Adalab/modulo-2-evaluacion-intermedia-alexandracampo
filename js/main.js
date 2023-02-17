const gameNumber = document.querySelector('.js-number');
const btnGame = document.querySelector('.js-button');
const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');

let contador = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

const randomNumber = getRandomNumber(100)
console.log(randomNumber);

function randomGame(event) {
    event.preventDefault()
    const numberChoice = parseInt(gameNumber.value);
    console.log(numberChoice);

    if (numberChoice > 100 || numberChoice < 1 || isNaN(numberChoice)) {
        printScreen("El número debe estar entre 1 y 100");
    } else if (numberChoice > randomNumber) {
        printScreen("Demasiado alto");
    } else if (numberChoice < randomNumber) {
        printScreen("Demasiado bajo");
    } else if (numberChoice === randomNumber) {
        printScreen("¡Has ganado, campeona!");
    }

    function printScreen(message) {
        clue.innerHTML = message;
    }

    function actualizarContador() {
        contador++;
        counter.innerHTML = `Número de intentos: ${contador}`;
    }
    actualizarContador()
};



btnGame.addEventListener('click', randomGame);




