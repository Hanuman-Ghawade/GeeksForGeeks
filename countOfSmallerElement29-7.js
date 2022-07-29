// count the number of elements in given array as given number .


let array = [1,2,2,3,6,7,6,25,63,8] ;

let a = 10 

let count= 0 ;

for (let i = 0; i < array.length; i++) {
    if (array[i] < a) {
        count++
    }
}
console.log(count)
