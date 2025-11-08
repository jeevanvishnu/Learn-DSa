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
    deleteLastNode(){
        if(!this.head){
            console.log("List is empty");
            return
        }

        if(!this.head.next){
            this.head = null
            return
        }

        let curent = this.head
        while(curent.next.next){
            curent = curent.next
        }
        curent.next = null
    }

    search(data){
       let current = this.head
       let postion = 0
        while(current){
            if(current.data === data){
                console.log(`${postion} data found postion`);
            
            }
            current = current.next
            postion++
        }
        console.log("Not Found");
        
    }

    reverse(){
        let prev = null
        let current = this.head
        let next = null

        while(current){
            next = current.next // 20
            current.next = prev 
            prev = current  // 10
            current = next
        }
        this.head =prev
    }

    clear(){
        this.head = null
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
list.append(40)
list.search(2)
list.reverse()
list.deleteFirstNode()
list.deleteLastNode()
list.print()