/**
 * Created by r3v3nan7 on 24.9.2016 г..
 */

// Write a JS function that takes as input 6 numbers x, y, xMin, xMax, yMin, yMax and prints whether the point {x, y} is inside the rectangle or outside of it. If the point is at the rectangle border, it is considered inside.The input comes as array of strings. Its holds the string representations of x, y, xMin, xMax, yMin, yMax. All numbers will in the range [-1 000 000 … 1 000 000]. It is guaranteed that xMin < xMax and yMin < yMax.


function pointInRectangle([xx1, yy1, xxMin, xxMax, yyMin, yyMax]) {

    let [x, y, xMin, xMax, yMin, yMax] = [xx1, yy1, xxMin, xxMax, yyMin, yyMax].map(Number);

    if(x >= xMin && x <= xMax && y >= yMin && y <= yMax){
        console.log('inside');
    }else {
        console.log('outside');
    }

}



pointInRectangle(['12', '-3', '2', '12', '-3', '3']);