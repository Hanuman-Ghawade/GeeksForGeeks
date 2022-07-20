// find out the sum of Prime number between  1 to N .



// Incomplete Programm 






function primeNumber (number){
    for (let i = 2; i < number; i++) {
        if (number % i == 0 ) {
            return `This is Not a prime number`
        }
    }
    console.log(i)
    return `This is a prime number`

}

console.log(primeNumber(13))
