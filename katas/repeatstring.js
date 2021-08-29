function repeatStr (n, s) {
    let newString = ''
    while(n > 0) {
        newString += s
        n--
    }
    return newString
}

function repeatStr (n, s) {
    let newString = ''
    while(n-- > 0) newString += s
    return newString
}

function repeatStr (n, s) {
    let newString = ''
    for(let i = 0; i < n; i++) {
        newString += s
    }
    return newString
}

function repeatStr (n, s) {
    let newString = []
    for(let i = 0; i < n; i++) {
        newString.push(s)
    }
    return newString.join('')
}

const repeatStr = (n, s) => s.repeat(n)

const repeatStr = (n, s) => s["repeat"](n)

function repeatStr (n, s) {
    return n > 1 ? s + repeatStr(--n, s) : s;
  }


  const repeatStr = (n, s) => {
    return Array.apply(null, Array(n)).map((i) => s).join('')
}

function repeatStr (n, s) {
    return Array(n+1).join(s);
  }

  function repeatStr (n, s) {
    return new Array(n).fill(s).join('');
  }

  function repeatStr (n, s) {
    return Array.from(Array(n)).reduce(acc => acc + s, '')
}