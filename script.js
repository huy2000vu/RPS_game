const rock = 1;
const paper = 2;
const scissor = 3;
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
