//Given a string s. You have to return another string such that even-indexed
//  and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

function sortMyString(S) {
    let odd=''
    let even=''
    let arr = S.split('')
    for(let i=0; i<arr.length; i++){
      if(i%2==0){
        even += S[i]
      }else{
        odd += S[i]
      }
    }console.log(odd)
      return even +' ' + odd;
    }

