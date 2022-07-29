// find the maximum and minimum element in array 

let array = [1,63,98,71,24,879,1578];

for (let i = 0; i< array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[i]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp ;
        }   
    }   
}

let max_array = array[array.length-1] ;
let min_array = array[0]

console.log(`Mimumam array is ${min_array}`) ;
console.log(`Maximum array is ${max_array}`) 
