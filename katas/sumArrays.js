// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


sum = numbers => numbers.reduce((prev, curr) => prev + curr, 0) 

sum = function (numbers) {
    "use strict";
    var total = 0;
    for(var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  };