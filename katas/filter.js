//example of a filter

function newFilter(){
    let arr = ["bear", "cat"]
    let bear = ["bear"]
     newArr= arr.filter(b => !bear.includes(b))
    console.log(newArr)
}