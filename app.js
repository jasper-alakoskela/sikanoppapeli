
let p1Score = document.getElementById("p1score");
let p2Score = document.getElementById("p2score");
let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");
let score = 0;

let players = ["player1", "player2"];

let d1 = parseInt(Math.floor(Math.random() * 6 + 1));

while (true) {
    score = + d1;
    if (d1 == 1) {
        score == 0;
        break;
    }
}

let die1 = document.getElementById("die1")
let status = document.getElementById("status");
die1.innerHTML = d1;
status.innerHTML = score;


