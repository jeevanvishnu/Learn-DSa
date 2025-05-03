// class Node {
//     constructor(value){
//         this.head = value
//         this.next = null
//     }
// }


// class Linkedllst {
//     constructor(value){
//         this.head = new Node(value)
//         this.tail = this.head
//         this.length =1 
//     }

//     push(value){
//         let newNode = new Node(value)
//         this.tail.next = newNode
//         this.tail = newNode
//         this.length++
//     }

//     pop(){
//         let temp = this.head
//         let pre = this.head
//         while(temp.next){
//             pre = temp
//             temp = pre.next
//             this.length--
//         }
//         this.tail = pre
//         this.tail.next = null
//         return temp
//     }

//     unShift(value){
//         let newValue = new Node(value)
//         if(!this.head){
//             this.head = newValue
//             this.tail = newValue
//         }

//         newValue.next = this.head
//         this.head = newValue
//         this.length++
//         return this

//     }
// }





// const myfun = new Linkedllst(1)
// myfun.push(10)
// // myfun.pop()
// myfun.unShift(0)
// console.log(myfun)







// ______________________________________________________


class Node{
  constructor(value,next){
    this.head = value,
    this.next = null
  }
}



const myNode = new Node(100)
console.log(myNode);
