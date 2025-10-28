function search (x){
    let i = 1

    while( i * i <= x){
        i++
    }
    return (i -1)
}

console.log(search(25));
