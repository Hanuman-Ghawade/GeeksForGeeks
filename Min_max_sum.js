/*Given five positive integers, find the minimum and maximum values that can be
 calculated by summing exactly four of the five integers. Then print the respective 
 minimum and maximum values as a single line of two space-separated 
long integers. */

// output = 16 24
const arr = [1,3,5,7,9];
let sum=0;
let sum2=0;
sum3=0;
let text = "";
for (let i = 0; i < arr.length-1; i++) {
  text += ' ' + arr[i];
  sum =sum+arr[i];

}
for (let i = 1; i < arr.length; i++) {
    text += ' ' + arr[i];
    sum2 =sum2+arr[i];

  
  }

console.log(text)
console.log(sum,sum2);



