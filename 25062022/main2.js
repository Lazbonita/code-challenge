// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences
// except the first and the last ones but this time separated by spaces.

//MY SOLUTION

function array(arr){
    let newArr = arr.split(',')
    if(newArr.length<3){
      return null
    }else{
    newArr.pop()
      newArr.shift()
      return newArr.join(' ')
    }
    }


//BEST SOLUTION

function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }


    