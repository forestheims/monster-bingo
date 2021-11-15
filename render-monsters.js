const container = document.getElementById('grid-container');

export function renderMonsters(){
    for (let i = 0; i < 25; i++){
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        label.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = './assets/beaker.png';

        const span = document.createElement('span');
        span.textContent = 'beaker';

        label.append(img, span, input);
        container.append(label);
    }
}