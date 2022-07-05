//You have to create the function factorial that receives n and returns n!. You have to use recursion.

const factorial = n => {
    if (n < 0) 
         return -1;
     
   // If the number is 0, its factorial is 1.
   else if (n == 0) 
       return 1;
     
   // Otherwise, call the recursive procedure again
     else{
   return n* factorial(n-1)
 }}


