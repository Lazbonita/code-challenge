//Create a function that accepts a list/array and a number n, 
//and returns a list/array of the first n elements from the list/array.



//MY LONG SOLUTION
function take(arr, n) {
    let newArr = []
    if(arr.length>n){
    for(let i=0; i<n; i++){
      newArr.push(arr[i])
    }
      return newArr
    }else if (arr.length<n){
      for(let j=0; j<arr.length; j++){
       newArr.push(arr[j])
    }  return newArr
      }
    
    else{return arr}
    
    }


    //THE BEST SOLUTION

    function take(arr, n) {
        return arr.slice(0, n);
      }



