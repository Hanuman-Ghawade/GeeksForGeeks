// Febonacci Series 
let a = 0, b =1 ;
console.log(a);
console.log(b);
for (i = 0;i <=10 ;i++){
    let temp = a + b ;
    console.log(temp) ;
    a = b ;
    b = temp ;
}

