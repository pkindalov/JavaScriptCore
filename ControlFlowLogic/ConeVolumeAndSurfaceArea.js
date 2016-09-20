/**
 * Created by r3v3nan7 on 20.9.2016 г..
 */
 
/* Write a JS function to calculate cone volume and surface
The cone height h and radius of the base r are given */
 
function coneVolumeAndArea(input){
    let [r, h] = input.map(Number);
    let s = Math.sqrt(r * r + h * h);
    let volume = Math.PI * r * r * h / 3;

    console.log("volume = " +volume);

    let area = Math.PI * r * (r + s);
    console.log("area = " +area);
}


coneVolumeAndArea(['3.3', '7.8']);