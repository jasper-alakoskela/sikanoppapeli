const form = document.getElementById("form");
const saveBtn = document.getElementById("savebtn");
const p1Name = document.getElementById("p1name");
const p2Name = document.getElementById("p2name");
const p1Color = document.getElementsByName("p1color");
const p2Color = document.getElementsByName("p2color");
const dice = document.getElementsByName("dice");

const dice1Link = document.getElementById("dice1link");
const dice2Link = document.getElementById("dice2link");

form.addEventListener("saveBtn", (e) => {

    e.preventDefault();
    console.log(p1Name.value);
    console.log(p2Name.value);
    p1ColorSelector();
    p2ColorSelector();
    diceSelector();
    chooseScore();

});

function p1ColorSelector() {

    if (p1Color[0].checked == true) {
        console.log("1blue");
    }
    else if (p1Color[1].checked == true) {
        console.log("1green");
    }
    else if (p1Color[2].checked == true) {
        console.log("1pink");
    }
    else {
        console.log("1yellow");
    }
}

function p2ColorSelector() {

    if (p2Color[0].checked == true) {
        console.log("2blue");
    }
    else if (p2Color[1].checked == true) {
        console.log("2green");
    }
    else if (p2Color[2].checked == true) {
        console.log("2pink");
    }
    else {
        console.log("2yellow");
    }
}

function diceSelector() {
    if (dice[0].checked == true) {
        console.log("1dice");
        dice2Link.style.display = "none";
    }
    else {
        console.log("2dice");
        dice1Link.style.display = "none";
    }
}

function chooseScore() {
    if (points.value == "30") {
        console.log("30");
    }
    else if (points.value == "50") {
        console.log("50");
    }
    else if (points.value == "100") {
        console.log("100");
    }
    else {
        console.log("150");
    }
}

function getData() {
    localStorage.setItem("p1Name", p1Name.value);
    localStorage.setItem("p2Name", p2Name.value);

    const p1Color = document.querySelector("input[name='p1color']:checked");
    localStorage.setItem("p1Color", p1Color.value);

    const p2Color = document.querySelector("input[name='p2color']:checked");
    localStorage.setItem("p2Color", p2Color.value);

    const dice = document.querySelector("input[name='dice']:checked");
    localStorage.setItem("dice", dice.value);

    localStorage.setItem("points", points.value);
}