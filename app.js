import { renderMonsters } from './render-monsters.js';
import { randomMonster } from './random-monster.js';
import { monsters } from './monsters.js';
import { bingoCheck } from './bingo.js';

renderMonsters();

const newPick = document.getElementById('new-pick');
const playAgain = document.getElementById('play-again');
const monImg = document.getElementById('monster-pick-img');
const monTxt = document.getElementById('monster-pick-text');
const bingoButton = document.getElementById('bingo');
const startButton = document.getElementById('start');
const intro = document.getElementById('intro');
const gridContainer = document.getElementById('grid-container');
const flyingMonster = document.getElementById('flying-monster');

let j = monsters;

let k = 1;
function hideUnhide() {
    newPick.classList.remove('hidden');
    gridContainer.classList.remove('hidden');
    bingoButton.classList.remove('hidden');
    startButton.classList.add('hidden');
    intro.classList.add('hidden');
    displayMonster();
}

startButton.addEventListener('click', () => {
    flyingMonster.classList.remove('hidden');
    flyingMonster.classList.add('flying-monsters');
    // wait to do everything below this line for 8secs
    setTimeout(hideUnhide, 5000);

});

function displayMonster() {
    if (k === 24){
        monTxt.textContent = 'Game Over!';
        monImg.src = './assets/sock.png';
        playAgain.classList.remove('hidden');
        newPick.classList.add('hidden');
        return;
    } 

    let monster = randomMonster(j);
    j = j.filter(notPickedYet => monster !== notPickedYet);
    k++;

    monImg.name = monster;
    monImg.src = `./assets/${monster}.png`;
    monTxt.textContent = `${monster} has escaped! capture him on the board.`;
}

newPick.addEventListener('click', ()=>{
    displayMonster();
});

playAgain.addEventListener('click', ()=>{
    window.location.reload();
});

bingoButton.addEventListener('click', () => {
    bingoCheck();
});