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
function playRound(pc, player) {
  if (pc.toLowerCase() === player.toLowerCase()) {
    return "tie";
  } else if (
    (pc.toLowerCase() === "rock" && player.toLowerCase() === "scissor") ||
    (pc.toLowerCase() === "paper" && player.toLowerCase() === "rock") ||
    (pc.toLowerCase() === "scissor" && player.toLowerCase() === "paper")
  ) {
    return "pc wins";
  } else return "player wins";
}
const pcChoice = getComputerChoice();
const playerChoice = "rock";
console.log("pc: " + pcChoice);
console.log("player: " + playerChoice);
console.log(playRound(pcChoice, playerChoice));
