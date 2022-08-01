// Remove the duplicate elements from the Array 
 let array = [25,30,25,30,41,25,45,32]



function removeDuplicate(array){
    let unique = [] ;
    for (let i of array) {
        if (unique.indexOf(i)=== -1 ) {
            unique.push(i) ;
        }
    }
    console.log(unique)
}
removeDuplicate(array)

