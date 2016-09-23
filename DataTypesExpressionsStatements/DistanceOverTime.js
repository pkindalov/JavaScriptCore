/**
 * Created by r3v3nan7 on 22.9.2016 г..
 */

// Two objects start from point A and travel in the same direction at constant speeds V1 and V2 for a period T. Write a JS function that calculates the distance between the two object at the end of the period.
//     The input comes as array of strings that need to be parsed as numbers. The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.
//     The output should be printed to the console. Calculate the distance in meters.


function distance([speedObject1,speedObject2, t]) {
    let v1 = Number(speedObject1);
    let v2 = Number(speedObject2);
    let time = Number(t);

    let timeInHours = time / 3600;

    let v1Distance = v1 * timeInHours;
    let v2Distance = v2 * timeInHours;

    let distance = Math.abs(v1Distance - v2Distance);

    // let result = delta * time;
    return distance * 1000;
}


console.log(distance(['11','10', '120']));


