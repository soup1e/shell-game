/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';

let total = 0;
let wins = 0;

const results = document.getElementById('results');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');

const guessOne = document.getElementById('guess-1');
const guessTwo = document.getElementById('guess-2');
const guessThree = document.getElementById('guess-3');

const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');

const guessesBox = document.getElementById('guesses');

const guesses = ['shell1', 'shell2', 'shell3'];

/* Actions */
function loadPage() {
    displayShells();
    displayScoreboard();
}
/* Components */

/* scoreboard */

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = total - wins;
}

/* guess */
function randomPearl(userGuess) {
    gameState = 'results';
    guessesBox.classList.add('hidden');
    const randomPearl = getRandomItem(guesses);
    total++;

    if ('shell1' === randomPearl) {
        pearl1.classList.remove('hidden');
        shell1.classList.add('reveal');
    }
    if ('shell2' === randomPearl) {
        pearl2.classList.remove('hidden');
        shell2.classList.add('reveal');
    }
    if ('shell3' === randomPearl) {
        pearl3.classList.remove('hidden');
        shell3.classList.add('reveal');
    }

    if (userGuess === randomPearl) {
        wins++;
        if ('shell1' === randomPearl) {
            shell1.classList.add('reveal');
            pearl1.classList.remove('hidden');
            display1.textContent = 'Found it!';
        }
        if ('shell2' === randomPearl) {
            shell2.classList.add('reveal');
            pearl2.classList.remove('hidden');
            display2.textContent = 'Found it!';
        }
        if ('shell3' === randomPearl) {
            shell3.classList.add('reveal');
            pearl3.classList.remove('hidden');
            display3.textContent = 'Found it!';
        }
    } else {
        if ('shell1' === userGuess) {
            display1.textContent = 'Not here!';
            shell1.classList.add('reveal');
        }
        if ('shell2' === userGuess) {
            display2.textContent = 'Not here!';
            shell2.classList.add('reveal');
        }
        if ('shell3' === userGuess) {
            display3.textContent = 'Not here!';
            shell3.classList.add('reveal');
        }
    }

    loadPage();
}

// get DOM

// display

//DOM

//display
function displayShells() {
    if (gameState === 'guess') {
        results.classList.add('hidden');
        guessesBox.classList.remove('hidden');
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        display1.textContent = '';
        display2.textContent = '';
        display3.textContent = '';
    } else {
        results.classList.remove('hidden');
    }
}

// event listeners

guessOne.addEventListener('click', () => {
    randomPearl('shell1');
    shell1.classList.add('reveal');
});
guessTwo.addEventListener('click', () => {
    randomPearl('shell2');
    shell2.classList.add('reveal');
});
guessThree.addEventListener('click', () => {
    randomPearl('shell3');
    shell3.classList.add('reveal');
});

const playAgainButton = document.getElementById('play-again-button');

playAgainButton.addEventListener('click', () => {
    playAgain();
});

function playAgain() {
    gameState = 'guess';
    loadPage();
}
/* Run page load code */
loadPage();
