function add(a,b) {
    console.log(a + b) ;
}

function rest(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

var h1 = document.querySelector("h1");

h1.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000);