/**
 * Created by r3v3nan7 on 24.9.2016 г..
 */


function lastMonth(date){
    let month = Number(date[1]) - 1;
    let year = Number(date[2]);
    let prevMonthDays = new Date(year, month, 0);
    console.log(prevMonthDays.getDate());
}

lastMonth(['17','3','2002']);