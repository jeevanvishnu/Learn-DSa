const myfun = (n) =>{
    if(n === 0) return

        console.log("Hello Jeevan",n);
        myfun(n-1)
    
}

myfun(10)


// const facatiory = (n) =>{
//     if(n === 0) return 1
//     return n*facatiory(n-1)
// }

// console.log(facatiory(8));


function sum (arr) {
    if(arr.length === 0) {
        return 0
    }
    let lastElement = arr.pop()
    console.log(lastElement);
    
    
    return lastElement+sum(arr)
}

console.log(sum([1,2,3,4,5]));

// find the product of an element of the array

const product = (arr)=>{
    if(arr.length === 0){
        return 1
    }

    
    return arr[arr.length-1] * product(arr.slice(0,arr.length-1))
}

console.log(product([1,2,3,4,5]));



// fimanachi number

const fimo= (n)=>{
  if(n < 2) return n
  return fimo(n-1) + fimo(n-2)
}
console.log(fimo(2));


// whethere the string palandron or not

function pala (n){
    if(n <=1) return true

    if(n[0] !=n[n.length-1]) return false

    return pala(n.slice(1,n.length-1))
}

console.log(pala("malayalam"));


// Create pow(x, n) function which returns x^n

function pow (x,n){
    if(n < 1) return 1

    return x * pow(x,n-1)
}
console.log(pow(2,3));

// Create a function which returns the number of digits in a number (e.g., countDigits(453) is 3)

function countDigits(num){
    num = Math.abs(num)
    if(num < 10){
        return 1
    }
    return 1 + countDigits(Math.floor(num/10))
}

console.log(countDigits(121));


// Create a function to reverse a string

function revese (str){
    if(str === '') return " "
    return revese(str.slice(1))+str[0]
}

console.log(revese("Jeevan"));
