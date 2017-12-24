function cookie(x) {
if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!"; }
else if (typeof x === "number") {
    return "Who ate the last cookie? It was the Monica!" }
else  {
    return "Who ate the last cookie? It was dog!";
}

};

console.log(cookie([1]));



