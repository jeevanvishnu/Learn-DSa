// Question 1 . how do you check if array existing is an array


// let arr =["Hello"]
// const findElement = (arr, target) => {
//   for (let x of arr) {
//     if (x == target) {
//       return true;
//     } else {
//     }
// }
// return false;
// };

// console.log(findElement(arr, "Helo"));


// Next method

// const findElement = arr.includes("Hello") 

// console.log(findElement)


// Question no 2 : How can you check if array equall or not

// function equall (arr1,arr2){

//  return arr1.length === arr2.length && arr1.every((even,i)=>arr1[i]===arr2[i])
// }

// console.log(equall([1,2,3],[1,2,3]))


// const char ="hello Jeevan How Are You"

// const data = char.charAt(0).toUpperCase() + char.slice(1)


// const data ={
//     name:"Jeevan",
//     age:19
// }

// const strObj = JSON.stringify(data)
// console.log(JSON.parse(strObj));


// const chunks = (array , size)=>{
//     const chunkes = []
//     let index = 0

//     while(index < array.length){
//        const chuk = array.slice(index,index+size)
//        console.log(chuk)
//         chunkes.push(chuk)
//         index +=size
//     }
//   return chunkes
// }

// const data = chunks([1,2,3,4,5,6,7,8],3)
// console.log(data)