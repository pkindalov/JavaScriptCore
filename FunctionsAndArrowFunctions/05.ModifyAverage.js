function solve([number]) {
    number = Number(number);
    let realNumber = number;
    function avrSum(number) {
        let counter = 0;
        let lastNum=0;
        let sum=0;
        while(number>0){
            lastNum = number %10;
            sum += lastNum;
            counter++;
            number = Math.floor(number/10);
        }

        if((sum/counter)>5){
            //console.log(realNumber);
            return true;
        }
        return false;
    }

    function addNines(number) {
        let strNum = "" + number + "9";
        number = Number(strNum);
        return number;
    }

    while (!avrSum(number)){
        number = addNines(number);
    }
    // if(avrSum(number)){
    //     return realNumber;
    // }else {
    //     //другата фунция, която добавя 9 докато средната сума не стане по-голяма от 5
    //
    //     //console.log(number);
    // }
    return number;
}