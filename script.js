  
// score = localStorage.getItem("homeScore")
// score = parseInt(score)
let score = document.querySelector(".homeScore").textContent;
score = parseInt(score)
if (!score) {
  score = 0
}



function homeScoreFunction1() {
    score += 1
    document.querySelector(".homeScore").textContent = score;
}

function homeScoreFunction2() {
    score += 2
    document.querySelector(".homeScore").textContent = score;      
}

function homeScoreFunction3() {
    score += 3
    document.querySelector(".homeScore").textContent = score;  
}


function guestScoreFunction1() {
    score += 1
    document.querySelector(".guestScore").textContent = score;
}

function guestScoreFunction2() {
    score += 2
    document.querySelector(".guestScore").textContent = score;      
}

function guestScoreFunction3() {
    score += 3
    document.querySelector(".guestScore").textContent = score;  
}