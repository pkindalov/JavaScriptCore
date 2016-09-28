/**
 * Created by r3v3nan7 on 27.9.2016 г..
 */






function printTriangle(size){

    function printStars(count) {
        console.log("*".repeat(count));
    }

    "use strict";
    for(let row = 1; row <= size; row++){
        printStars(row);
    }

    for(let row = size - 1; row >= 1; row--){
        printStars(row);
    }

}


printTriangle(10);