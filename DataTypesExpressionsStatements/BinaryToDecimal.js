/**
 * Created by r3v3nan7 on 24.9.2016 г..
 */

// Write a JS function that reads an 8-bit binary number and converts it to a decimal.
//     The input comes as an array of one string element, representing a binary number.
//     The output should be printed to the console.


function binToDec([binNum]) {
    binNum = parseInt(binNum, 2);
    console.log(binNum);
}


binToDec(['11110000']);