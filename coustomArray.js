class myArray {
    constructor(){
        this.length = 0
        this.data ={}
    }

    add(item){
        this.data[this.length] = item
        this.length++
      return this.length
    }
    get(index){
       return this.data[index]
    }

    pop(){
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length -1]
        this.length--
        return lastItem
    }
}



const myNewArray = new myArray()
myNewArray.add("apple")
myNewArray.add("Orange")
myNewArray.add("Grape")
myNewArray.add("Banana")
console.log(myNewArray.pop())

// console.log(myNewArray.get(2))

console.log(myNewArray)
