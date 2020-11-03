
let stopBtn = document.getElementById("stopbtn");
let p1Score = document.getElementById("p1score");
let p2Score = document.getElementById("p2score");

function rollDice() {
    let die1 = document.getElementById("die1")
    let status = document.getElementById("status");
    let d1 = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = d1;
    checkWin();
    status.innerHTML = d1;

}
function checkWin() {
    while (d1 != 1 || stopBtn != clicked) {
        rollDice()
        if (d1 == 1 || stopBtn == clicked) {
            break;
        }
    }
}