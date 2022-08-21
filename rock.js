let score;
let result;
let user = 0;
let comp = 0;
let finnish; //declaration of variables
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const startBtn = document.querySelector("#startBtn");

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
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "you win! rock beats scissors";
    score = 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "you win! rock beats paper";
    score = 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "you lose! rock beats scissors";
    score = 2;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "you lose! scissors beat paper";
    score = 2;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "you win! paper beats rock";
    score = 1;
  } else {
    result = "TIE";
    score = 0;
  }
  return result, score; //results from a round

  // result to be screened and score to help in the main game
}

function game() {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playerSelection);
  playRound(playerSelection, computerSelection);
  console.log(result);
  console.log(score);
  if (score === 1) {
    user++;
  } else if (score === 2) {
    comp++;
  } else {
  }
  console.log(comp);
  console.log(user);
  if (comp >> user) {
    finnish = "YOU LOSE";
  } else if (user << comp) {
    finnish = "YOU WIN";
  } else {
    finnish = "it's a TIE";
  }
  return finnish; //ended main game function with 5 rounds
}

rockBtn.addEventListener("click", () => roundFromBtn("rock"));
// paperBtn.addEventListener("click", () => roundFromBtn("paper"));
// scissorsBtn.addEventListener("click", () => roundFromBtn("scissors"));
startBtn.addEventListener("click", () => gameFromBtn());
function roundFromBtn(btnInput) {
  playRound(btnInput);
  console.log(result);
  console.log(score);
}
function gameFromBtn() {
  let userScore = 0;
  let compScore = 0;
  do {
    const createP = document.createElement("p");
    createP.innerText = "Please Select Option";
    document.getElementById("resultBoard").appendChild(createP);
    rockBtn.addEventListener("click", () => roundFromBtn("rock"));
    paperBtn.addEventListener("click", () => roundFromBtn("paper"));
    scissorsBtn.addEventListener("click", () => roundFromBtn("scissors"));
    if (score == 1) {
      userScore++;
    } else if (score == 2) {
      compScore++;
    } else {
    }
    createP.innerText =
      "Round Ended YOU ${userScore} - ${compScore} Computer. ";
    document.getElementById("resultBoard").appendChild(createP);
  } while (userScore != 5 || compScore != 5);
  if (userScore == 5) {
    const createP = document.createElement("p");
    createP.innerText = "Game OVER. --- YOU WIN";
    document.getElementById("resultBoard").appendChild(createP);
  } else {
    const createP = document.createElement("p");
    createP.innerText = "Game OVER. --- computer WINs";
    document.getElementById("resultBoard").appendChild(createP);
  }
}
