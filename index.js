var chalk = require("chalk");
var readlinesync = require("readline-sync");

var score = 0;

var userName = readlinesync.question("Welcome! Please enter your name? ");

console.log("welcome" , chalk.underline.bgRed(userName));
var highscores = [
  {
    name: "Viky",
    score: "5"
  } ,
  {
    name: "Mugil",
    score: "4"
  }
];

var userInput = readlinesync.question("Are you ready to check how well you know about me? ");

if (userInput === "yes") {
  console.log("Great!")

} else { 
  console.log("still give it a try you will have some fun"); 

}

function play(question, answer){
 var userAnswer = readlinesync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are correct!");
    score = score + 1;

  } else {
    console.log ("Oops..");
    score = score - 1;
  }
    console.log("Current score" , score);
    console.log("------");
}

var questions = [ 
  {
  question: "what is my favourite sport? ",
  answer: "Cricket" 
} , 

{

  question: "How old am I? ", 
  answer: "21"
} , 
{
  question: "what did I major in my college? ",
  answer: "Finance"
} ,

{
  question: "What is my favourite series? " , 
  answer: "Game of Thrones"
} , 
{
  question: "What is my favourite place to live? " ,
  answer: "New Zealand"

}
];

for (var i=0 ; i<questions.length ; i++) {
  var currentQuestion = questions[i];
  play (currentQuestion.question , currentQuestion.answer);
  
    if (i < ((questions.length)-1)){
    console.log("Next Question");
  }
}
console.log( "your final score: " + score);

for (var i=0; i<highscores.length; i++) { 
  var person = highscores[i];
  var name = person.name;
  var person_score = person.score;
} 
if(score>person_score){
  console.log("you scored greater than" , name);
}
else if(score<person_score) {
  console.log("you scored less than" , name);
}
else {
  console.log("you scored same as " , name);
}



