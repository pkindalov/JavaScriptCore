/**
 * Created by r3v3nan7 on 22.9.2016 г..
 */

// Print the next day by given year, month, day
// Example: [2016, 9, 30]  2016-10-1


function nextDay([year, month, day]) {
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000; //miliseconds in one day
    let nextDate = new Date(date.getTime() + oneDay);

    return nextDate.getFullYear() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getDate();

}

console.log(nextDay(['2016', '1', '15']));