import { randomMonster } from './random-monster.js';
import { monsters } from './monsters.js';

let j = monsters;

export function renderMonsters(){
    for (let i = 1; i < 25; i++){
        let monster = randomMonster(j);
        j = j.filter(notPickedYet => monster !== notPickedYet);

        let idImg = `image-${i}`;
        let idSpan = `span-${i}`;

        const img = document.getElementById(idImg);
        const span = document.getElementById(idSpan);

        img.src = `./assets/${monster}.png`;
        span.textContent = `${monster}`;
    }
}