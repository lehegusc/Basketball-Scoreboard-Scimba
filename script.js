let counterHome = document.getElementById("score-home");
let counterGuest = document.getElementById("score-guest");

function homeAdd1() {
    let num = parseInt(counterHome.textContent);
    num = num + 1;
    counterHome.textContent = num;
}

function homeAdd2() {
    let num = parseInt(counterHome.textContent);
    num = num + 2;
    counterHome.textContent = num;
}

function homeAdd3() {
    let num = parseInt(counterHome.textContent);
    num = num + 3;
    counterHome.textContent = num;
}

function guestAdd1() {
    let num = parseInt(counterGuest.textContent);
    num = num + 1;
    counterGuest.textContent = num;
}

function guestAdd2() {
    let num = parseInt(counterGuest.textContent);
    num = num + 2;
    counterGuest.textContent = num;
}

function guestAdd3() {
    let num = parseInt(counterGuest.textContent);
    num = num + 3;
    counterGuest.textContent = num;
}