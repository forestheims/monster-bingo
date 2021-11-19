let span = document.querySelector('#monster-pick-text');

const playAgain = document.getElementById('play-again');
const newPick = document.getElementById('new-pick');

export function bingoCheck(){
    let bingoLines = ['.row-1', '.row-2', '.row-3', '.row-4', '.row-5', '.col-1', '.col-2', '.col-3', '.col-4', '.col-5', '.dia-1', '.dia-2'];
    let bingoBooleans = [];

    for (let line of bingoLines) {
        let bingoLine = document.querySelectorAll(line);
        let uncheckedArray = [];

        for (let element of bingoLine) {
            if (!element.checked) {
                uncheckedArray.push('unchecked');
            } 
        }
            
        if (uncheckedArray.length === 0){
            bingoBooleans.push(true);
        } 
    } 

    if (bingoBooleans.includes(true)){
        span.textContent = 'You Win. Congrats!';
        newPick.classList.add('hidden');
        playAgain.classList.remove('hidden');
        bingoBooleans = [];
        return;
    } else {
        span.textContent = `Sorry, that's not a RAWRR!`;
        bingoBooleans = [];
    }
}
