// // square star pattern 
//         var i ,j ;
//         for (let i = 1; i <= 5; i++) {
//            for (let j = 1; j <= 5; j++) {
//            document.write("*")
            
//            }
//            document.write("<br>")
//         }
 

// // Trinagle pattern 
// var i ,j ;
// for (let i = 1; i <= 5; i++) {
//    for (let j = 1; j <=i; j++) {
//    document.write("*")
    
//    }
//    document.write("<br>")
// }
// let string = "";
// let num = 5 ;
//  // Right side triangle 
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num-i; j++) {
//         string += " " ;

//     }
//     for (let k = 1; k <= i; k++) {
//         string += "*" ;

//     }
//     string += "\n" ;
// }
// console.log(string)

// //  inverted triangle

// var i, j;
// // let string = '' ;
// for (let i = 1; i < 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log("*")
//     }
//     console.log(" ")

// }


for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= (5 - i); j++) {
        console.log(" ")
    }
    for (let j = 1; j = (i+1); j++) {
        console.log(" * ")

    }
    console.log('\n')

}