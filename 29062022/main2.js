// return the two oldest/oldest ages within the array of ages passed in.




function twoOldestAges(ages){
    let arr = ages.sort((a,b)=>a-b)
    return [arr[arr.length-2], arr[arr.length-1]]
    }
    


