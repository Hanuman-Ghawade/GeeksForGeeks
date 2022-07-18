// Find prime number 

function prime_number(n){
    for (let i = 2; i < n;i++) {
        if (n % i == 0) {
            return`${n} is not a prime number`
        }
    }
     return `${n} is a prime number`
}    
    
console.log(prime_number(7))



