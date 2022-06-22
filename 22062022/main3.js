// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"


//MY SOLUTION

function remove (string) {
    let arr= string.split('')
    
      if(arr[arr.length-1]==='!'){
        arr.pop(arr[arr.length-1])
      }
    
    return arr.join('')


    }


//BEST SOLUTION


function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s
  }
