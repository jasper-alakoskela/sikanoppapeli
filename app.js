
let p1Score = document.getElementById("p1score");
let p2Score = document.getElementById("p2score");
let status = document.getElementById("status");
let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");

let players = ["player1", "player2"];

function rollDice() {
    let die1 = document.getElementById("die1")
    let status = document.getElementById("status");
    let d1 = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = d1;
    status.innerHTML = d1;
}

