let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");

let p1Name = document.getElementById("p1name");
let p2Name = document.getElementById("p2name");

let gameData = JSON.parse(localStorage.getItem("gameData"));

p1Name.innerHTML = gameData.players[0].name;
p2Name.innerHTML = gameData.players[1].name;



p1Name.style.color = gameData.players[0].color;

let winScore = document.getElementById("winScore");
winScore.innerHTML = gameData.endPoints;
winScore = gameData.endPoints;

let dice = 0;
let dice2 = 0;
let score = 0;
let turn = 0;

function rollDice() {

    let dice = document.getElementById("die");
    dice = Math.floor(Math.random() * 6) + 1;

    die.innerHTML = dice;

    let dice2 = document.getElementById("die2");
    dice2 = Math.floor(Math.random() * 6) + 1;

    die2.innerHTML = dice2;

    score = score + dice + dice2;

    if (dice == 1 && dice2 == 1) {
        score = score * 2;
        document.getElementById("getscorebtn").disabled = false;
    }

    else if (dice == 1 || dice2 == 1) {
        score = 0;
        document.getElementById("getscorebtn").disabled = true;
        changeTurn();
    }

    else {
        document.getElementById("getscorebtn").disabled = false;
    }

    if (dice == dice2) {
        score = score * 2;
        document.getElementById("getscorebtn").disabled = false;
    }

    let face1 = new Image()
    face1.src = "img/dice1.png"
    let face2 = new Image()
    face2.src = "img/dice2.png"
    let face3 = new Image()
    face3.src = "img/dice3.png"
    let face4 = new Image()
    face4.src = "img/dice4.png"
    let face5 = new Image()
    face5.src = "img/dice5.png"
    let face6 = new Image()
    face6.src = "img/dice6.png"

    document.images["die"].src = eval("face" + dice + ".src")
    document.images["die2"].src = eval("face" + dice2 + ".src")

    document.getElementById("score").innerHTML = score;


    console.log(dice);
    console.log(dice2);
}

function changeTurn() {
    document.getElementById("getscorebtn").disabled = true;
    turn++;

    if (turn == gameData.players.length) {
        turn = 0;
        p1Name.style.color = gameData.players[0].color;
        p2Name.style.color = "#cacaca";
    }
    else {
        turn = 1;
        p2Name.style.color = gameData.players[1].color;
        p1Name.style.color = "#cacaca";
    }

}

document.getElementById("getscorebtn").addEventListener("click", getScore);

function getScore() {
    if (turn == 0) {
        gameData.players[0].points += score;
        document.getElementById("p1score").innerHTML = `Pisteet:${gameData.players[0].points}`;
        score = 0;
        changeTurn();
    }
    else {
        gameData.players[1].points += score;
        document.getElementById("p2score").innerHTML = `Pisteet:${gameData.players[1].points}`;
        score = 0;
        changeTurn();
    }

    if (gameData.players[0].points >= winScore) {
        document.getElementById("p1won").style.display = "inline";
        document.getElementById("rollbtn").disabled = true;
        document.getElementById("getscorebtn").disabled = true;
        p2Name.style.color = "#cacaca";
        p1Name.style.color = "#cacaca";
    }
    else if (gameData.players[1].points >= winScore) {
        document.getElementById("p2won").style.display = "inline";
        document.getElementById("rollbtn").disabled = true;
        document.getElementById("getscorebtn").disabled = true;
        p2Name.style.color = "#cacaca";
        p1Name.style.color = "#cacaca";
    }
    else {
        document.getElementById("p1won").style.display = "none";
        document.getElementById("p2won").style.display = "none";
    }

}