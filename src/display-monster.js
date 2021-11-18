import { randomMonster } from './random-monster.js';
import { monsters } from './monsters.js';

const monImg = document.getElementById('monster-pick-img');
const monTxt = document.getElementById('monster-pick-text');
const newPick = document.getElementById('new-pick');
const playAgain = document.getElementById('play-again');

const pickedLast = document.getElementById('picked-last');
const pickedNextLast = document.getElementById('picked-next-last');
const pickedLastLast = document.getElementById('picked-last-last');

let j = monsters;

let k = 1;

export let h = [];

let y = [];

export function displayMonster() {
    if (k === 25){
        monTxt.textContent = 'Game Over! No more Monsters.';
        monImg.src = './assets/sock.png';
        playAgain.classList.remove('hidden');
        newPick.classList.add('hidden');
        return;
    } 

    let monster = randomMonster(j);
    j = j.filter(notPickedYet => monster !== notPickedYet);
    k++;

    h.push(monster);

    y.push(monster);
    if (y.length > 4) {
        y.shift();
    }

    monImg.name = monster;
    monImg.src = `./assets/${monster}.png`;
    monTxt.textContent = `${monster} has escaped! capture them on the board.`;

    if (y.length === 2) {
        pickedLastLast.classList.remove('hidden');
        pickedLastLast.src = `./assets/${y[0]}.png`;
    } else if (y.length === 3) {
        pickedNextLast.classList.remove('hidden');
        pickedLastLast.src = `./assets/${y[0]}.png`;
        pickedNextLast.src = `./assets/${y[1]}.png`;
    } else if (y.length === 4) {
        pickedLast.classList.remove('hidden');
        pickedLastLast.src = `./assets/${y[0]}.png`;
        pickedNextLast.src = `./assets/${y[1]}.png`;
        pickedLast.src = `./assets/${y[2]}.png`;
    }
}