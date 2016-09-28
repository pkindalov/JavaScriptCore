/**
 * Created by r3v3nan7 on 27.9.2016 г..
 */

function squareOfStars(n) {
    function printStars(count = n) {
        console.log("*" + " *".repeat(count - 1));
    }

    for(let i = 1; i <= n; i++){
        printStars(n);
    }
}



squareOfStars(10);