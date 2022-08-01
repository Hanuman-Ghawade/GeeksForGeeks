
 // find the Aangran string 


let isAnagram = function(str1, str2){

    let sorted1 = str1.split('').sort().join('').toLowerCase() ;

    let sorted2 = str2.split('').sort().join('').toLowerCase() ;

    console.log(sorted1)

    console.log(sorted2)

    return (sorted1 === sorted2)
}

console.log(isAnagram("Hanuman","namunaH"))

