
function celsiusToFahrenhait() {
    var c = document.getElementById("celsius").value;
    fahrenhait = 9 * c / 5 + 32;
    document.getElementById("result").innerHTML = fahrenhait ;
};

function fahrenhaitToCelsius() {
    var f = document.getElementById("fahrenhait").value;
    celsius = 5 / 9 * (f - 32);
    document.getElementById("result1").innerHTML = celsius;
};



