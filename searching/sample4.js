function search (arr){
   let left = 0 , right = arr.length -1
   let first = -1

   while(left <= right){
     let mid = Math.floor((left + right)/2)

     if(arr[mid] == 1){
        first = mid
        right = mid -1
     }else {
        left = mid +1
     }
   }
   return first === -1 ? 0 : arr.length - first
}

console.log(search([0,0,1,1,1,1]));
