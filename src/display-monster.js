import { randomMonster } from './random-monster.js';
import { monsters } from './monsters.js';

const monImg = document.getElementById('monster-pick-img');
const monTxt = document.getElementById('monster-pick-text');
const newPick = document.getElementById('new-pick');
const playAgain = document.getElementById('play-again');

let j = monsters;

let k = 1;

export function displayMonster() {
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
    monTxt.textContent = `${monster} has escaped! capture them on the board.`;
}