function timeToSeconds(time) {
  var arr = time.split(":");
  var hoursToSeconds = arr[0] * 60 * 60;
  var minutesToSeconds = arr[1] * 60;
  var seconds = arr[2];
  var result = +hoursToSeconds + +minutesToSeconds + +seconds;
  return result;
};



function secondsToTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var timeSeconds = Math.round(seconds % 60); 
  if ( minutes >= 60 ) {
    var timeHours = Math.floor( minutes / 60 );
    var timeMinutes = minutes % 60;
    time = addZero(timeHours) + ":" + addZero(timeMinutes) + ":" + addZero(timeSeconds);
  } else {
    time = "00:" + addZero(minutes) + ":" + addZero(timeSeconds);
  }
  return time;
}

function addZero(num) {
  num = +num;
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}




function speedListen(audioLength, playSpeed) {
 
let newAudioLength = timeToSeconds(audioLength);
var result = newAudioLength / playSpeed;
var time = secondsToTime(result);
console.log(time); 


};

speedListen("00:00:55", 2);