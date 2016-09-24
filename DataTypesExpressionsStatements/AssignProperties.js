/**
 * Created by r3v3nan7 on 24.9.2016 г..
 */

// Write a JS function that composes an object by given properties. There will be 3 sets of property-value pairs (a total of 6 elements). Assign each value to its respective property of an object and return the object as a result of the function.
// The input comes as an array of string elements.
//     The output should be returned as a value.

function assignProperties(input) {
    // let name = input[1];
    // let age = input[3];
    // let gender = input[5];

    let propertieOne = input[0];
    let propertieOneValue = input[1];
    let propertieTwo = input[2];
    let propertieTwoValue = input[3];
    let propertieThree = input[4];
    let propertieThreeValue = input[5];

    // let str = '{ ' + propertieOne + ': ' + propertieOneValue + ', ' + propertieTwo + ': ' + propertieTwoValue + ', ' + propertieThree + ': ' + propertieThreeValue + ' }';

    let str = '{ ' + propertieOne + ': ' +  `'${propertieOneValue}'` + ', ' + propertieTwo + ': ' + `'${propertieTwoValue}'` + ', ' + propertieThree + ': ' + `'${propertieThreeValue}'` + ' }';

    let jsonStr = JSON.stringify(str);
    //console.log(jsonStr);
    // let people = JSON.stringify({name: name, age: age, gender: gender});
    // let people = JSON.stringify({propertieOne: propertieOneValue, propertieTwo: propertieTwoValue, propertieThree: propertieThreeValue});

    let obj = JSON.parse(jsonStr);

    console.log(obj);

}


assignProperties(['name', 'Pesho','age', '23', 'gender', 'male']);


//second way
function assignProperties(properties) {
    let result = {
        [properties[0]]: properties[1],
        [properties[2]]: properties[3],
        [properties[4]]: properties[5]}
    console.log(result);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);