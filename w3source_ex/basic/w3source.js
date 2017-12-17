// javascript code to calculate area of triangle with 3 sides given

var area = function(side1,side2,side3) {
    var p = (side1+side2+side3)/2;
    var a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
    return a;
}


