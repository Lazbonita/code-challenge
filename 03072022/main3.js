// The function will take in a number and will return True if it is a prime number and False if it is not.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.



function isPrime(n) {
    let isprime = true
    
    if(n<2){
      isprime = false
    }else{
   for(let i=2; i<n; i++){
   if(n%i==0){
     isprime = false
   }}
   }console.log(n)
     return isprime
     
   }


