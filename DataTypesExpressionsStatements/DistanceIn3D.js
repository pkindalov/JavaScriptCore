/**
 * Created by r3v3nan7 on 23.9.2016 г..
 */

// Write a JS function that calculates the distance between the two points in 3D by given coordinates.
//     The input comes as an array of strings that need to be parsed as numbers. The first three elements are the x, y and z coordinates for the first point and the second set of arguments are the coordinates of the other point.
//     The output should be printed to the console.

function distance3d([xx1, yy1, zz1, xx2, yy2, zz2]) {
    let [x1,y1, z1,x2, y2, z2] = [xx1, yy1, zz1, xx2, yy2, zz2].map(Number);

    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let c = Math.abs(z1 - z2);

    let pitagorFormula = Math.sqrt(((a * a) + (b * b) + (c * c)));
    console.log(pitagorFormula);

}

distance3d(['3.5', '0', '1', '0', '2', '-1']);