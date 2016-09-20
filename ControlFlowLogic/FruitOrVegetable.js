/**
 * Created by r3v3nan7 on 21.9.2016 г..
 */

// Write a JS function to print "fruit", "vegetable" or "unknown" depending on the input string
// Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
// Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
// All others are unknown

function fruitOrVegetable(input) {
    let word = input[0];

    switch(word){
        case 'banana':
        case 'kiwi':
        case 'apple':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
            break;
    }
}


fruitOrVegetable(['cucumber']);
