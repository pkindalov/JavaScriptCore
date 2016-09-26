/**
 * Created by r3v3nan7 on 24.9.2016 г..
 */


// Write a JS function that reads an integer n and prints all odd numbers from 1 to n.
//     The input comes as array of strings. Its first element holds the string representation of n. The number n will be an integer in the range [1 … 100 000].
// The output should hold the expected odd numbers, each at a separate line.

function oddNumbers(value) {
    let number = Number(value);

    for(let i = 1; i <= number; i += 2){
        console.log(i);
    }


}


oddNumbers(['7']);

