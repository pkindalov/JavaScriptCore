/**
 * Created by r3v3nan7 on 24.9.2016 г..
 */

// Write a JS function that finds the biggest of 3 numbers.
//     The input comes as array of strings, where each element holds a number.
//     The output is the biggest from the input numbers.


function biggest3Nums([n1, n2, n3]) {
    let [num1, num2, num3] = [n1, n2, n3].map(Number);

    console.log(Math.max(num1, num2, num3));
}



biggest3Nums(['5', '-2', '7']);