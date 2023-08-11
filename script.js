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
for (let i = 0; i <= 10; i++) {
  console.log(getComputerChoice());
}
