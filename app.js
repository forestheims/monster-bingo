import { renderMonsters } from './src/render-monsters.js';
import { bingoCheck } from './src/bingo.js';
import { displayMonster } from './src/display-monster.js';

renderMonsters();

const newPick = document.getElementById('new-pick');
const playAgain = document.getElementById('play-again');
const bingoButton = document.getElementById('bingo');
const startButton = document.getElementById('start');
const intro = document.getElementById('intro');
const gridContainer = document.getElementById('grid-container');
const flyingMonster = document.getElementById('flying-monster');
const tipsyMonster = document.getElementById('tipsy-monster');


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

    tipsyMonster.classList.remove('hidden');
    tipsyMonster.classList.add('tipsy-monsters');

    setTimeout(hideUnhide, 5000);

});

newPick.addEventListener('click', ()=>{
    displayMonster();
});

playAgain.addEventListener('click', ()=>{
    window.location.reload();
});

bingoButton.addEventListener('click', () => {
    bingoCheck();
   
});