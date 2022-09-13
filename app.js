/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let guess = '';
let reveal = '';
let result = '';

let total = 2;
let wins = 1;

/* Actions */
function loadPage() {
    displayShells();
    displayScoreboard();
}
/* Components */

/* scoreboard */

const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = total - wins;
}

/* guess */

// get DOM

// display

//DOM
const results = document.getElementById('results');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

//display
function displayShells() {
    if (gameState === 'guess') {
        results.classList.add('hidden');
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
    } else {
        results.classList.remove('hidden');
        pearl1.classList.remove('hidden');
        pearl2.classList.remove('hidden');
        pearl3.classList.remove('hidden');
        shell1.classList.add('reveal');
        shell2.classList.add('reveal');
        shell3.classList.add('reveal');
    }
}
// event listeners

// shell1.addEventListener('click', () => {
//     pearlRandom('');
// });
// shell2.addEventListener('click', () => {
//     pearlRandom('');
// });
// shell3.addEventListener('click', () => {
//     pearlRandom('');
// });

/* Run page load code */
loadPage();
