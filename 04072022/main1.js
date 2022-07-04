// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => "





//TESTS HOW TO APPLY SEVERAL MATH OPERATION ON STRINGS


function dotCalculator (equation) {
    let arr =equation.split(' ')
    if(arr[1]== '+'){
      return arr[0]+arr[2]
    
    }else if(arr[1]== '*'){
      return arr[0].repeat(arr[2].length)
    
    }else if(arr[1]== '-'){
      return arr[0].slice(0, -arr[2].length)
     
    }else if(arr[1]== '//'){
      return arr[0].slice(0, arr[0].length/arr[2].length)
   
    }
     
      
   }

