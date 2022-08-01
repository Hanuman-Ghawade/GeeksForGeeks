// find out the sum of Prime number between  1 to N .

let arr = [] ;
let num;
function primeNumberSum (number){
   num = number;

    for (let j = 2; j < number; j++) {
        let flag = 0 ;
        for (let i = 2; i < j; i++) {
            if (j % i == 0 ) {
                flag=1;
                break 
            }   
        }
        if (j>1 && flag == 0 ) {
            // console.log(j) ;
            arr.push(j)

        }
    }  
}  
primeNumberSum(10)

let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log("Sum of prime numbers till:  " +num+" is " +sum)