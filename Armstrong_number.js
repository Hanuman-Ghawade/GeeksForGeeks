
// Armstrong number

var number = 153 ;
var sum = 0;
var temp = number ;
while (temp > 0) {
    // console.log(temp)

    var digit = temp % 10 ;

    // console.log(digit)

    sum += digit ** 3 ;

    // console.log(sum)

    temp = parseInt(temp/10 )  

    // console.log(number)
}
if (sum == number ) {
    console.log("This is a armstrong number")
    
} else {
    console.log("This is not armstrong number")
}
