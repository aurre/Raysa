var oneDay = 24 * 60 * 60 * 1000;

var today = new Date();
var nextBirthday = new Date('May 23, 2018');

var daysLeft = Math.round(Math.abs((today.getTime() - nextBirthday.getTime()) / (oneDay)));

console.log(daysLeft);

