// three seperate loops
//one for the rows, one for the columns, and one for the diagonals
let span = document.querySelector('#monster-pick-text');
// create an array that is all of the potential bingos
// then pass in each element of that array into querySelector

// make array for the rows:
export function bingoCheck(){
    let bingo = false;
    let bingoLines = ['.row-1', '.row-2', '.row-3', '.row-4', '.row-5', '.col-1', '.col-2', '.col-3', '.col-4', '.col-5', '.dia-1', '.dia-2'];

    
    for (let line of bingoLines) {
        let bingoLine = document.querySelectorAll(line);
        console.log(bingoLine);
        
        for (let element of bingoLine) {
            console.log(element.checked);
            if (bingo === true){
                span.textContent = 'You Win. Congrats!';
                return;
            } else if (!element.checked) {
                bingo = false;
                span.textContent = `Sorry, that's not a RAWRR!`;
            } else {
                bingo = true;
            }
        }
    } 
}

// function will check each row and the event listener on the button click is where we'll be doing the checking