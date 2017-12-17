var str = "w3resource";
var arr = str.split("");
var i = 0;


while (i < arr.length - 1) {
    i++;
    lasElement = arr.pop();
    arr.unshift(lasElement);
    console.log(arr);
}

