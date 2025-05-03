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
