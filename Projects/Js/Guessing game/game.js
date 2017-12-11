// create secretNumber
var secretNumber = 4

//ask user for guess
var guess = prompt("Guess a number");

//check guess if guess is right
if (guess == secretNumber) {
    alert("You got it right");
}

// check if higher

else if (guess > secretNumber) {
    alert("Too high");
}

//otherwise, check if lower

else {
    alert("Too low");
}

