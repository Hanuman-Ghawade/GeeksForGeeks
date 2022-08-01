let isAmagramPalindrome = function(str1,str2){
    let sorted1 = str1.split('').sort().join('').toLowerCase() ;
    let sorted2 = str2.split('').sort().join('').toLowerCase() ;
    console.log(sorted1)
    console.log(sorted2)
    if (sorted1 == sorted2) {
        console.log("This is Anagram Palindrome string")

    } else {
        console.log("This is not Anagram Palindrome string")    }
}

isAmagramPalindrome("geeksforgeeks","forgeeksgeeks")


