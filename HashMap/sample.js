class HashTable {
    constructor (size = 20){
        this.table = new Array (size)
    }


hash(key){
    let total = 0
    for(let char of key){
        total += char.charCodeAt(0)
    }

    return total % this.table.length
}

set(key , val ){
  let index = this.hash(key)
  
  if(!this.table[index]){
    this.table[index] = []
  }
    this.table[index].push([key , val])
  }



get (key){
    let index = this.hash(key)

    if(this.table[index]){
        for(let pair of this.table[index]){
            if(pair[0] === key){
                return pair[1]
            }
        }
    }
    return null
}

delete (key){
    let index = this.hash(key)
        if(this.table[index]){
            this.table[index] = this.table[index].filter(pair => pair[0] !== key)
        }
    
}
}


const call = new HashTable()

call.set("name" , "jeevan")
call.delete("name")
console.log(call.get("name"));
