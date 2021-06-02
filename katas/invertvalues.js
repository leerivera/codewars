// 8kyu invert values
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
    return array.map( x => x === 0 ? x : -x);
  }

  function invert(array) {
    return array.map(i => 0 - i);
  }

  function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
  }
  