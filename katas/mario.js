
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).





function pipeFix(numbers){
    return Array.from({length: numbers.slice(-1) - numbers[0] +1}, (_, index) => index + numbers[0])
}

function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
  }

  function pipeFix(numbers){
    var n_array = [];
    for(var i=numbers[0];i<=numbers[numbers.length-1];i++){
      n_array.push(i);
    }
    return n_array;
  }

 
  
  function getMinOfArray(numbers) {
    return Math.min.apply(null, numbers);
  }
  
  function pipeFix(numbers){
    var newArray = [];
    var min = getMinOfArray(numbers);
    var max = getMaxOfArray(numbers);
    for (var i = min; i <= max; i++) {
      newArray.push(i);
    }
    return newArray;
  }