// three seperate loops
//one for the rows, one for the columns, and one for the diagonals

let row1 = document.querySelectorAll('.row-1');

// create an array that is all of the potential bingos
// then pass in each element of that array into querySelector

// make array for the rows:
export function bingo(){

    let rows = ['.row-1', '.row-2', '.row-3', '.row-4', '.row-5'];
    
    for (let row of rows) {
        let bingoRow = document.querySelectorAll(row);
        console.log(bingoRow);

        for (let element of bingoRow) {
            if (!element.checked) {
                return false
            }
        }
        return true;
    }
}

// function will check each row and the event listener on the button click is where we'll be doing the checking