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

    const numberChoice = gameNumber.value;
    console.log(numberChoice);

    if (numberChoice > 100 || numberChoice < 1) {
        clue.innerHTML = "El número debe estar entre 1 y 100"
    } else if (numberChoice > randomNumber) {
        clue.innerHTML = "Demasiado alto";
    } else if (numberChoice < randomNumber) {
        clue.innerHTML = "Demasiado bajo"
    } else if (numberChoice == randomNumber) {
        clue.innerHTML = '¡Has ganado, campeona!'
    } else {
        clue.innerHTML = "Debes introducir un número"
    }

    contador++;
    counter.innerHTML = `Número de intentos: ${contador}`;

};

btnGame.addEventListener('click', randomGame);






