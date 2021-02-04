//8ku check for palindrone

let isPalindrome=(x)=> x.toLowerCase().split('').reverse().join('') == x.toLowerCase() ? true : false 

function isPalindrome(x) {
    x = x.toLowerCase()
    let a = 0
    let b = x.length
    while (a < b) {
      if (x[a] != x[b-1])
        return false
      a++
      b--
    }
    return true
  }