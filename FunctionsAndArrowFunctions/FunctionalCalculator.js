/**
 * Created by r3v3nan7 on 27.9.2016 г..
 */

function calculator([a, b, op]) {
    [a, b] = [a, b].map(Number);
    
    let calc = function (a, b, op) {
        return op(a, b);
    }

    let add = function (a, b) {
        return a + b;
    }

    let subtract = function (a, b) {
        return a - b;
    }

    let multiply = function (a, b) {
        return a * b;
    }

    let divide = function (a, b) {
        return a / b;
    }



    switch(op){
        case '+':
            return calc(a, b , add);
            break;
        case '-':
            return calc(a, b, subtract);
            break;
        case '*':
            return calc(a, b, multiply);
            break;
        case '/':
            return calc(a, b, divide);
            break;
    }



}


console.log(calculator(['2', '4', '+']));