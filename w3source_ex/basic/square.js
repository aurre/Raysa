function squareDigits(num) {
    var newArr = [];
    var digits = ("" + num).split('');

    for (i = 0; i < digits.length; i++) {
        var squareResult = Math.pow(digits[i], 2);
        newArr.push(squareResult);
    }
    return newArr.join('').valueOf();
};

console.log(squareDigits(9119));