//Sum of Digits of a Number

function getSumOfDigits(integer) {
    var sum = 0;
    var digits =  integer.toString().split('')
    console.log(digits)
    for(var ix = 0; ix < digits.length; ix++) {
      sum += +(digits[ix]);
    }
    return sum;
    
  }
