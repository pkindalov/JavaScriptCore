/**
 * Created by r3v3nan7 on 21.9.2016 г..
 */

// Calculate Sum + VAT

function sumVat(numbers) {
    let sum = 0;

    for(let num of numbers){
        sum += Number(num);
    }

    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.20);
    console.log("total = " + sum * 1.20);

}


sumVat(['1.20', '2.60', '3,50']);