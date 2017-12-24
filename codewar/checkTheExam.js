function checkExam(array1, array2) {
    var finalResult = [];
    var result = 0

    for (var i = 0; i < array1.length; i++) {
       
        if (array2[i] == array1[i]) {
            result = 4;
        }
        else if (array2[i] == "") {
            result = +0;
        }
        else if (array2[i] != array1[i]) {
            result = -1;

        }
        finalResult.push(result); 

    };

    var sum = 0;
    for (var i = 0; i < finalResult.length; i++) {
        sum = finalResult[i] + sum;
    };
    return sum < 0 ? 0 : sum;


};


console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));

