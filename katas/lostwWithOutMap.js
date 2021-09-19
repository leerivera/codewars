// 8kyu lost without a map double the value of each el in an array

function maps(x){
    return x.map(el => el *2)
  }


function maps(x) {
  //return x.map(el => el * 2);
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}