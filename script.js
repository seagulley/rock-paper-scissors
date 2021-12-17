function capitalize(aString) {
    // Returns a string with only the first letter capitalized.
    
    first = aString[0].toUpperCase();
    rest = aString.slice(1).toLowerCase();
    return first + rest;
}

function getResultString(aList){
    // gets the result string depending on the value of a result list.
    var resultString;
    if (aList.length == 1) {
        resultString = 'Draw!'
    } else {
        resultString = 'You ' + aList[0] + '! ' + capitalize(aList[1]) + 
            ' beats ' + aList[2] + '!';
    };
    return resultString;
}

function computerChoice() {
    // Generates a random choice for the computer player.

    choices = ['rock', 'paper', 'scissors'];
    randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function checkDraw(selection1, selection2) {
    let draw = false;
    if (selection1 == selection2) {
        draw = true;
    }
    return draw
}

function play(computerSelection, playerSelection) {
    // Compares two choices to determine the winner. 
    // Returns a list containing a boolean value representing 
    // the player's victory or loss, the winning choice, and 
    // the losing choice.

    var beats = 'paper';
    switch (playerSelection) {
        case 'rock':;
            beats = 'scissors';
            break;
        case 'paper':
            beats = 'rock';
    }

    var result = 'lose';
    var winner = computerSelection;
    var loser = playerSelection;
    if (computerSelection == beats) {
        result = 'win';
        winner = playerSelection;
        loser = computerSelection;
    }

    return [result, winner, loser];
}

var buttons = document.querySelectorAll('.button');
var playerSelection;



function buttonClick(button) {
    let computerSelection = computerChoice();
    let playerSelection = this.id;
    var result = play(computerSelection, playerSelection);

    if (checkDraw(computerSelection, playerSelection)) {
        result = [null];
    };

    let resultString = getResultString(result);
    alert(resultString);



}

buttons.forEach(button => {
    button.onclick = buttonClick;
    
});
