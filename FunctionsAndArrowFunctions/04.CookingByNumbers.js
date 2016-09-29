function cookingByNumbers(input) {
    let number = Number(input[0]);
    // let commands = [input[1], input[2], input[3], input[4], input[4]];
    // for(let index of commands)

    for(let i=1;i<input.length;i++) {
        let newNum = action(input[i], number);
        console.log(newNum);
        number = newNum;


        function action(command, number) {
            switch (command) {
                case 'chop':
                    return number / 2;
                case 'dice':
                    return Math.sqrt(number);
                case 'spice':
                    return (number + 1);
                case 'bake':
                    return (number * 3);
                case 'fillet':
                    return (number - (number * 0.2));
            }
        }
    }

}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);