var score;
var result;
var user=0;
var comp=0;
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

    if (playerSelection==="rock" && computerSelection==="paper"){
        result = "you lose! Paper beats rock";
        score = 2;
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
         result = "you win! rock beats scissors";
        score = 1;
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
         result = "you win! rock beats paper";
         score = 1;
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
         result = "you lose! rock beats scissors";
         score = 2;
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
         result = "you lose! scissors beat paper";
         score = 2;
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
         result = "you win! paper beats rock";
         score = 1;
    }
    else {
        result = "TIE";
         score = 0;
    }
    return result, score;
  }

function game(){
    let playerSelection = (window.prompt("Choose rock-paper-scissors","rock")).toLowerCase();
    for(let i = 0; i < 5; i++){
      
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
        console.log(result);
        console.log(score);
        if (score === 1){
            user++
        } else if (score === 2) {
            comp++
        }
        else{
        
        }
    
    }
    console.log(comp)
    console.log(user)
    if (comp>user){
        var finnish = "YOU LOSE";
    } else if (user<comp){
        var finnish = "YOU WIN";
    }
    else{
        var finnish = "it's a TIE";
    }
    return finnish; 
     
}
console.log(game());

