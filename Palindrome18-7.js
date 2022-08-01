 // Palindrome String

function isPalindrome (str){

    text = ''
    for (let i= str.length -1; i >= 0 ; i--) {
        text += str[i]
    }
        
    if (str === text) {
        return "This is a Palindrome string";
        
    } else {
        return  "This is not a Palindrome string";
        
    }
}

console.log(isPalindrome("abcba"))