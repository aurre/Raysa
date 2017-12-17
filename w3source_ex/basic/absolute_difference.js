var givenNumber = prompt("Enter a number please");

if (givenNumber < 13) {
    alert("The diffence between 13 and " + givenNumber + " is " + (13 - givenNumber));
} else {
    alert("The diffence between 13 and " + givenNumber + " is " + Math.abs((13 - givenNumber) * 2));
}



