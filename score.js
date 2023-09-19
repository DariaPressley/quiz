var highScore = JSON.parse(localStorage.getItem("highScore")) || []
var highScoresEl = document.getElementById("highScores")

for (let i = 0; i < highScore.length; i++) {
    const entry = highScore[i];
    var pEl= document.createElement("p")
    pEl.textContent="intials: "+ entry.name + " score: " + entry.score;
    highScoresEl.append(pEl);
}