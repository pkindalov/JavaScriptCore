/**
 * Created by r3v3nan7 on 22.9.2016 г..
 */

// Write a JS function that concatenates numbers as text
// Input: array of strings, holding a number n
// Output: the numbers 1…n, concatenated as single string
// Example: ['11']  "1234567891011"

function strNums(num) {
    let str = '';
    for(let n = 1; n <= num; n++){
        str += n;
    }

    //console.log(str);
    return str;
}

console.log(strNums(['11']));