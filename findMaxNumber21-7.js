// find the max number in given series 

const arr = [11111111,36,789,125,637,147,588,12250] ;
var max = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }    
}
console.log(max)


