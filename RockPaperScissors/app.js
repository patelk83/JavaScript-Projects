let userScore = 0;
let computerScore = 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");

console.log(scissors_div);
function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function converToWord(letter){
  if(letter=="r") return "Rock";
  if(letter=="p") return "Paper";
  if(letter=="s") return "Scissors";
  return 0;
}
function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML=`${converToWord(userChoice)}${smallUserWord} beats ${converToWord(computerChoice)}${smallcompWord}, You win! &#128512;`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow')},3000);
}

function lose(userChoice,computerChoice){
  computerScore++;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML=`${converToWord(userChoice)}${smallUserWord} loses to ${converToWord(computerChoice)}${smallcompWord}, you lost..&#128532;`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-glow')},3000);

}
function draw(userChoice,computerChoice){

  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML=`${converToWord(userChoice)}${smallUserWord} equals ${converToWord(computerChoice)}${smallcompWord}, It's draw &#128528;`;
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function(){ document.getElementById(userChoice).classList.remove('gray-glow')},3000);
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    //case "rp":
    case "pr":
    case "sp":
    win(userChoice,computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice,computerChoice);
      break;
  case "rr":
  case "pp":
  case "ss":
   draw(userChoice,computerChoice);
   break;


  }
}
function main(){
rock_div.addEventListener('click',function() {
  game("r");
})
scissors_div.addEventListener('click',function() {
  game("s");
})
paper_div.addEventListener('click',function() {
  game("p");
})

}

main();
