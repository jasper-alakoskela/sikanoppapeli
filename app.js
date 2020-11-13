
let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");
let p1Name = document.getElementById("p1name");
let p2Name = document.getElementById("p2name");

let players = [player1, player2]

let dice = 0;
let score = 0;
let turn = 0;
let player1Score = 0;
let player2Score = 0;

function rollDice() {
    let dice = document.getElementById("die1");
    dice = Math.floor(Math.random() * 6) + 1;
    die.innerHTML = dice;
    score += dice;

    if (dice == 1) {
        score = 0;
        changeTurn();
    }

    update();

    console.log(dice);
}

function changeTurn() {

    let currentPlayer = players[turn]

    turn++;

    if (turn == players.length) {
        turn = 0;
        p1Name.style.color = "red";
        p2Name.style.color = "#cacaca";
    }
    else {
        turn = 1;
        p2Name.style.color = "red";
        p1Name.style.color = "#cacaca";
    }

}

document.getElementById("getscorebtn").addEventListener("click", getScore);

function getScore() {
    if (turn == 0) {
        player1Score += score;
        document.getElementById("p1score").innerHTML = `Pisteet:${player1Score}`;
        score = 0;
        changeTurn();
    }
    else {
        player2Score += score;
        document.getElementById("p2score").innerHTML = `Pisteet:${player2Score}`;
        score = 0;
        changeTurn();
    }
}


function update() {
    document.getElementById("score").innerHTML = score;
}
