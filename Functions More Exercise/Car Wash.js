function solve(commandsArray) {

    let carWashing = commandsArray => {
        let value = 0;
        for (let i = 0; i < commandsArray.length; i++) {
            switch (String(commandsArray[i])) {
                case 'soap':
                    value += 10;
                    break;
                case 'water':
                    value *= 1.20;
                    break;
                case 'vacuum cleaner':
                    value *= 1.25;
                    break;
                case 'mud':
                    value *= 0.9
                    break;
            }
        }
        console.log(`The car is ${value.toFixed(2)}% clean.`)
    };
    carWashing(commandsArray);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);