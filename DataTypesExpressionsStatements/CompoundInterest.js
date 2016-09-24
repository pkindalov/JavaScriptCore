/**
 * Created by r3v3nan7 on 23.9.2016 г..
 */

// Write a JS function that calculates the total accumulated value for a monetary deposit by given principal sum, interest rate, compounding frequency and overall length.
//     The input comes as an array of strings that need to be parsed as a numbers. The first value is the principal sum, the second is the interest rate in percent, the third is the compounding period in months and the final value is the total timespan, given in years.
//     The output should be printed to the console, with two decimal places.


function compound(values) {
    let p = Number(values[0]);
    let i = Number(values[1]);
    let compoundingPeriod = Number(values[2]);
    let t = Number(values[3]);

    let percFraction = i / 100;

    let n = 12 / compoundingPeriod;

    //let f = p * (1 + (i / n)) * (n * t);

    //let formula = p * Math.pow((n*t), 1 + (i /n));
    let formula = p * (Math.pow(1 + (percFraction / n), n * t));

    console.log(formula);
    // let formula = principalSum * (1 + (interestRate /n)) * n * timespanInYears;
    // console.log(formula);

}


compound(['1500', '4.3', '3', '6']);