import { renderMonsters } from './render-monsters.js';
import { randomMonster } from './random-monster.js';
import { monsters } from './monsters.js';

renderMonsters();

const newPick = document.getElementById('new-pick');
const playAgain = document.getElementById('play-again');
const monImg = document.getElementById('monster-pick-img');
const monTxt = document.getElementById('monster-pick-text');

let j = monsters;

let k = 1;

newPick.addEventListener('click', ()=>{
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

    monImg.src = `./assets/${monster}.png`;
    monTxt.textContent = `${monster} has escaped! capture him on the board.`;
});