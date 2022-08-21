let score;
let result;
let whatToSee;
let userScore = 0;
let compScore = 0;
const createP = document.createElement("p"); //declaration of variables
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
function getComputerChoice() {
  let gameArray = ["rock", "paper", "scissors"];
  let computerSelectionIndex = Math.floor(Math.random() * gameArray.length);
  let computerSelection = gameArray[computerSelectionIndex];
  return computerSelection; //function to get random choice by the comp
}
function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playerSelection);
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "you lose! Paper beats rock";
    score = 2;
    compScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "you win! rock beats scissors";
    score = 1;
    userScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "you win! rock beats paper";
    score = 1;
    userScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "you lose! rock beats scissors";
    score = 2;
    compScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "you lose! scissors beat paper";
    score = 2;
    compScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "you win! paper beats rock";
    score = 1;
    userScore++;
  } else {
    result = "TIE";
    score = 0;
  }
  return result, score, userScore, compScore; //results from a round

  // result to be screened and score to help in the main game
}

rockBtn.addEventListener("click", () => roundFromBtn("rock"));
paperBtn.addEventListener("click", () => roundFromBtn("paper"));
scissorsBtn.addEventListener("click", () => roundFromBtn("scissors"));

function roundFromBtn(btnInput) {
  playRound(btnInput);
  createParagraph(result);
  console.log(result);
  console.log(score);
  console.log(userScore);
  console.log(compScore);
  userScore = userScore++;
  compScore = compScore++;
  endRoundMsg();
  keepScore(userScore, compScore);
} //main function that holds the game

function endRoundMsg() {
  whatToSee = "SCORE: USER: " + userScore + " COMP: " + compScore;
  createParagraph(whatToSee);
}

function createParagraph(whatToSee) {
  createP.innerText = whatToSee;
  document.getElementById("resultBoard").appendChild(createP);
} // function that creates the paragraph that screens the messages

function keepScore(userScore, compScore) {
  if (userScore == 5) {
    whatToSee = "Game OVER. --- YOU WIN ";
    createParagraph(whatToSee);
  } else if (compScore == 5) {
    whatToSee = "Game OVER. --- computer WINs ";
    createParagraph(whatToSee);
  } else {
    console.log("not over user ---" + userScore + "   comp--- " + compScore);
  }
} //function that have the condition to screen the end of the game
