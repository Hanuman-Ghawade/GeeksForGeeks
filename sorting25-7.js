
function string_sort(str) {
    var i = 0, j;
    while (i < str.length) {
        j = i + 1;
        while (j < str.length) {
            if (str[j] < str[i]) {
                var temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
            j++;
        }
        i++;
    }
}

let string = ['Pune','Mumbai','Delhi','Aurngabad','Kolkata'] ;
    
string_sort(string);
      
console.log(string)
    