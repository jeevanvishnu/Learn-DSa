// Boubble sort

let arr = [1,4,2,5,3,8]
let swapping
function sort(arr){
    do{
        swapping = false
        for(let i = 0 ; i < arr.length-1 ; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] =  arr[i + 1]
                arr[i +1] = temp
                swapping = true
        }
    }
    }while(swapping){
        return arr
    }
    
}

console.log(sort([9,8,3,1,4,5,7,6]))


// Selection sort 

function selectionSort(arr){
    for(let i = 0 ; i<arr.length;i++){
        let mid = i
        for(let j =  i+1; j< arr.length ; j++){
           
            
            if(arr[j] <= arr[mid]){
                mid = j
               
            }
        }
      
        
        if(arr[mid] !== i){
            [arr[i],arr[mid]] = [arr[mid],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort(arr));

// insertation sort 

function insertationSort(arr){
    for(let i = 1 ; i<arr.length ; i++){
        let current = arr[i]
        let j = i - 1

        while(j > 0 && arr[j] > current){
            arr[j+1] = arr[j]
            j--

         }

         arr[j +1]= current
    }
    return  arr
}

console.log(insertationSort(arr));
