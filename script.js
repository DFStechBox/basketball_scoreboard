  

let hScore = document.querySelector(".homeScore").textContent;
hScore = parseInt(hScore)
if (!hScore) {
  hScore = 0
}
let gScore = document.querySelector(".guestScore").textContent;
gScore = parseInt(gScore)
if (!gScore) {
  gScore = 0
}

function homeScoreFunction1() {
    hScore += 1
    document.querySelector(".homeScore").textContent = hScore;
    leadingTeam();
}

function homeScoreFunction2() {
    hScore += 2
    document.querySelector(".homeScore").textContent = hScore;
    leadingTeam();
}

function homeScoreFunction3() {
    hScore += 3
    document.querySelector(".homeScore").textContent = hScore;
    leadingTeam();
}


function guestScoreFunction1() {
    gScore += 1
    document.querySelector(".guestScore").textContent = gScore;
    leadingTeam();
}

function guestScoreFunction2() {
    gScore += 2
    document.querySelector(".guestScore").textContent = gScore;
    leadingTeam();
}

function guestScoreFunction3() {
    gScore += 3
    document.querySelector(".guestScore").textContent = gScore; 
    leadingTeam();
}

function newGameFunction() {
    hScore = 0
    gScore = 0
    document.querySelector(".homeScore").textContent = hScore;  
    document.querySelector(".guestScore").textContent = gScore;  
}

function leadingTeam() {
    if (hScore > gScore) {
        document.querySelector(".homeScore").style.backgroundColor = "#c9c97d";
        document.querySelector(".guestScore").style.backgroundColor = "#f97f7e";
    } else if (gScore > hScore) {
        document.querySelector(".guestScore").style.backgroundColor = "#c9c97d";
        document.querySelector(".homeScore").style.backgroundColor = "#f97f7e";
    } else {
        document.querySelector(".homeScore").style.backgroundColor = "black";
        document.querySelector(".guestScore").style.backgroundColor = "black";
    }
}