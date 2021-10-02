// calculate avg of an array

let find_average = (array) => array.length > 0 ? array.reduce((acc,c)=> acc + c, 0)/array.length : 0

function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }