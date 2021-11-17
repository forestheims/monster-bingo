import { randomMonster } from './random-monster.js';
import { monsters } from './monsters.js';

let j = monsters;
let h = [];

export function renderMonsters(){
    for (let i = 1; i < 25; i++){
        let monster = randomMonster(j);
        j = j.filter(notPickedYet => monster !== notPickedYet);
        
        let idImg = `image-${i}`;
        let idSpan = `span-${i}`;
        let idCbx = `cbx-${i}`;
        
        const img = document.getElementById(idImg);
        const span = document.getElementById(idSpan);
        const cbx = document.getElementById(idCbx);
        
        cbx.name = monster;
        
        cbx.addEventListener('click', () => {
            let monsterImage = document.getElementById('monster-pick-img');
            // if (e.target.checked) {
                //     // cbx.removeEventListener('click', test, true);
                //     cbx.checked = true;
                // } else 
            if (h.includes(cbx.name)) {
                return;
            } else if (cbx.name !== monsterImage.name){
                cbx.checked = false;
            } else {
                h.push(monster);
            }
        });

        img.src = `./assets/${monster}.png`;
        span.textContent = `${monster}`;
    }
}