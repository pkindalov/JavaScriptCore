/**
 * Created by r3v3nan7 on 25.9.2016 г..
 */

// Write a JS function that calculate the ticket price by movie title and day of week.
//     The input comes as array of 2 strings. The first string holds the movie title. The second string holds the day of week.
//     The output should hold the ticket price or “error” if the title or day of week is invalid.


function moviePrice(input) {
    let movie = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    if(day == "monday"){

        switch (movie){
            case "the godfather":
                console.log("12");
                break;
            case  "schindler's list":
                console.log("8.50");
                break;
            case  "casablanca":
                console.log("8");
                break;
            case "the wizard of oz":
                console.log("10");
                break;
            default:
                console.log("error");
                break;
        }

    }else if(day == "tuesday"){

        switch (movie){
            case "the godfather":
                console.log("10");
                break;
            case  "schindler's list":
                console.log("8.50");
                break;
            case  "casablanca":
                console.log("8");
                break;
            case "the wizard of oz":
                console.log("10");
                break;
            default:
                console.log("error");
                break;
        }

    }else if(day == "wednesday"){

        switch (movie){
            case "the godfather":
                console.log("15");
                break;
            case  "schindler's list":
                console.log("8.50");
                break;
            case  "casablanca":
                console.log("8");
                break;
            case "the wizard of oz":
                console.log("10");
                break;
            default:
                console.log("error");
                break;
        }

    }else if(day == "thursday"){

        switch (movie){
            case "the godfather":
                console.log("12.50");
                break;
            case  "schindler's list":
                console.log("8.50");
                break;
            case  "casablanca":
                console.log("8");
                break;
            case "the wizard of oz":
                console.log("10");
                break;
            default:
                console.log("error");
                break;
        }

    }else if(day == "friday"){

        switch (movie){
            case "the godfather":
                console.log("15");
                break;
            case  "schindler's list":
                console.log("8.50");
                break;
            case  "casablanca":
                console.log("8");
                break;
            case "the wizard of oz":
                console.log("10");
                break;
            default:
                console.log("error");
                break;
        }

    }else if(day == "saturday"){

        switch (movie){
            case "the godfather":
                console.log("25");
                break;
            case  "schindler's list":
                console.log("15");
                break;
            case  "casablanca":
                console.log("10");
                break;
            case "the wizard of oz":
                console.log("15");
                break;
            default:
                console.log("error");
                break;
        }
    }else if(day == "sunday"){

        switch (movie){
            case "the godfather":
                console.log("30");
                break;
            case  "schindler's list":
                console.log("15");
                break;
            case  "casablanca":
                console.log("10");
                break;
            case "the wizard of oz":
                console.log("15");
                break;
            default:
                console.log("error");
                break;
        }
    }else {
        console.log("error");
    }
    
}


moviePrice(['casablanca', 'tuesday']);