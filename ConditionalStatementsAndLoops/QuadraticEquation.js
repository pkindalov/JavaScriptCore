/**
 * Created by r3v3nan7 on 25.9.2016 г..
 */


// Write a JS function to solve a quadratic equation by given in standard form as its coefficients: a, b, c. You may learn more about quadratic equations here: https://www.mathsisfun.com/algebra/quadratic-equation.html.
//     The input comes as array of strings. Its holds the string representations of 3 real numbers: a, b and c. The value of a will be non-zero.
//     The output depends on the equation:
//     It holds two numbers x1 and x2 if the equation has two different solutions (roots): x1 and x2.
//     First print the smaller root, then the greater.
//     It holds a single number x if the equation has only one solution (root): x.
//     It holds the text “No” if the equation has no solutions (no real roots).



function quadraticEquation(values) {
    let a = Number(values[0]);
    let b = Number(values[1]);
    let c = Number(values[2]);

    let d = Math.pow(b, 2) - 4 * (a * c);

    if(d > 0){

        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);

        console.log(Math.min(x1,x2));
        console.log(Math.max(x1,x2));
    }else if(d == 0){

        let x = -b / (2 * a);
        console.log(x);
    }else {
        console.log("No");
    }

}



quadraticEquation(['5', '2', '1']);