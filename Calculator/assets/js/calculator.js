
function sum() {
    var a = document.getElementById("a").value;
    document.getElementById("a").value = "0";
    var b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = (+a + +b);
    document.getElementById("b").value = "0";
};

function rest() {
    var a = document.getElementById("a").value;
    document.getElementById("a").value = "0";
    var b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = "The result is " +  (+a - +b);
    document.getElementById("b").value = "0";
};

function multiply() {
    var a = document.getElementById("a").value;
    document.getElementById("a").value = "0";
    var b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = "The result is " +  (+a * +b);
    document.getElementById("b").value = "0";
};

function divide() {
    var a = document.getElementById("a").value;
    document.getElementById("a").value = "0";
    var b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = "The result is " + (+a / +b);
    document.getElementById("b").value = "0";
};






