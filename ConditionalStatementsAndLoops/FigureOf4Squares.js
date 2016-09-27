/**
 * Created by r3v3nan7 on 25.9.2016 г..
 */

// Write a JS function to print a figure of 4 squares of size n like shown in the examples below.
//     The input is an integer number n in the range [2 … 200].
// The output consists of n lines for odd n and n-1 lines for even n. Each line holds 2*n-1 characters (+ or | or space) as shown in the examples. The figure is fully symmetric (horizontally and vertically).


function figuresOf4Squares(number) {
    let num = Number(number);

    let oddOrNot = num % 2;

    if(oddOrNot != 0){
        //odd numbers
        let stars = 3;
        let dots = Math.floor(((2 * num) - stars) / 2);
        process.stdout.write("+" + Array(dots + 1).join("-") + "+" + Array(dots + 1).join("-") + "+\n");

        let totalRows = num - 2;
        for(let n = 0; n < totalRows; n++){
           if(n == ((Math.floor(totalRows / 2)))){
               process.stdout.write("+" + Array(dots + 1).join("-") + "+" + Array(dots + 1).join("-") + "+\n");
           }else {
               let spaces = Math.floor(((2 * num) - 3) / 2);
               process.stdout.write("|" + Array(spaces + 1).join(" ") + "|" + Array(spaces + 1).join(" ") + "|\n");
           }

        }

        process.stdout.write("+" + Array(dots + 1).join("-") + "+" + Array(dots + 1).join("-") + "+\n");

        //console.log(Math.floor(5 / 2));
        //console.log(((5 % 2) + 1) / 2);

        // for(let row = 0; row < num; row++){
        //
        //     if(row == 0 || row % 2 == 0 || row == num - 1){
        //         let stars = 3;
        //         let dots = Math.floor(((2 * num) - stars) / 2);
        //
        //         process.stdout.write("+" + Array(dots + 1).join("-") + "+" + Array(dots + 1).join("-") + "+\n");
        //         //console.log(Array(stars+ 1).join("*"));
        //
        //     }else {
        //
        //         let spaces = Math.floor(((2 * num) - 3) / 2);
        //         process.stdout.write("|" + Array(spaces + 1).join(" ") + "|" + Array(spaces + 1).join(" ") + "|\n");
        //     }
        //
        //
        //
        //
        //
        // }


    }else {

        //even numbers

        if(num == 2){
            console.log("+++\n+++\n+++");

        }else{
            let stars = 3;
            let dots = Math.floor(((2 * num) - stars) / 2);
            let rows = Math.floor(num - 3);
            process.stdout.write("+" + Array(dots + 1).join("-") + "+" + Array(dots + 1).join("-") + "+\n");

            for(let r = 0; r < rows; r++){
                if(r == Math.floor(rows / 2)){
                    process.stdout.write("+" + Array(dots + 1).join("-") + "+" + Array(dots + 1).join("-") + "+\n");
                }else {
                    let spaces = Math.floor(((2 * num) - 3) / 2);
                    process.stdout.write("|" + Array(spaces + 1).join(" ") + "|" + Array(spaces + 1).join(" ") + "|\n");
                }
            }




            process.stdout.write("+" + Array(dots + 1).join("-") + "+" + Array(dots + 1).join("-") + "+\n");
        }

    }














}


figuresOf4Squares(['2']);







// function figureOfSquares(n) {
//     n = Number(n);
//     let dash = '-';
//     let sp = ' ';
//     let inner = n - 2;
//     if (n % 2 == 0 ) {
//         n -= 1;
//     }
//     if (n <= 2){
//         n = 3;
//     }
//
//     for (let i = 0; i < n; i++) {
//
//         if (i == 0 || i == n - 1 || (n-1) / 2 == i) {
//             console.log(`+${dash.repeat(inner)}+${dash.repeat(inner)}+`);
//         }
//         else {
//             console.log(`|${sp.repeat(inner)}|${sp.repeat(inner)}|`);
//         }
//     }
// }
// figureOfSquares(['3']);