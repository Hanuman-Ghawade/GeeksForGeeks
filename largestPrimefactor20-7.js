// find out the largest prime factor in given number 

let number = 26;
let primeBOI = 2 ;
for(let i=0;i<=number;i++){
    if(number % primeBOI == 0){
        number /= primeBOI ;
        console.log("***")
    }    else {
        console.log(primeBOI)
        primeBOI ++  ;

    }
}

 console.log(primeBOI)