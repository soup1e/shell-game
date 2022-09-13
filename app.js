/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';

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

//display
function displayShells() {
    if (gameState === 'guess') {
        results.classList.add('hidden');
    } else {
        results.classList.remove('hidden');
    }
}
// event listeners

/* Run page load code */
loadPage();
