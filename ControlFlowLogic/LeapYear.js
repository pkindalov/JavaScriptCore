/**
 * Created by r3v3nan7 on 20.9.2016 г..
 */

function leapYear(year) {
    let leap = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 );
    console.log(leap ? "yes" : "no" );
}


leapYear(2016);