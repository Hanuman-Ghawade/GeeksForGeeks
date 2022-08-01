// Bubble Sort Algorithm
// Sort array ascending order using bubble sort alogorithm

let count = 0 ;
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < l-i-1; j++) {
            if (array[j] >  array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1]
                array[j+1] = temp
            }
            console.log(array)
            count ++ 
        }
    }
    return array
}
let arr = [5,1,6,2,4,3] ;
let l = arr.length ; 
let sort = bubbleSort(arr);
console.log(sort)
console.log(count)