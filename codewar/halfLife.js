
function halfLife(quantityInitial, quantityRemaining, time) {
    var time = time * Math.LN2 / (Math.log(quantityInitial) - Math.log(quantityRemaining));
    return Math.round(time) ;
  }

console.log(halfLife(90,3,2));