/**
 * Created by r3v3nan7 on 22.9.2016 г..
 */

// Calculate the figure area by given w, h, W and 

function figureArea([w, h, W, H]) {
    let [s1, s2, s3] = [w*h, W*H, Math.min(w, W) * Math.min(h, H)];
    return s1 + s2 - s3;
}

console.log(figureArea(['2', '4', '5', '3']));