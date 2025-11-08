class Node {
    constructor (data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    append(data){
        let newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            return
        }

        let curent = this.head
        while(curent.next){
            curent = curent.next
        }

        curent.next = newNode
    }

    insertFirstNode(data){
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    deleteFirstNode(){
        if(!this.head) return
        
        this.head = this.head.next
    }

    print(){
        let current = this.head

        let result = ""
        while(current){
            result += current.data + "->"
            current = current.next
        }

        console.log(result + 'null');
        
    }
}

const list = new LinkedList()

list.append(10)
list.append(20)
list.insertFirstNode(15)
list.append(30)
list.deleteFirstNode()
list.print()