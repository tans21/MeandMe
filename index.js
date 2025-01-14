var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;


var userName = readlineSync.question(chalk.blue("What is your name? "));
console.log(chalk.rgb(255, 136, 0).bold("Welcome ") + chalk.rgb(255, 136, 0).bold(userName));
console.log(chalk.rgb(255, 136, 0).bold("Let's check how well you know your friend ")+chalk.rgb(255, 136, 0).bold.underline("ANSHIKA")+chalk.rgb(255, 136, 0).bold(" !!!"));
console.log("---------------------------")


//play function
function play(question, answer) {
  var urAnswer = readlineSync.question(question);

  if(urAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("Right!!"));
    score = score + 1;
  }
  else {
    console.log(chalk.red("Wrong!!"));
  }
  console.log("----------------------------");
}
//array of objects

var questions = [{
  question: "Where do I live? ",
  answer: "india"
}, {
  question: "What's my favourite colour? ",
  answer: "Yellow"
}, {
  question: "How old I am? ",
  answer: "22"
}, {
  question: "What is my proffession? ",
  answer: "engineer"
}, {
  question: "What's my favourite season? ",
  answer: "summer"
}, {
  question: "What's my nickname? ",
  answer: "Tanu"
}, {
  question: "What's my last name? ",
  answer: "chauhan"
}, {
  question: "Number of languages I know? ",
  answer: "4"
}];

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

// option 1
console.log("What would be my favourite drink? ");

var drinks = [ 'coffee', 'juice', 'milk', 'chai',],
index = readlineSync.keyInSelect(drinks, 'Type here...: ', {cancel: "no one"});

if(drinks[index]==='chai'){
  console.log(chalk.green("Right!!"));
  score++;
}
else {
  console.log(chalk.red("Wrong!!"));
}
console.log("----------------------------");

//option 2
console.log("What would be my favourite place? ");

var place = [ 'temple', 'hostel', 'home', 'friends house'],
index = readlineSync.keyInSelect(place, 'Type here...: ', {cancel: "no one"});

if(place[index]==='home'){
  console.log(chalk.green("Right!!"));
  score++;
}
else {
  console.log(chalk.red("Wrong!!"));
}
console.log("----------------------------");

//option 3
console.log("I am born in which place? ");

var born = ['1st', '2nd', '3rd'],
index = readlineSync.keyInSelect(born, 'Type here...: ', {cancel: "don't know"});

if(born[index]==='2nd'){
  console.log(chalk.green("Right!!"));
  score++;
}
else {
  console.log(chalk.red("Wrong!!"));
}
console.log("----------------------------");


if(score>0) {
  console.log(chalk.yellowBright("YAY! You scored: ", score, "/ 11"));
}
else {
  console.log(chalk.red("You scored: 0"));
  console.log(chalk.red.bold.bgWhite("You need to know me better!"));
}
if(score>9) {
  console.log(chalk.green("You are the highest scorer!"));
  console.log(chalk.green("Sent the screenshot of your score to me to update the highscore list!!"));
}
console.log(chalk.rgb(255, 136, 0).bold("Thank you for playing!!"));
console.log("----------------------------");
console.log(chalk.rgb(255, 136, 0).bold("Check out the highscores: "));
console.log(chalk.rgb(255, 136, 0).bold(" Parul: 9"));
console.log("----------------------------");


