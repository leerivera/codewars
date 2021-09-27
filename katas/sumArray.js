// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

let sumArray = (array) => array == null || array.length < 3   ? 0 : array.sort((a,b)=> a-b )
.filter((x,i) => i > 0 && i < array.length-1 )
.reduce((acc,c)=> acc+c,0 ) 