// function tripleSum(a, b) {
//     if (a != b) {
//         console.log(a + b);
//     } else {
//         console.log(3 * a);
//     }

// };

// givenNumber1 = 25;
// givenNumber2 = 25;

// if (givenNumber1 == 50 && givenNumber2 == 50 || givenNumber1 + givenNumber2 == 50) {
//     console.log(true);
// } else {
//     console.log(false);
// };

var givenIntegerNumber = 350;

if (givenIntegerNumber % 2 == 0 && givenIntegerNumber < 20) {
    console.log("Your integer number is within 20");
    if (givenIntegerNumber % 2 == 0 && givenIntegerNumber < 100) {
        console.log("Your integer number is within 100");
        if (givenIntegerNumber % 2 == 0 && givenIntegerNumber < 400) {
            console.log("Your integer number is within 400");
        }
    }
};

