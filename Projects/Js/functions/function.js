function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    if (num % 2 === 1) {
        return false;
    }
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return factorial(num - 1) * num;
}

factorial(5);
factorial(2);
factorial(10);
factorial(0);


function kebabToSnake(kebabCased) {
   return kebabCased2 = kebabCased.replace(/-/g, "_");
}

kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");