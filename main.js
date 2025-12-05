let scoreEl = document.getElementById("score-el");
let guestScoreEl = document.getElementById('guest-score-el')
let homeScore = 0;
let guestScore = 0;

function addPints(team, points){
    if(team === 'home'){
        homeScore += points;
        scoreEl.textContent = homeScore;
    } else if( team === 'guest'){
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }

}

function plusOne(){
    homeScore += 1;
    guestScore += 1;
    scoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}
function plusTwo(){
    score += 2;
    scoreEl.textContent = score;
}

function plusThree(){
    score += 3;
    scoreEl.textContent = score;
}

function resetHomeScore(){
    score = 0;
    scoreEl.textContent = score;
}

// function addOne(){
//     score += 1
//     guestScoreEl.textContent = score;
// }
function addTwo(){
    score += 2
    guestScoreEl.textContent = score;
}
function addThree(){
    score += 3
    guestScoreEl.textContent = score;
}

function resetGuestScore(){
    score = 0;
    guestScoreEl.textContent = score;
}