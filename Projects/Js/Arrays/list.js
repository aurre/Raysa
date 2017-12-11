window.onload = function () {
    var todos = [];
    var input = prompt("What would you like to do?");


    while (input !== "quit") {
        if (input === "list") {
            listTodos();

        } else if (input === "new") {
            addNewTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");


    }
    console.log("Ok, you quit the app");

    function listTodos() {
        todos.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("***********")
    }

    function addNewTodo() {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }

    function deleteTodo() {
        var index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        alert("Your todo has been deleted");
    }

}

// printReverse()
var numList = [5, 4, 3, 2, 1];
var reversed = numList.reverse();

numList.forEach(function printReverse(reversed){
    console.log(reversed)
}) ;


// isUniform()
function isUniform(myArray) {
    var passing = true;
    myArray.forEach(function(element) {
        if (element !== myArray[0]) {
            passing = false;
        }
    });

    return passing;
}

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a", "b", "p"]);
isUniform(["b","b", "b"]);

// sumArray()
function sumArray(myArray){
    var sum = myArray.reduce(add,0);
    return sum;

    function add(a,b){
        return a + b;
    }
}

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

// max()
function max(numArray) {
    return Math.max.apply(null, numArray);
}