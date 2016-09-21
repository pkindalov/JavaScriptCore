/**
 * Created by r3v3nan7 on 22.9.2016 г..
 */

// We are given a minimum age and two pairs of names and ages
// Store each name and age into an object
// Print each object whose age ≥ minimum age

function filterByAge([minAge, nameA, ageA, nameB, ageB]) {
    let personA = {name: nameA, age: Number(ageA)};
    let personB = {name: nameB, age: Number(ageB)};

    if(personA.age >= minAge) console.log(personA);
    if(personB.age >= minAge) console.log(personB);
}


filterByAge([12, 'Ivan', 15, 'Asen', 9]);