// find out the largest prime factor in given number 

// var max=0;
const number = 24;
var text = []
for(var i=1;i<=number;i++){
    if(number%i==0){
    console.log(i)
    text.push(i);
    }    
}
 var last_ele = text.length;
 
console.log(text)
var highest_number = text[last_ele-1]
// console.log(highest_number)
var text_second = [];
for(var i=1;i<highest_number;i++){
    if(highest_number%i==0){
    // console.log(i)
    text_second.push(i);
    }
}
console.log(text_second)
console.log(`The  largets prime factor of ${number} is ${text_second[text_second.length-1]}`)
