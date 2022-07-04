// The MOD-operator % (aka mod/modulus/remainder):

// Returns the remainder of a division operation.
// The sign of the result is the same as the sign of the first operand.
// (Different behavior in Python!)
// The short unbelievable mad story for this kata:
// I wrote a program and needed the remainder of the division by 256. And then it happened: The "5"/"%"-Key did not react. It must be broken! So I needed a way to:

// Calculate the remainder of the division by 256 without the %-operator.
// Also here some examples:

// Input 254  -> Result 254
// Input 256  -> Result 0
// Input 258  -> Result 2 




function mod256WithoutMod(number)
{if(number<256 && number>-256){
  number=number
}else 
 if(number>=256)
    
{   do{ number =number-256}
   while(number>=256)
  
  }else if(number<=-256){
    do{ number +=256}
    while(number<=-256)
  }
  
  
  return number;
}