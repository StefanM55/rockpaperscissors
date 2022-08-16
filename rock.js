function getComputerChoice{
    var gameArray = [
        "rock",
        "paper",
        "scissors"
    ];
    var computerSelectionIndex = Math.floor(Math.random()*gameArray.length);
    var computerSelection = gameArray[computerSelectionIndex];
    console.log(computerSelection);
}

