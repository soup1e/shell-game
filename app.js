/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let guess = '';
let reveal = '';
let result = '';

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
    guess = userGuess;
    const guessShell = getRandomItem(guesses);
    total++;

    if (guess === reveal) {
        result = 'win';
        wins++;
    } else {
        result = 'lose';
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
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
    } else {
        results.classList.remove('hidden');
        pearl1.classList.remove('hidden');
    }
}

// event listeners

guessOne.addEventListener('click', () => {
    randomPearl('shell-1');
});
guessTwo.addEventListener('click', () => {
    randomPearl('shell-2');
});
guessThree.addEventListener('click', () => {
    randomPearl('shell-3');
});

/* Run page load code */
loadPage();
