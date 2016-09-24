/**
 * Created by r3v3nan7 on 23.9.2016 г..
 */

// Land surveyors use grads (also known as gon, 400 grads in a full turn) in their documents. Grads are rather unwieldy though, so you need to write a JS function that converts from grads to degrees. In addition, your program needs to constrain the results within the range , so if you arrive at a value like -15°, it needs to be converted to 345° and 420° becomes 60°.
// The input comes as an array of one string element that needs to be parsed as a number.
//     The output should be printed to the console.


function gradsToDegrees([value]) {
    let grads = Number(value);
    let convert = grads * 0.9;

    if(convert < 0){
        while(true){
           convert += 360;
           if(convert >= 0 && convert <= 360){
               break;
           }

        }
    }else{
        while(true){
            convert -= 360;
            if(convert >= 0 && convert <= 360) break;
        }
    }




    console.log(convert);
}



gradsToDegrees(['-50']);