
// --------------------------------------------- Generate hex 

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']; // possibilities to make a hex color from
const hexBtn = document.querySelector('.hexBtn'); // assign const to the button
const bodyBgc = document.querySelector('body'); // assign const to the body 
const hex = document.querySelector('.hex'); //same as above lol

hexBtn.addEventListener('click', getHex); // click the button and run the function - callback function

function getHex () { 
    let hexCol = '#'; // variable holding a hex

    for (let i = 0; i < 6; i++) { //start from 0, run 6 times, increment by 1
        let random = Math.floor(Math.random() * hexNumbers.length); // generate a random number from the array called hexNumbers
        hexCol += hexNumbers[random]; // add to hexCol a number that was picked using the 'random' variable. 'HexCol + random numbers'

    }

    bodyBgc.style.backgroundColor = hexCol; // change background color
    hex.innerHTML = hexCol; // inject text into HTMl

}
