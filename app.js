/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';

/* Actions */
function loadPage() {
    displayShells();
}
/* Components */
/* scoreboard */

/* guess */

// get DOM
const guessShell1 = document.getElementById('shell-1');
const guessShell2 = document.getElementById('shell-2');
const guessShell3 = document.getElementById('shell-3');
// display

// function displayGuess() {
//     guessShell1.classList.remove('win', 'lose');
//     guessShell2.classList.remove('win', 'lose');
//     guessShell3.classList.remove('win', 'lose');
// }

//DOM
const results = document.getElementById('results');

//display
function displayShells() {
    if (gameState === 'guess') {
        results.classList.add('hidden');
    }
}
// event listeners

/* Run page load code */
loadPage();
