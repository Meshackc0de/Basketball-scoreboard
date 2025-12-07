let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById('guest-score-el')
let homeScore = 0;
let guestScore = 0;

function addPoints(team, points){
    if(team === 'home'){
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if( team === 'guest'){
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }

}

function resetHomeScore(){
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
}
function resetGuestScore(){
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
}