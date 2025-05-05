function binary (arr,target){
    let high = arr.length-1
    let low = 0

    while(low <= high){
        let min = Math.floor((low + high)/2)
       
            if(arr[min] === target){
                return min
            }else if(arr[min] < target){
                low = min+1
            }else{
                high = min-1
            }
        
        }
        return -1
}

// let arr = [1,2,3,4,5,6,7,8,9]

// console.log(binary(arr,3));


// Binar Search using Recursion

function binarySearch (arr,target,low=0,high=arr.length){
    console.log(low);
    
    
    if(low > high) return -1
    let mid = Math.floor((low + high)/2)
    console.log(mid)
    if(arr[mid] === target){
        return mid
    }else if(arr[arr] < target){
        return binarySearch(arr,target,mid+1,high)
    }else{
        return binarySearch(arr,target,low,mid-1)
       
    }
}

let arr = [1,2,3,4,5,6,7,8,9]

console.log(binarySearch(arr,10));
