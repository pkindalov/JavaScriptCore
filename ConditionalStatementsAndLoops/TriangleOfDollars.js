/**
 * Created by r3v3nan7 on 24.9.2016 г..
 */


// Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
//     The input comes as array of strings. Its first element holds the number n (0 < n < 100).
//     The output consists of n text lines like shown below.


function triangleOfDollars(value) {
    let number = Number(value[0]);

    let line = '';
    for(let col = 0; col < number; col++){
        line += '$';
        console.log(line);
    }


}


function  trinagleofDollarsV2(value) {
    let number = Number(value);

    for(let row = 1; row <= number; row++){
        console.log(new Array(row+1).join('$'));
    }
}


function trinagleOfDollarsV3(value) {
    let number = Number(value);

    for(let row = 1; row <= number; row++){
        console.log('$'.repeat(row));
    }


}

 //triangleOfDollars('6');
// trinagleofDollarsV2('6');
//trinagleOfDollarsV3('6');



