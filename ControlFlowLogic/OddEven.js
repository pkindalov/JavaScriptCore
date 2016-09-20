/**
 * Created by r3v3nan7 on 21.9.2016 г..
 */

//Write a JS function to check if a number is odd or even or invalid

function oddEven(num){
    let rem = num % 2;

    if(rem == 0){
        console.log("even");
    }else if (rem  == rem.toFixed()){ //or if(rem == Math.round(rem))
        console.log("odd");
    }else {
        console.log("invalid");
    }
}


oddEven('8');