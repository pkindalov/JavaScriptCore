function validityChecker(input){
    [x1,y1,x2,y2] = input.map(Number);
    //[x1,y1,x2,y2] = [x1,y1,x2,y2].map(Number);
    let xDiff = Math.abs(x1-x2);
    let yDiff = Math.abs(y1-y2);

    let firstPointSecondPointLength = Math.sqrt(xDiff*xDiff + yDiff*yDiff);

    let x1toZero = Math.abs(x1);
    let y1toZero = Math.abs(y1);
    let firstPointToZeroLength = Math.sqrt(x1toZero*x1toZero + y1toZero * y1toZero);

    let x2toZero = Math.abs(x2);
    let y2toZero = Math.abs(y2);
    let secondPointToZeroLength = Math.sqrt(x2toZero*x2toZero + y2toZero * y2toZero);

    function checkIfInt(number) {
        if(number % 1 === 0){
            return "valid";
        }
        return "invalid";
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${checkIfInt(firstPointToZeroLength)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${checkIfInt(secondPointToZeroLength)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkIfInt(firstPointSecondPointLength)}`);
}

validityChecker(['3','0','0','4']);
validityChecker(['2','1','1.44','1.44']);