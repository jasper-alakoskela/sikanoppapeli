
let p1Score = document.getElementById("p1score");
let p2Score = document.getElementById("p2score");
let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");
let p1Name = document.getElementById("p1name");
let p2Name = document.getElementById("p2name");

let players = [{name: p1Name, score: p1Score}, {name: p2Name, score: p2Score}]

let dice = 0;
let score = 0;
let turn = 0;

function rollDice(){
    let dice = document.getElementById("die1");
    dice = Math.floor(Math.random() * 6) + 1;
    die.innerHTML = dice;
    score += dice;

    if (dice == 1) {
        score = 0;
        turn = 1;
    }

    update();
    changeTurn();
}

function changeTurn() {
    if (turn == 0) {
        turn = 0;
       p1Name.style.color = "red";
       p2Name.style.color = "#cacaca";
    }
    else {
        turn = 1;
        p2Name.style.color = "red";
        p1Name.style.color = "#cacaca";
    }
    console.log(turn);
}

function update(){
    document.getElementById("score").innerHTML = score;
}