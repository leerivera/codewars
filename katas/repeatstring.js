function repeatStr (n, s) {
    let newString = ''
    while(n > 0) {
        newString += s
        n--
    }
    return newString
}