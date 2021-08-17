


// Complete the solution so that the function will break up camel casing, using a space between words.



function solution(string) {
    let result = '';
    
    for (let i = 0; i < string.length; i += 1) {
      string[i].charCodeAt() > 96 ? result += string[i] : result += ` ${string[i]}`
    }
    
    return result;
  }

  function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }