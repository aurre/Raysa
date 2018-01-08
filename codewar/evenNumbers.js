array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
newArray = [];

for (var i = 1; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        var number = array[i];
    }
    newArray.push(number);
};

console.log(newArray);






// function evenNumbers(array, number) {

//   }

//   console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);