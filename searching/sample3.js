
function search(arr , t){
    let left = 0 
    let right = arr.length -1

    while(left <= right){
       let mid = Math.floor((left + right)/2)

       if(arr[mid] == t){
        if(mid === arr.length-1 || arr[mid + 1] !== t){
            return mid
        }else{
            left = mid + 1
        }
       }else if(arr[mid] < t){
        left = mid + 1
       }else {
        right = mid -1
       }
    }
    
    return -1

}

console.log(search([10,15,20,20,40],2));
