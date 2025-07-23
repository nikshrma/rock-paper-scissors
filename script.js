let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice-btn");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    let compChoice = generateComputerChoice();
    let winner = compareChoices(userChoice, compChoice);
    updateScores(winner);
    roundInfo(userChoice,compChoice);
  });
});

function generateComputerChoice() {
  let choiceArr = ["rock", "paper", "scissors"];
  let compChoice = choiceArr[Math.floor(Math.random() * 3)];
  console.log(compChoice);
  return compChoice;
}
function compareChoices(user, comp) {
    let byline = document.getElementById("round-byline");
  if (user === comp) {
    byline.innerText = "That's a draw!"
    byline.style.color="#1F375B";
    return "draw";
  }
  if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    byline.innerText = "You win!"
    byline.style.color="#00FF00"
    return "user";
  } else {
    byline.innerText = "You lose!"
    byline.style.color="#F52314"
    return "computer";
  }
}
function updateScores(a) {
    if(a==="user"){
        userScore++;
        document.getElementById("user-score-number").innerText = userScore;
    }
    else if(a==="computer"){
        compScore++;
        document.getElementById("computer-score-number").innerText = compScore;
    }
    else{
        userScore++;
        compScore++;
        document.getElementById("user-score-number").innerText = userScore;
        document.getElementById("computer-score-number").innerText = compScore;
    }
}
function roundInfo(a,b) {
    const emojiMap = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
  };
  document.getElementById("user-choice").innerText= emojiMap[a];
  document.getElementById("computer-choice").innerText= emojiMap[b];
}
document.getElementById("reset-btn").addEventListener(("click"),()=>{
    userScore=0;
    compScore=0;
    document.getElementById("user-score-number").innerText = userScore;
    document.getElementById("computer-score-number").innerText = compScore;
    document.getElementById("round-byline").innerText = "Make your choice!";
    document.getElementById("round-byline").style.color = "#1F375B";
    document.getElementById("user-choice").innerText="";
    document.getElementById("computer-choice").innerText="";


})