// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// examples:

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1



function isNice(arr){
    var nice = []
    var count = 0
    if(arr.length==0) return false
      for(var i=0;i<arr.length;i++){
        nice.push(arr[i]+1)
        nice.push(arr[i]-1)
      }
      
      for(var j=0;j<arr.length;j++){
      if(nice.includes(arr[j])) count+=1
      }
      
      if(count==arr.length) return true
      return false
  }