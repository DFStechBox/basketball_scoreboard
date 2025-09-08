  
score = localStorage.getItem("homeScore")
score = parseInt(score)
if (!score) {
  score = 0
}



function homeScoreFunction1() {
    score += 1
    document.querySelector(".homeScore").textContent = score;
    localStorage.setItem("homeScore", score)
    console.log(localStorage)
  
}