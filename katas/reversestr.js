// reverse string

function solution(str){
    str.split('').reverse('').join('')
  }


function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }