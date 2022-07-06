// Write a program that, given a word, computes the scrabble score for that word.

// Letter Values
// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10




//MY SOLUTION
function scrabbleScore(str){
 
  
    let arr = str.toUpperCase().split('')
    
    
    let count =0
    for(let i = 0; i<arr.length; i++){
      if(arr[i]== 'A' || arr[i]== 'E' || arr[i]== 'O' ||arr[i]== 'U' 
         ||arr[i]== 'L' ||arr[i]== 'N' ||arr[i]== 'R' ||arr[i]== 'S' 
         ||arr[i]== 'T' ||arr[i]== 'I'){
         count++
         }else if(arr[i]== 'D' ||arr[i]== 'G' ){
                    count +=2
                  }else if(arr[i]== 'B' || arr[i]== 'C' || arr[i]== 'M' ||arr[i]== 'P' ){
        count +=3
      }else if(arr[i]== 'F' || arr[i]== 'H' || arr[i]== 'V' ||arr[i]== 'W' || arr[i]== 'Y'){
        count +=4
      }else if(arr[i]== 'K'){
        count +=5
      }else if(arr[i]== 'J' || arr[i]== 'X' ){
        count +=8
      }else if(arr[i]== 'Q' || arr[i]== 'Z' ){
        count +=10
      }
    }return count
  }


  //EASY SOLUTION

  function scrabbleScore(str) {
    return [].reduce.call(str.toUpperCase(), (a, c) => a + ($dict[c] || 0), 0);
  }
  


