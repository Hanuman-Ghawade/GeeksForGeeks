
// sum of the given number's digit

var num = 10;
var sum = 0 ;
while(num){
    rem = num % 10 ;
    sum += rem ;
    num = Math.floor(num / 10)

}

console.log(sum)
