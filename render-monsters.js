const container = document.getElementById('grid-container');

export function renderMonsters(){
    for (let i = 0; i < 25; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = './assets/beaker.png';

        const span = document.createElement('span');
        span.textContent = 'beaker';

        div.append(img, span);
        container.append(div);
    }
}