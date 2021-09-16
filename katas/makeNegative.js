// return negative 8kyu

//   In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1 makeNegative(-5); // return -5 makeNegative(0); // return 0

function makeNegative(num) {
    return (num > 0) ? parseInt(`-${num}`, 10) : num
  
  }

  function makeNegative(num) {
    return -Math.abs(num);
  }