let span = document.querySelector('#monster-pick-text');


export function bingoCheck(){
    let bingo = false;
    let bingoLines = ['.row-1', '.row-2', '.row-3', '.row-4', '.row-5', '.col-1', '.col-2', '.col-3', '.col-4', '.col-5', '.dia-1', '.dia-2'];

    
    for (let line of bingoLines) {
        let bingoLine = document.querySelectorAll(line);
        let uncheckedArray = [];

        for (let element of bingoLine) {
            if (!element.checked) {
                bingo = false;
                uncheckedArray.push('unchecked');
            } else if (uncheckedArray.length === 0){
                bingo = true;
                break;
            } 
        }
        
        if (bingo === true){
            span.textContent = 'You Win. Congrats!';
            bingo = false;
        } else {
            span.textContent = `Sorry, that's not a RAWRR!`;
        }
        
    } 
}
