// Leader in array 

let array = [1, 7, 2, 5,4,25];

let arr = [] ;
for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
        if (array[i] <= array[j]) {
            break
        }
        if (j == array.length) {
            console.log(array[i])
        }
    }
}
