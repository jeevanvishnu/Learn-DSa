// Linear search give an array which index of that array


const LinearSearch = (arr,target) =>{
   for(let i = 0 ; i<arr.length;i++){
    
    if(arr[i] === target){
        return i
    }
}
return -1
}

console.log(LinearSearch([1,2,4,9,2,8],9));


function check (arr){
  let count = 0
  for(let i = 0 ; i<arr.length;i++){
    console.log(arr[i]);
    
    for(let j = i +1 ; j<arr.length;j++){
        if(arr[i] + arr[j]==10){
            ++count
        }
    }
}
return count
}

console.log(check([1,2,3,4,5,6,7,8]));
