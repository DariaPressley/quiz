var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("answer");
var resultContainer = document.getElementById("result-container");
var scoreElement = document.getElementById("score");
var instructions = document.querySelector(".instructions");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var userName = document.getElementById ("name");

var questions = [{
  question: "What does API stand for?",
  answer: ["Application Programming Interface", "Application Painting Interior", "Appendix Pending Initiation", "none of the above"],
  correctIndex: 0
},

{
  question: "What is the purpose of a README.md?",
  answer: ["none of the above", "This document is not needed.", "To store extra code.", "To serve as a warning for risky websites."],
  correctIndex: 0
},

{
  question: "What does Javascript do?",
  answer: ["Give the page glitter.", "Nothing.", "Hides browser history.", "Make web pages interactive."],
  correctIndex: 3
},

{
  question: "Which is NOT a kind of variable?",
  answer: ["string", "starred", "boolean", "number"],
  correctIndex: 1
},

{
  question: "What kind of elements does a parent element contain?",
  answer: ["pet", "child", "dress", "interior"],
  correctIndex: 1
}]

var currentQuestionIndex = 0;
var score = 0;

var startButton = document.getElementById("startbutton");
startButton.addEventListener('click', function () {
  startQuiz();
});

function startQuiz() {
  startButton.style.display = "none";
  instructions.innerHTML = ""
  startTimer();
  displayQuestion();
}

function displayQuestion() {
  optionsElement.innerHTML = "";
  questionElement.textContent = questions[currentQuestionIndex].question
  var answerButton = document.createElement("button")
  answerButton.textContent = questions[currentQuestionIndex].answer[0]
  answerButton.setAttribute("data-index",0)
  optionsElement.append(answerButton)
  var answerButtonTwo = document.createElement("button")
  answerButtonTwo.textContent = questions[currentQuestionIndex].answer[1]
  answerButtonTwo.setAttribute("data-index",1)
  optionsElement.append(answerButtonTwo)
  var answerButtonThree = document.createElement("button")
  answerButtonThree.textContent = questions[currentQuestionIndex].answer[2]
  answerButtonThree.setAttribute("data-index",2)
  optionsElement.append(answerButtonThree)
  var answerButtonFour = document.createElement("button")
  answerButtonFour.textContent = questions[currentQuestionIndex].answer[3]
  answerButtonFour.setAttribute("data-index",3)
  optionsElement.append(answerButtonFour)
}


var secondsLeft = 60
var timerInterval

function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      endGame();
    }
  }, 1000);
}

optionsElement.addEventListener("click", function (event) {
  var clickedElement = event.target
  if (clickedElement.matches("button")) {
    if (event.target.dataset.index!=questions[currentQuestionIndex].correctIndex) {
      secondsLeft=secondsLeft-15;
    }
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    }
    else {
      endGame();
    }
  }
})

function endGame() {
  clearInterval(timerInterval);
  console.log("game ended");
  quizContainer.innerHTML="";
  updateRemainingSeconds();
}

function updateRemainingSeconds() {
  var elapsedTimeInSeconds = secondsLeft - secondsRemaining;
  updateRemainingSeconds= totalTimeInSeconds - elapsedTimeInSeconds;

  console.log (updateRemainingSeconds)
}


