/**
 * Created by r3v3nan7 on 27.9.2016 г..
 */

function wordsUppercase([str]) {
    let strUpper = str.toUpperCase();
    var words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');
    
    
    function extractWords() {
        return strUpper.split(/\W+/);
    }
}


console.log(wordsUppercase(['Hi, how are you?']));