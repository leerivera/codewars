// 8kyu double char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
let doubleChar =(str) => str.split('').map(x=> x+x).join('')


function doubleChar(str) {
    var word = '';
    for (var i = 0; i < str.length; i++){
      word = word + str[i] + str[i];
    };
    return word;
  };

  function doubleChar(str) {
    return str.split("").map(function (c) {
      return c + c;
    }).join("");
  }