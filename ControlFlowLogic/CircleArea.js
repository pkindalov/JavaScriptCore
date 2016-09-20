/**
 * Created by r3v3nan7 on 20.9.2016 г..
 */
function circleArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(area);

    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded);

    let areaRounded2Way = area.toFixed(2);
    console.log(areaRounded2Way);
}

circleArea(['5']);