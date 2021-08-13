
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }


function past(h, m, s) {
    let timeArray = [];
    if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
      return "what time is it?";
    } else {
      timeArray.push(h * 3600000);
      timeArray.push(m * 60000);
      timeArray.push(s * 1000);
    }
    return timeArray.reduce((a, b) => a + b, 0);
  }

  function past(h, m, s){
    var miliseconds = 0;
    miliseconds = miliseconds + s * 1000;
    miliseconds = miliseconds + m * 60000;
    miliseconds = miliseconds + h * 3600000;
    return miliseconds;
  }