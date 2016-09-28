/**
 * Created by r3v3nan7 on 27.9.2016 г..
 */

function aggregateElements(input) {
    let elements = input.map(Number);

    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);
    
    function aggregate(arr, initVal, f) {
        let result = initVal;

        for(let i=0; i < arr.length; i++){
            result = f(result, arr[i]);
        }

        console.log(result);
    }
    

}


aggregateElements([10,20,30]);