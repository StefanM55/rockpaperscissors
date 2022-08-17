let score;
let result;
let user=0;
let comp=0;
let finnish;//declaration of variables
function getComputerChoice(){
    let gameArray = [
        "rock",
        "paper",
        "scissors"
    ];
    let computerSelectionIndex = Math.floor(Math.random()*gameArray.length);
    let computerSelection = gameArray[computerSelectionIndex];
    return computerSelection; //function to get random choice by the comp
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
    return result, score; //results from a round
    // result to be screened and score to help in the main game
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
    if (comp>>user){
         finnish = "YOU LOSE";
    } else if (user<<comp){
         finnish = "YOU WIN";
    }
    else{
        finnish = "it's a TIE";
    }
    return finnish; //ended main game function with 5 rounds
     
}
console.log(game());

