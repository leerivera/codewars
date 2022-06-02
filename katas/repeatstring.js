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