// find out given given number is perfect or not . 1 ,2,3 ,6 

// input = 6 , output = perfect number

let number = 6;
let arr = [] ;
for (let i = 1;i <=number ; i++ ){
    if(number % i == 0){
        // console.log(i)
        arr.push(i)
    }
}
let sum = 0 ;
for (let i = 0; i < arr.length-1; i++) {
    sum += arr[i]
    
}
if (number == sum) {
    console.log("This is Perfect number")
    
} else {
    console.log("This is not a perfect number")
}
