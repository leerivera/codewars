// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

 strCount = (str, letter) => str.split(letter).length -1

 function strCount(str, letter){  
  
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] == letter)
        count++;
    }
    
    return count;
    
  }

  function strCount(str, letter){  
    return str.split('').filter(a => a==letter).length;
  }

  function strCount(str, letter){  
    var occurences=0;
    if(str=='')
    {
      return 0;
    }
   
   for(var i=0;i<str.length;i++)
   {
      if(str.charAt(i)==letter)
      {
        occurences++;
      }
   }
   return occurences;
   }


   function strCount(str, letter) { 
    let count = 0;
    
    [...str].forEach(char => char == letter ? count++ : count);
    
    return count;
  }