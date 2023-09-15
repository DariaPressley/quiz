var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("answer");
var resultContainer = document.getElementById("result-container");
var scoreElement = document.getElementById("score");
var instructions = document.getElementsByClassName("instructions"); 
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var quizQuestion= [questionOne, questionTwo, questionThree, questionFour, questionFive]

var questionOne = {question:"What does API stand for?",
answerOne:["Application Programming Interface","Application Painting Interior","Appendix Pending Initiation","none of the above"],
correctIndex: 0};

var questionTwo = {question:"What is the purpose of a README.md?",
answerTwo: ["none of the above","This document is not needed.", "To store extra code.","To serve as a warning for risky websites."],
correctIndex: 0};

var questionThree = {question:"What does Javascript do?",
answerThree: ["Give the page glitter.","Nothing.", "Hides browser history.","Make web pages interactive."],
correctIndex: 3};

var questionFour = {question:"Which is NOT a kind of variable?",
answerFour: ["string", "starred", "boolean", "number"],
correctIndex: 1};

var questionFive = {question:"What kind of elements does a parent element contain?",
answerFive: ["pet","child","dress","interior"],
correctIndex: 1};

var currentQuestionIndex = 0;
var score = 0;

var startButton = document.getElementById("startbutton");
startButton.addEventListener('click', function () {
    startQuiz();
});

function startQuiz() {
    startButton.style.display = "none";
    startTimer();
    questionElement.display (questionOne)
}

var secondsLeft = 60
function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
}, 1000);
}

