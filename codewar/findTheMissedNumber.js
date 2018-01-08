function findNumber(start, stop, str){
    var result = [];
    for (var i = stop; i >= start; i--) {
        if (str.includes(i)) {
            str = str.replace(i, '');
        } else {
            result.push(i);
        }
    }
     return result;
};

string = "578910";
console.log(findNumber(5, 10, string));

// Incomplete
