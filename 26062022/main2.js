//Find the mean (average) of a list of numbers in an array.


var findAverage = function (nums) {
    let sum = nums.reduce((a,b)=>a+b, 0)
    return sum/nums.length
  }


