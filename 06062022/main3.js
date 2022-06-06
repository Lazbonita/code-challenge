// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. 
//The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //count of both numbers start at ero
    let x = 0
    let o = 0
    //make an array from string to be able to iterate through
    let strNew=str.toLowerCase().split('')
    //iterate through the array taking count of x's and o's
    for (let i=0; i<strNew.length; i++){
      if (strNew[i]=='o'){
        o++
      }else if(strNew[i]== 'x'){
        x++
      }
    }
    //return a comparison of coounts of both letters
      return x==o
    }