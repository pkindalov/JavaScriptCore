/**
 * Created by r3v3nan7 on 27.9.2016 г..
 */

function palindrome([str]) {
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] != str[str.length - 1]){
            return false;
        }else {
            return true;
        }
    }
}


console.log(palindrome(['abba']));