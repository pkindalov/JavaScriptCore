/**
 * Created by r3v3nan7 on 20.9.2016 г..
 */
function triangleArea([a,b,c]) {
    [a,b,c] = [a,b,c].map(Number);
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

    return area;
}

triangleArea(['2', '3.5', '4']);