// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
    return x.reduce((x, y) => Number(x) + Number(y), 0);
  }

  function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

  function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }

  function sumMix(x){
    return eval( x.join("+") )
  }


  function sumMix(x){
    var newArr = [];
      for(i=0; i< x.length; i++){
         if(typeof(x[i]) === 'string') {
            newArr.push(parseInt(x[i],10));
          } else newArr.push(x[i])
        }
        return newArr.reduce((a,b)=> a+b);
    }
    