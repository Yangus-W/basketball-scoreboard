let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")

let scoreHome = 0
let scoreGuest = 0

function addOneHome() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function addTwoHome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function addThreeHome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function addOneGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function addTwoGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function addThreeGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

function newGame() {
    scoreHome = 0
    scoreHomeEl.textContent = scoreHome
    scoreGuest = 0
    scoreGuestEl.textContent = scoreGuest
}

function compareScores() {
    if (scoreHome > scoreGuest) {
        scoreHomeEl.style.color = "yellow"
        scoreGuestEl.style.color = "#F94F6D"
    }
    else if (scoreHome < scoreGuest) {
        scoreGuestEl.style.color = "yellow"
        scoreHomeEl.style.color = "#F94F6D"
    }
    else {
        scoreGuestEl.style.color = "#F94F6D"
        scoreHomeEl.style.color = "#F94F6D"
    }
}