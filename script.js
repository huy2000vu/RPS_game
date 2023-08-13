let pcPoints = 0;
let playerPoints = 0;
//function that assigns pc a choice
function getComputerChoice() {
  let randomNum = Math.round(Math.random() * 2) + 1; //generate a random number from 1-3
  switch (randomNum) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissor";
  }
}
//evaluate player choice vs pc choice
function playRound(pc, player) {
  if (pc.toLowerCase() === player.toLowerCase()) {
    return "tie";
  } else if (
    (pc.toLowerCase() === "rock" && player.toLowerCase() === "scissor") ||
    (pc.toLowerCase() === "paper" && player.toLowerCase() === "rock") ||
    (pc.toLowerCase() === "scissor" && player.toLowerCase() === "paper")
  ) {
    pcPoints++;
    return "pc wins";
  } else {
    playerPoints++;
    return "player wins";
  }
}
//test cases
let pcChoice; // = getComputerChoice();
let playerChoice; // = prompt("enter rock paper or scissor: ");
//function that runs games
function game() {
  for (let i = 1; i <= 5; i++) {
    pcChoice = getComputerChoice();
    playerChoice = prompt("enter rock paper or scissor: ", "");
    console.log(`Round ${i}: PC->${pcChoice} Player->${playerChoice}`);
    console.log(`${playRound(pcChoice, playerChoice)}`);
  }
  //display points and winner of the game
  console.log(`PC points: ${pcPoints} Player points: ${playerPoints}`);
  if (pcPoints > playerPoints) {
    console.log("PC WIN");
  } else if (playerPoints > pcPoints) console.log("YOU WIN");
  else console.log("tie");
  //reset points
  pcPoints = 0;
  playerPoints = 0;
}
game();
