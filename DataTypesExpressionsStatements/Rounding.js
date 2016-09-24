/**
 * Created by r3v3nan7 on 23.9.2016 г..
 */

// Write a JS function that rounds numbers to specific precision.
//     The input comes as an array of two string elements that need to be parsed as a numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15.
// The output should be printed to the console. Do not print insignificant decimals.


function rounding(values) {
    let number = Number(values[0]);
    let roundDigits = Number(values[1]);

    let numForDel = 1;
    for(let i = 0; i < roundDigits; i++){
        numForDel *= 10;
    }


    let result = (Math.round(number * numForDel) / numForDel);
    console.log(result);






    // let rounded = number.toFixed(roundDigits);
    //
    // console.log(rounded);
}


rounding(['3.1415926535897932384626433832795', '2']);