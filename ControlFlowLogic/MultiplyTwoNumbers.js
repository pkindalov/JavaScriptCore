/**
 * Created by r3v3nan7 on 20.9.2016 г..
 */
 
 
 //Write a JS function to multiply two numbers given as array of strings

function mult(numbers) {
    let numberOne = Number(numbers[0]);
    let numberTwo = Number(numbers[1]);
    let result = numberOne * numberTwo;

    return result;
}

mult(['4', '2.5']);


//Second way

function  mult2([num1, num2]) {
   return(num1*num2);
}


mult2(['4', '2.5']);