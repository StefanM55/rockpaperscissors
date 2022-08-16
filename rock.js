var score;
var user;
var comp;
function getComputerChoice(){
    var gameArray = [
        "rock",
        "paper",
        "scissors"
    ];
    var computerSelectionIndex = Math.floor(Math.random()*gameArray.length);
    var computerSelection = gameArray[computerSelectionIndex];
    return computerSelection;
}
function playRound(playerSelection, computerSelection) {

    if (playerSelection=="rock" && computerSelection=="paper"){
        var result = "you lose! Paper beats rock";
        var score = "2";
    }
    else if (playerSelection=="rock" && computerSelection=="scissors"){
        var result = "you win! rock beats scissors";
        var score = "1";
    }
    else if (playerSelection=="scissors" && computerSelection=="paper"){
        var result = "you win! rock beats paper";
        var score = "1";
    }
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        var result = "you lose! rock beats scissors";
        var score = "2";
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        var result = "you lose! scissors beat paper";
        var score = "2";
    }
    else if (playerSelection=="paper" && computerSelection=="rock"){
        var result = "you win! paper beats rock";
        var score = "1";
    }
    else {
        var result = "TIE";
        var score = "0";
    }
    return result, score;
  }

function game(){
    const playerSelection = "rock";
    for(let i = 0; i < 5; i++){
        
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        if (score == "1"){
            user++
        } else if (score == "2") {
            comp++
        }
        else{
        
        }
    
    }
    console.log(comp)
    console.log(user)
    if (comp>>user){
        var finnish = "YOU LOSE"+ comp + "-" + user; 
    } else {
        var finnish = "YOU WIN"+ comp + "-" + user; 
    }
    return finnish;  
}
console.log(game());

