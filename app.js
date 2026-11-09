let userscore=0;
let compscore=0;

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComputerChoice=()=>{
 const options = ["rock","paper","scissors"];
const randIdx = Math.floor(Math.random() *3);
return options[randIdx];
};
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const playGame=(userChoice) =>{
    console.log("user choice=", userChoice);
    const compchoice = genComputerChoice();
      console.log("comp choice=", compchoice);
   if(userChoice==compchoice) drawGame();
   else{
    let UserWin = true;
    if(userChoice=="rock"){
    UserWin = compchoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
      UserWin = compchoice === "scissors" ? false : true;
   }
   else {
      UserWin = compchoice === "rock" ? false : true;
    }
      showWinner(UserWin, userChoice, compchoice);
}
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});