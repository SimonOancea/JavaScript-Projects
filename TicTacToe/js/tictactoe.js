//Variable to keep track of whose turn it is
let activePlayer='X';

//Array to store the moves
let SelectedSquares = [];

//Function to place x or o in a square
function placeXOrO (squareNumber) {

    //check if the square has already been selected
    if (!SelectedSquares.some(element => element.includes (squareNumber))) {
        //Variable to hold the HTML element that was clicked
        let select = document.getElementById(squareNumber);
        
        //Determine the active player and place the icon
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
        select.style.backgroundImage = 'url("images/o.png")';
        }

        //Add the square number and the player to the array
        SelectedSquares.push(squareNumber + activePlayer);

        //Call the function to check if it exists a win
        checkWinConditions();

        // Change the active player
        if (activePlayer === 'X') {
            activePlayer = '0';
        } else {
            activePlayer = 'X';
        }

        //Function to play the placement sound
        audio('./media/place.mp3');

        //Check if it's the computers turn
        if (activePlayer === '0') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }

        //Return true is required for computersTurn() function
        return true;
    }

    //Pick a random square for the row of computers
    function computersTurn() {
        let success = false;
        let pickASquare;
            while (!success) {
                pickASquare = String (Math.floor(Math.random() * 9));
                if (placeXOrO (pickASquare)) {
                    placeXOrO (pickASquare);
                    success = true;
                };
            }
    }
}

//This function parses the SelectedSquares array to determine if a player has won
//The drawLine function is called if a win condition is met
function checkWinConditions() {
    if (arrayIncludes ('0X', '1X', '2X')) { drawWinLine (50, 100, 558, 100) }
        else if (arrayIncludes ('3X','4X','5X')) { drawWinLine(50, 304, 558, 304) }
        else if (arrayIncludes ('6X','7X','8X')) { drawWinLine(50, 508, 558, 508) }
        else if (arrayIncludes ('0X','3X','6X')) { drawWinLine(100, 50, 100, 558) }
        else if (arrayIncludes ('1X','4X','7X')) { drawWinLine(304, 50, 304, 558) }
        else if (arrayIncludes ('2X','5X','8X')) { drawWinLine(508, 50, 508, 558) }
        else if (arrayIncludes ('6X','4X','2X')) { drawWinLine(100, 508, 510, 90) }
        else if (arrayIncludes ('0X','4X','8X')) { drawWinLine(100, 100, 520, 520) }
        else if (arrayIncludes ('0O','1O','2O')) { drawWinLine(50, 100, 558, 100) }
        else if (arrayIncludes ('3O','4O','5O')) { drawWinLine(50, 304, 558, 304) }
        else if (arrayIncludes ('6O','7O','8O')) { drawWinLine(50, 508, 558, 508) }
        else if (arrayIncludes ('0O','3O','6O')) { drawWinLine(100, 50, 100, 558) }
        else if (arrayIncludes ('1O','4O','7O')) { drawWinLine(304, 50, 304, 558) }
        else if (arrayIncludes ('2O','5O','8O')) { drawWinLine(508, 50, 508, 558) }
        else if (arrayIncludes ('6O','4O','2O')) { drawWinLine(100, 508, 510, 90) }
        else if (arrayIncludes ('0O','4O','8O')) { drawWinLine(100, 100, 520, 520) }
        //check for a tie if no win conditions are met and 9 squares have been selected
        else if (SelectedSquares.length >= 9) {
            // play the tie sound
            audio('./media/tie.mp3');

            //reset game after tie
            setTimeout(function () { resetGame(); }, 500);
        }

    //This function checks each win condition
    function arrayIncludes (squareA, squareB, squareC) {
        const a = SelectedSquares.includes(squareA);
        const b = SelectedSquares.includes(squareB);
        const c = SelectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}

//Clear the board and matrix to restart the game
function resetGame() {
    for (let i=0; i < 9; i++) {
    let square = document.getElementById(String(i));
    square.style.backgroundImage = '';
    }
    SelectedSquares = [];
}

//Play the audio files
function audio(audioURL) {
    let audio = new Audio (audioURL);
    audio.play();
}

//Function to draw the line over the winning coordinates
function drawWinLine (coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame (animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame (animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame (animationLoop); }
        }
    }

    //Clear the canvas after the animation
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame (animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function() { clear(); resetGame(); }, 1000);
}

//Disable clicking during computer queue
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() { body.style.pointerEvents = 'auto'; }, 1000);
}