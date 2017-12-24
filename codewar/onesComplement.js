function onesComplement(n) {
    var arr = n.split("");
    var arr2 = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            var digit = 0;
        } else {
            digit = 1;
        }
        arr2.push(digit);

    };

    return  arr2.join('');
};

console.log(onesComplement("1101"));