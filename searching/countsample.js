function searchCount (arr , t){

    let left = 0 , right = arr.length -1
    let count = 0
    while(left <= right){
        let mid = Math.floor((left + right) / 2)

        if(arr[mid]== t){
            if(mid  !== 0 || arr[mid-1] == t || arr[mid+1] == t){
                count ++
            }else if(arr[mid] < t){
                left = mid + 1
            }else{
                right = mid -1
            }
        }


    }
    return count
}


console.log(searchCount([1,4,5,20,20,20,50],20));
