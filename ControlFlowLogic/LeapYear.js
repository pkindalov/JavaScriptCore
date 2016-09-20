/**
 * Created by r3v3nan7 on 20.9.2016 г..
 */

 
 /*Write a JS function to check whether a year is leap
Can be divided to 4 and cannot be divided to 100
Or can be divided to 400 */


function leapYear(year) {
    let leap = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 );
    console.log(leap ? "yes" : "no" );
}


leapYear(2016);