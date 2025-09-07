let score = localStorage.getItem("homeScore")


function homeScoreFunction() {
  if (score === 0) {
    score += 1
    document.querySelector(".homeScore").textContent = score;
    localStorage.setItem("homeScore", score)
    console.log(localStorage)
  }

  scoreSerialized = JSON.stringify(score)
presentHomeScore = localStorage.setItem("homeScore", scoreSerialized)

 localStorage.getItem("presentHomeScore") 
    parseInt(presentHomeScore, radix) += 1
  document.querySelector(".homeScore").textContent = presentHomeScore;
  localStorage.setItem("homeScore", presentHomeScore)
}