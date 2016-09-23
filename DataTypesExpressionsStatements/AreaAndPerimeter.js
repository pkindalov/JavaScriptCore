/**
 * Created by r3v3nan7 on 22.9.2016 г..
 */

// Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
//     The input comes as array of strings that need to be parsed as numbers.
//     The output should be printed to the console on two lines.

function areaAndPerimeterRec([w, h]) {
    let width = Number(w);
    let height = Number(h);

    let area = width * height;
    let perimeter = (width * 2) + (height * 2);

    console.log(area);
    console.log(perimeter);


}


areaAndPerimeterRec(['2.5', '3.14']);