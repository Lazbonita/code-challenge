// Given a number return the closest number to it that is divisible by 10.


const closestMultiple10 = num => {
    return num%10<5? 10*Math.floor(num/10): 10*Math.ceil(num/10);
  };


