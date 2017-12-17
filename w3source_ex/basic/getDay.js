// for (i = 2014; i <= 2050; i++) {
//     first_day = new Date(`January 1, ${i}`);
//     weekday = first_day.getDay();
//     if (weekday == 0) {
//       year = first_day.getFullYear();
//       console.log("The first year that January 1st is a Sunday is: " + year);
//       break;
//     }
//   }



for (i = 2018; i < 2050; i++) {
    day = new Date(`May 23, ${i}`);
    weekday = day.getDay();
    if (weekday == 5) {
        year = day.getFullYear();
        console.log("My next birthday on a friday is in: " + year );
        break;
    }
}
  