/**
 * Created by r3v3nan7 on 25.9.2016 г..
 */

// Write a JS function to print a math multiplication table of size n, formatted as HTML table.
//     The input comes as array of strings. Its first element holds the number n (0 < n < 100).
//     The output consists of n+3 text lines like shown below.


function multiplicationTable(dimension) {
    let n = Number(dimension[0]);
    console.log('<table border="1">');
    // console.log("<tr>");
    let a = 'x';

    for (let i = 1; i <= 1; i++) {

        //console.log("<th>%d</th>", i);
        // console.log("<tr><th>%s</th><th>%d</th><th>%d</th></tr>",a, i, i);

            process.stdout.write("<tr>");
            process.stdout.write("<th>" + a + "</th>");

        for(let col = 1; col <= n; col++){
            process.stdout.write("<th>" + col + "</th>");

        }

            process.stdout.write("</tr>\n");
    }






    for (let i = 1; i <= n; i++) {
        //console.log("<th>" + i + "</th>");
        process.stdout.write("<tr>");
        process.stdout.write("<th>" + i + "</th>");
        process.stdout.write("<td>" + i + "</td>");
        //console.log("<tr><th>%d</th><th>%d</th><th>%s</th></tr>",i);

        for (var j = 2; j <= n; j++) {

            process.stdout.write("<td>" + i * j + "</td>");
        }
         process.stdout.write("</tr>\n");
    }
    console.log('</table>');
}


multiplicationTable(['3']);