// Count the number of possible triangles .

let array = [1,2,3,4,5,5,4,9] ;

let l = array.length ;

let radius = 6 ;
let factorialN = 1
let factorialNR = 1 ;

for (let i = 1; i <= l; i++) {
    factorialN*= i   
}

for (let i = 1; i <= l-3; i++) {
    factorialNR*= i
    
}
console.log(`The No of Possible Triangle ${factorialN / (radius * factorialNR)}`)
