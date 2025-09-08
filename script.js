  
score = localStorage.getItem("homeScore")
score = parseInt(score)
if (!score) {
  score = 0
}
// let scoreSerialized = JSON.stringify(score)
// let presentHomeScore = localStorage.setItem("homeScore", scoreSerialized)
// let radix = 10  



function homeScoreFunction1() {
    score += 1
    document.querySelector(".homeScore").textContent = score;
    localStorage.setItem("homeScore", score)
    console.log(localStorage)
  

//   scoreSerialized = JSON.stringify(score)
// presentHomeScore = localStorage.setItem("homeScore", scoreSerialized)

//  localStorage.getItem("presentHomeScore") 
//     parseInt(presentHomeScore, radix) += 1
//   document.querySelector(".homeScore").textContent = presentHomeScore;
//   localStorage.setItem("homeScore", presentHomeScore)
}