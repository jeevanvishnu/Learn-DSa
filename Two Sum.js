const TwoSum = (arr,target) =>{
    for(let i = 0 ; i<arr.length;i++){
        for(let j = i +1 ; j < arr.length; j++){
            if(arr[i]+arr[j] === target){

                console.log(arr[i],arr[j]);
                
                return [i , j]
            }
        }
    }
    return []
}

const data = TwoSum([2,7,11,15],9)
console.log(data);
