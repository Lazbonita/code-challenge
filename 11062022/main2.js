//Create a function that accepts 2 string arguments 
//and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0



function strCount(str, letter){  
    return str.split(letter).length-1 //split the string on the given letter and return the length of the array minus one 
  }
