//Given a list of digits, return the smallest number that could be formed from these digits, 
//using the digits only once (ignore duplicates).



function minValue(values){
    values = [...new Set(values)]
     return +(values.sort().join(''))
   }
