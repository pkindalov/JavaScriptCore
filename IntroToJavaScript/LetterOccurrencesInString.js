/**
 * Created by r3v3nan7 on 21.9.2016 г..
 */

// Letter Occurrences in String

function letterOccurence([text, letter]) {
    let letterCount = 0;

    //with foreach

    for(let letters of text){
        if(letters == letter){
            letterCount++;
        }
    }


    //with for loop
    // for(let l = 0; l < text.length; l++){
    //     if(text[l] == letter){
    //         letterCount++;
    //     }
    // }

     //console.log(letterCount);
    return letterCount;
}


letterOccurence(["sssssssoooommmmmeeeeeewwwwwwoooorrrrddd", "o"]);